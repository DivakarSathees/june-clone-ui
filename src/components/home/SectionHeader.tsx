interface SectionHeaderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
}

const SectionHeader = ({ title, highlight, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-8 lg:mb-10">
      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight-heading">
        {highlight ? (
          <>
            <span className="font-bold">{highlight}</span>
            {title.replace(highlight, "")}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="font-sans text-sm text-muted-foreground mt-2">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
