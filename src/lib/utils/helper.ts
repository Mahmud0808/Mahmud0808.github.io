const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const parseYearMonth = (value: string) => {
  const [year, month] = value.split('-').map(Number);
  return { year, month };
};

export const formatYearMonth = (value: string) => {
  const { year, month } = parseYearMonth(value);
  return `${MONTHS[month - 1]} ${year}`;
};

export const formatDuration = (start: string, now = new Date()) => {
  const { year, month } = parseYearMonth(start);
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [
    years > 0 && `${years} yr${years > 1 ? 's' : ''}`,
    rest > 0 && `${rest} mo${rest > 1 ? 's' : ''}`,
  ].filter(Boolean);
  return parts.length ? parts.join(' ') : 'New';
};

export const sortByYear = <T extends { year: number }>(items: T[]) =>
  [...items].sort((a, b) => b.year - a.year);
