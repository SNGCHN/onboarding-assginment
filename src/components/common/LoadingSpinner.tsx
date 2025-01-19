export default function LoadingSpinner() {
  return (
    <div data-testid="loading-spinner" className="flex justify-center items-center h-full w-full">
      <div className="relative">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-indigo-500 animate-spin"></div>
        <div className="w-12 h-12 rounded-full border-4 border-gray-200"></div>
      </div>
    </div>
  );
}
