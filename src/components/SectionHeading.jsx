export default function SectionHeading({ subtitle, title, description, align = "left" }) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-brand-red font-semibold tracking-wider uppercase text-xs mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}