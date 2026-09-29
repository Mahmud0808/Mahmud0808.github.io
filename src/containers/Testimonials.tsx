import { fiverrProfile } from '@/lib/content/portfolio';
import {
  featuredReviewCount,
  leadReview,
  reviewCounts,
  reviews,
} from '@/lib/content/testimonials';
import { Review } from '@/lib/types';

import { NewTab } from '@/components/Icons';
import ShowMore from '@/components/ShowMore';

const ReviewCard = ({
  review,
  lead = false,
  name,
}: {
  review: Review;
  lead?: boolean;
  name: string;
}) => {
  const count = reviewCounts[review.client];
  return (
    <figure
      className={lead ? 'quote lead' : 'quote'}
      style={{ viewTransitionName: name } as React.CSSProperties}
    >
      <blockquote>
        <p>{review.quote}</p>
      </blockquote>
      <figcaption className="who">
        <span className="avatar" aria-hidden="true">
          {review.client.charAt(0)}
        </span>
        <span>
          <strong>{review.client}</strong>
          <small>
            {review.source} · {review.country}
            {count > 1 && ` · ${count} reviews`}
          </small>
        </span>
      </figcaption>
    </figure>
  );
};

const Testimonials = () => {
  const featured = reviews.slice(0, featuredReviewCount);
  const rest = reviews.slice(featuredReviewCount);

  return (
    <section
      className="section"
      id="testimonials"
      aria-labelledby="testimonials-h"
    >
      <div className="section-head">
        <h2 id="testimonials-h">What people say</h2>
        <a href={fiverrProfile} target="_blank" rel="noopener noreferrer">
          All reviews on Fiverr <NewTab />
        </a>
      </div>
      <div className="words">
        <ReviewCard review={leadReview} lead name="review-lead" />
        {featured.map((review, i) => (
          <ReviewCard key={review.quote} review={review} name={`review-${i}`} />
        ))}
      </div>
      {rest.length > 0 && (
        <ShowMore
          name="reviews"
          moreLabel={`Show ${rest.length} more reviews`}
          lessLabel="Show fewer reviews"
        >
          <div className="words">
            {rest.map((review, i) => (
              <ReviewCard
                key={review.quote}
                review={review}
                name={`review-${featured.length + i}`}
              />
            ))}
          </div>
        </ShowMore>
      )}
    </section>
  );
};

export default Testimonials;
