function Confirmation() {
  return (
    <section className="w-full  justify-around flex">
      <div className=" flex item-left  flex-col">
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
            Booking . Confirmed
          </span>
        </div>

        <div className="text-left">
          <p className="text-xl font-light text-stone-800">Bienvenue, Lucia.</p>
        </div>
      </div>
      <div className="flex  items-center gap-3">
        <button className="flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-8 py-2 text-sm font-medium text-white transition hover:bg-stone-800">
          Print receipt
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100">
          Add to calendar
        </button>
      </div>
    </section>
  );
}
export default Confirmation;
