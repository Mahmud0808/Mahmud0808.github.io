import { Fragment } from 'react';

import { abbreviations } from '@/lib/content/about';

const pattern = new RegExp(`\\b(${Object.keys(abbreviations).join('|')})\\b`);

const WithAbbr = ({ text }: { text: string }) => (
  <>
    {text.split(pattern).map((part, i) =>
      abbreviations[part] ? (
        <abbr key={i} title={abbreviations[part]}>
          {part}
        </abbr>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      )
    )}
  </>
);

export default WithAbbr;
