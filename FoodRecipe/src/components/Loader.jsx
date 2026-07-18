export default function Loader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500"></div>

        <h2 className="text-xl font-semibold text-gray-700">
          Loading recipes...
        </h2>

        <p className="text-gray-500">
          Please wait a moment.
        </p>
      </div>
    </div>
  );
}