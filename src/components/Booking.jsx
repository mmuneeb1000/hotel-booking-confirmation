import { Printer, CalendarPlus, Copy } from "lucide-react";

function Booking() {
  return (
    <section className="w-full flex mx-auto bg-white p-6 gap-4 justify-center">
      <div className="w-sm mb-6 rounded-2xl border border-amber-200/60 bg-amber-50/60 p-5">
        <h2 className="text-xs font-medium uppercase tracking-wider text-amber-700/70">
          Welcome Card
        </h2>

        <p className="mt-1.5 text-sm italic text-stone-600">
          A note from your host,{" "}
          <span className="font-medium not-italic text-stone-700">
            Margaux.
          </span>
        </p>

        <p className="mt-1.5 text-sm leading-relaxed text-stone-700">
          We're so glad you're coming. The shutters will be open, the lemonade
          cold, and the cat, Poivre, pretending not to notice you.
        </p>
        <div className="flex items-center justify-between border-b border-stone-200/80 py-3">
          <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
            Room
          </span>

          <span className="text-sm font-medium text-stone-700">
            La Garrigue
          </span>
        </div>
      </div>
      <div className=" w-sm bg-stone-50/80 rounded-2xl p-5 my-5 border border-stone-100">
        <div className="flex justify-between items-start">
          <h3 className="text-xs font-medium uppercase tracking-wider text-stone-400">
            Receipt
          </h3>
          <div className="text-right">
            <p className="text-xs text-stone-400">Your stay</p>
            <p className="text-xs font-mono text-stone-500">
              No MS-2026 0421-AH
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-stone-400">
              Check in
            </p>
            <p className="text-base font-medium text-stone-800">25 Apr</p>
            <p className="text-xs text-stone-500">Saturday · 15:00</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-wider text-stone-400">
              Check out
            </p>
            <p className="text-base font-medium text-stone-800">29 Apr</p>
            <p className="text-xs text-stone-500">Wednesday · 11:00</p>
          </div>
        </div>

        <div className="border-t border-stone-200/70 my-4 pt-4 space-y-1.5 text-sm">
          <div className="flex justify-between">
            <span className="text-stone-600">
              Room · La Garrigue × 4 nights
            </span>
            <span className="font-medium text-stone-700">€ 620.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-600">Breakfast × 2 guests</span>
            <span className="font-medium text-stone-700">€ 96.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-600">Tourist tax</span>
            <span className="font-medium text-stone-700">€ 14.40</span>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-stone-200/70 pt-4 mt-1">
          <span className="text-sm font-bold uppercase tracking-wide text-stone-800">
            Total Paid
          </span>
          <span className="text-xl font-bold text-stone-800">€ 730.40</span>
        </div>
        <p className="text-xs text-stone-400 text-right mt-1">
          PAID · WISE · GBP
        </p>
      </div>
    </section>
  );
}

export default Booking;
