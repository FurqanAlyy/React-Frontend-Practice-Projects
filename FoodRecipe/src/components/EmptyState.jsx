export default function EmptyState({
  title,
  subtitle,
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mb-6 text-7xl">
          🍽️
        </div>

        <h2 className="mb-3 text-3xl font-bold text-gray-800">
          {title}
        </h2>

        <p className="text-lg text-gray-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}