import { Printer, CalendarPlus, Copy } from "lucide-react";
import IconBarcode from "../assets/images/icon-barcode.svg";
import SunIcon from "../assets/images/illustration-sun.svg";
import SunIconSmall from "../assets/images/icon-sun.svg";

function Booking() {
  return (
    <section
      className="w-300 relative h-108 flex mx-auto group
      items-center bg-neutral-100 px-4 pt-4 gap-4 justify-center "
    >
      <img className="w-l mx-auto absolute z-1" src={SunIcon} />
      <div
        className=" w-xs absolute transform -rotate-4 bg-white 
        rounded-2xl h-90 p-5 mb-5 border border-stone-100 z-2 top-18 left-80 group-hover:left-20"
      >
        <div className="flex justify-between items-start">
          <h3 className="text-xs font-medium uppercase tracking-wider text-neutral-700">
            Receipt
            <p className="text-lg text-neutral-900">Your stay</p>
          </h3>
          <div className="text-right">
            <p className="text-xs font-mono text-c">No MS-2026 0421-AH</p>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-700">
              Check in
            </p>
            <p className="text-base font-medium text-neutral-900">25 Apr</p>
            <p className="text-xs text-neutral-700">Saturday · 15:00</p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-wider text-neutral-700">
              Check out
            </p>
            <p className="text-base font-medium text-neutral-900">29 Apr</p>
            <p className="text-xs text-neutral-700">Wednesday · 11:00</p>
          </div>
        </div>

        <div className="border-t border-stone-200/70 my-4 pt-4 space-y-1.5 text-sm">
          <div className="flex justify-between">
            <span className="text-neutral-900">
              Room · La Garrigue × 4 nights
            </span>
            <span className="font-medium text-neutral-900">€ 620.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-900">Breakfast × 2 guests</span>
            <span className="font-medium text-neutral-900">€ 96.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-900">Tourist tax</span>
            <span className="font-medium text-neutral-900">€ 14.40</span>
          </div>
        </div>

        <div
          className="flex justify-between items-center 
        border-t border-stone-200/70 pt-4 mb-4 mt-1"
        >
          <span className="text-sm font-bold uppercase tracking-wide text-neutral-600">
            Total Paid
          </span>
          <span className="text-xl font-bold text-neutral-900">€ 730.40</span>
        </div>
        <div className="flex">
          <p className="w-full text-xs text-neutral-500 text-left mt-1">
            PAID · WISE · GBP
          </p>
          <img src={IconBarcode} />
        </div>
      </div>
      <div
        className="w-xs mb-6 rounded-xl h-90 transform absolute rotate-4  
       bg-gradient-to-bl from-terracotta-400 to-terracotta-600 p-5 z-3 
       right-62 top-18 group-hover:right-20"
      >
        <div className="flex border-t border-dashed border-sun-200 pt-2">
          <p className="w-full text-xs uppercase tracking-wider text-neutral-200">
            Welcome Card
          </p>
          <img src={SunIconSmall} />
        </div>
        <div className="flex flex-col mt-5 mb-13">
          <p className="mt-1.5 text-lg italic text-sun-200">
            A note from your host,
          </p>
          <h2 className="text-xl italic text-neutral-100">Margaux.</h2>

          <p className="mt-1.5 text-sm leading-relaxed text-neutral-100">
            We're so glad you're coming. The shutters will be open, the lemonade
            cold, and the cat, Poivre, pretending not to notice you.
          </p>
        </div>
        <div className="flex flex-col items-left justify-center">
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-200">
            Room
          </span>

          <span className="text-xl font-medium text-neutral-200">
            La Garrigue
          </span>
        </div>
      </div>
    </section>
  );
}

export default Booking;
