
export default function Search() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="text-gray-500 dark:text-gray-400 h-5 w-5 text-xl"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>

      <div className="hidden">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 dark:border-gray-600 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 sm:text-sm"
          placeholder="Buscar..."
        />
      </div>
    </div>
  );
}