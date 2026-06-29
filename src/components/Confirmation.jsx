import MainLogo from "../assets/images/logo.svg";

function Confirmation() {
  return (
    <section
      className=" w-full justify-start flex flex-col gap-4 bg-neutral-100 
      md:flex-row lg:flex-row"
    >
      <div className=" w-75 flex item-left  flex-col lg:w-full">
        <div className=" flex items-center gap-2 mt-0.5">
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            Booking <span className="mx-2">·</span> Confirmed
          </span>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-medium text-neutral-900 md:text-4xl lg:text-4xl">
            Bienvenue, <span className="text-terracotta-500">Lucia.</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-nowrap justify-center mx-auto items-center gap-3">
        <button className="flex text-nowrap cursor-pointer items-center justify-center gap-2 rounded-xl border border-neutral-500 bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-800 transition hover:bg-neutral-200">
          Print receipt
        </button>

        <button className="flex text-nowrap cursor-pointer items-center justify-center gap-2 rounded-xl  border border-neutral-900 px-4 py-1 text-sm font-medium bg-neutral-900 text-white transition hover:bg-neutral-700">
          Add to calendar
        </button>
      </div>
    </section>
  );
}
export default Confirmation;
