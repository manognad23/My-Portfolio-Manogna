import { Reveal } from "@/lib/motion";

interface Props {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

export default function SectionHeading({ title, subtitle, gradient = true }: Props) {
  return (
    <Reveal className="text-center mb-12 md:mb-16">
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${gradient ? "gradient-text" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-20 h-1 rounded-full animate-border" />
    </Reveal>
  );
}
