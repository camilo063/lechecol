type Props = {
  fromColor?: string;
  toColor?: string;
  direction?: 'down' | 'up';
};

export default function DiagonalDivider({
  fromColor = '#F5A800',
  direction = 'down',
}: Props) {
  const clipPath =
    direction === 'down'
      ? 'polygon(0 0, 100% 0, 100% 40%, 0 100%)'
      : 'polygon(0 0, 100% 60%, 100% 100%, 0 100%)';

  return (
    <div
      className="w-full h-12 md:h-16"
      style={{ backgroundColor: fromColor, clipPath }}
      aria-hidden="true"
    />
  );
}
