import { Review } from '@/lib/types';

export const leadReview: Review = {
  client: 'marijnko',
  source: 'Fiverr',
  country: 'Croatia',
  quote:
    'The code he delivered is clean, well-structured, and highly professional. He followed best practices and made sure everything was scalable and easy to maintain.',
};

export const reviews: Review[] = [
  {
    client: 'rakanaaaaaaaaaa',
    source: 'Fiverr',
    country: 'Saudi Arabia',
    quote:
      'Told me he needed 3 days and finished in less than a day with amazing work.',
  },
  {
    client: 'jaywhiz00',
    source: 'Fiverr',
    country: 'Nigeria',
    quote:
      'Incredible work! Delivered a complex Java backend project flawlessly and faster than expected. He is super-efficient, highly skilled, and a true lifesaver!',
  },
  {
    client: 'sofix19',
    source: 'Fiverr',
    country: 'Croatia',
    quote: 'Very professional and fast. All recommendations for this guy!',
  },
  {
    client: 'michaelmalka29',
    source: 'Fiverr',
    country: 'United States',
    quote: 'just the best we will keep hiring him',
  },
  {
    client: 'marijnko',
    source: 'Fiverr',
    country: 'Croatia',
    quote: 'the best person on the platform',
  },
  {
    client: 'rakanaaaaaaaaaa',
    source: 'Fiverr',
    country: 'Saudi Arabia',
    quote: 'Amazing quick add ons in a matter of hours',
  },
  {
    client: 'michaelmalka29',
    source: 'Fiverr',
    country: 'United States',
    quote: 'one of the best developers',
  },
  {
    client: 'jaywhiz00',
    source: 'Fiverr',
    country: 'Nigeria',
    quote:
      'Really happy with the work! Everything was done smoothly and just as I asked. Super easy to work with and quick to respond. Would definitely work together again.',
  },
  {
    client: 'Kyler',
    source: 'Telegram',
    country: 'United States',
    quote:
      'Love your app and everything you do! I wish that women protector app you have was also for iPhone because I would absolutely have my gf install that on her phone... Amazing work and it will one day save a life',
  },
];

export const featuredReviewCount = 4;

export const reviewCounts = [leadReview, ...reviews].reduce<
  Record<string, number>
>((counts, review) => {
  counts[review.client] = (counts[review.client] ?? 0) + 1;
  return counts;
}, {});
