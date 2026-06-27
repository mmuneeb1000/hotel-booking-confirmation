function Confirmation() {
  return (
    <section className="w-full  justify-around flex bg-neutral-100">
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
        <button className="flex items-center justify-center gap-2 rounded-xl border border-neutral-500 bg-white px-4 py-1 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100">
          Print receipt
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl  px-4 py-1 text-sm font-medium bg-neutral-900 text-white transition hover:bg-neutral-700">
          Add to calendar
        </button>
      </div>
    </section>
  );
}
export default Confirmation;
