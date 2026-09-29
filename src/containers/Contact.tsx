import { contact } from '@/lib/content/contact';
import { author } from '@/lib/content/portfolio';

import CopyEmail from '@/components/CopyEmail';
import SocialLinks from '@/components/SocialLinks';

const Contact = () => (
  <section className="section contact" id="contact" aria-labelledby="contact-h">
    <h2 id="contact-h">{contact.heading}</h2>
    <p>{contact.text}</p>
    <div className="email-row">
      <a className="email" id="email-address" href={`mailto:${author.email}`}>
        {author.email}
      </a>
      <CopyEmail email={author.email} />
    </div>
    <SocialLinks />
    <p className="sign" aria-hidden="true">
      {author.shortName}
    </p>
  </section>
);

export default Contact;
