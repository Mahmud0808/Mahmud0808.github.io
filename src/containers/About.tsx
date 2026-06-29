'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';

import { AuthorImage, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const About = () => {
  const { title, img, list, paragraphs } = aboutSection;

  return (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center justify-between gap-10 md:gap-16 lg:items-start lg:flex-row-reverse">
        <AuthorImage src={img} alt={author.name} />
        <div className="space-y-4 lg:w-3/5">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-justify">{paragraph}</p>
          ))}

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-full sm:w-2/3 grid-cols-2 gap-2 text-base">
                {list.items.map((item, i) => (
                  <ListItem key={i}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </Wrapper>
  );
};

export default About;
