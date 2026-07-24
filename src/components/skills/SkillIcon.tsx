import { Icon } from '@iconify/react';

type Props = {
  src: string;
  name: string;
};

const SkillIcon = ({ src, name }: Props) => {
  return (
    <div className="relative grid h-14 w-14 place-items-center rounded-full border border-slate-900/10 bg-bg-secondary text-2xl shadow-sm dark:border-slate-50/10 dark:shadow-xl sm:h-16 sm:w-16 group">
      <Icon icon={src} width="32" height="32" />
      <div className="absolute invisible z-50 px-2 py-1 text-sm text-white capitalize duration-200 rounded shadow-md opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-8 bg-slate-800/95 dark:bg-slate-700/95 dark:text-slate-100">
        {name}
        <svg
          className="absolute left-0 w-full h-2 text-slate-800/95 dark:text-slate-700/95 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default SkillIcon;
