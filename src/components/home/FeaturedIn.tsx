const logos = [
  "Forbes", "Vogue", "Elle", "GQ", "Cosmopolitan", "Femina"
];

const FeaturedIn = () => {
  return (
    <div className="py-12 lg:py-16 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <h3 className="font-sans text-[11px] font-bold uppercase tracking-nav text-center text-muted-foreground mb-8">
          Featured In
        </h3>
        <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-serif text-xl lg:text-2xl font-semibold text-muted-foreground/40 tracking-tight-heading"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
