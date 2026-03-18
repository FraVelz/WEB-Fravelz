
export default function Search() {
  return (
    <>
      <button className="size-4 cursor-pointer">
        <svg
          className="text-slate-800 dark:text-gray-300 size-6 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          fill="currentColor"
          enableBackground="new 0 0 32 32"
          id="Glyph"
          version="1.1"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
            id="XMLID_223_"
          />
        </svg>
      </button>

      {/* <div className="hidden">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 dark:border-gray-600 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 sm:text-sm"
          placeholder="Buscar..."
        />
      </div> */}
    </>
  );
}