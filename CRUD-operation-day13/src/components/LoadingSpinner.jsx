export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-8 h-8 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
