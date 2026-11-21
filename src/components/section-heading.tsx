type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">
        <span className="h-px w-6 bg-lime-500" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
