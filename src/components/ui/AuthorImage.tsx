import { prefix } from '@/lib/utils/config';

import Image from 'next/image';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
    <div className="relative w-64 h-64 group sm:w-auto sm:h-auto !z-40">
      <Image
        src={`${prefix}${src}`}
        alt={alt}
        width={300}
        height={300}
        className="rounded-xl shadow-xl drop-shadow-corner pointer-events-none object-cover object-center"
      />
      <div className="absolute inset-0 border-[3px] z-[-1] rounded-xl border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"></div>
    </div>
  );
};

export default AuthorImage;
