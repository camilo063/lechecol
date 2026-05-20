import AnimatedSection from './AnimatedSection';

type Props = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionTitle({ title, subtitle, centered = true, light = false }: Props) {
  return (
    <AnimatedSection className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-tight mb-4 ${
          light ? 'text-white' : 'text-lechecol-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/80' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
