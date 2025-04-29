export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100  md:bg-green-300 lg: bg-cyan-100 xl:bg-orange-300 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600 flex flex-col gap-2 md:flex-row">
        <input
          type="email"
          placeholder="Search"
          className="w-full rounded-full py-3 bg-gray-200  pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow peer"
        />
        <button className="bg-black bg-opacity-80 text-white py-2 rounded-full 
        focus:scale-90 transition-transform font-medium md:px-5  peer:invalid:bg-red-500">
          Search
        </button>
      </div>
    </main>
  );
}
