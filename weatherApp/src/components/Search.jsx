// Search.jsx

export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Enter city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="flex-1 rounded-xl border border-white/30 bg-white/20 backdrop-blur-md px-5 py-3 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-white/40"
      />

      <button
        onClick={handleSearch}
        className="rounded-xl bg-white px-6 py-3 font-semibold text-sky-700 transition duration-300 hover:scale-105 hover:bg-sky-100 active:scale-95"
      >
        Search
      </button>
    </div>
  );
}