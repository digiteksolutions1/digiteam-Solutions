export default function SectionHeader({ title, subtitle, tagline }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
        {tagline}
      </span>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-xl text-gray-600">
        {subtitle}
      </p>
    </div>
  )
}