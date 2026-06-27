function Confirmation() {
  return (
    <section className="w-full  justify-around flex bg-neutral-100">
      <div className=" w-full flex item-left  flex-col">
        <div className=" flex items-center gap-2 mt-0.5">
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
            Booking · Confirmed
          </span>
        </div>

        <div className="text-left">
          <h2 className="text-4xl font-medium text-neutral-900">
            Bienvenue, <span className="text-terracotta-500">Lucia.</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-nowrap justify-center items-center gap-3">
        <button className="flex text-nowrap cursor-pointer items-center justify-center gap-2 rounded-xl border border-neutral-500 bg-white px-4 py-1 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100">
          Print receipt
        </button>

        <button className="flex text-nowrap cursor-pointer items-center justify-center gap-2 rounded-xl  px-4 py-1 text-sm font-medium bg-neutral-900 text-white transition hover:bg-neutral-700">
          Add to calendar
        </button>
      </div>
    </section>
  );
}
export default Confirmation;
