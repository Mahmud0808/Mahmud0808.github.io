'use client';
import dynamic from 'next/dynamic';

// Loaded client-side only: the player touches `document` at import time,
// which breaks static prerendering (no DOM on the server).
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((m) => m.Player),
  { ssr: false }
);

type Props = {
  path: any;
  className?: string;
};

const ShowLottie = ({ path, className = '' }: Props) => {
  return (
    <div className={`max-w-sm md:max-w-md !z-40 ${className}`}>
      <Player autoplay loop src={path}></Player>
    </div>
  );
};

export default ShowLottie;
