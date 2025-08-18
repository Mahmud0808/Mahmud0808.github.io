type Props = { children: React.ReactNode; className?: string; multiLine?: boolean };

const ListItem = ({ children, className = '', multiLine = false }: Props) => {
  return (
    <li className={`gap-1 flex ${!multiLine ? 'items-center transition-all duration-300 hover:translate-x-2 hover:text-accent select-none cursor-default' : 'text-justify'} ${className}`}>
      <span className={`min-w-10 ${multiLine ? 'mt-[1px]' : ''}`}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-sky-400 text-xl mr-2"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M192 128l128 128-128 128z"></path>
        </svg>
      </span>
      {children}
    </li>
  );
};

export default ListItem;
