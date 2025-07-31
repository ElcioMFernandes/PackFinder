export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center flex-col z-50">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="mt-4 text-gray-600">Searching for packages...</div>
    </div>
  );
};
