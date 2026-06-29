import { Printer, CalendarPlus, Copy } from "lucide-react";
import IconBarcode from "../assets/images/icon-barcode.svg";
import SunIcon from "../assets/images/illustration-sun.svg";
import SunIconSmall from "../assets/images/icon-sun.svg";

function Booking() {
  return (
    <section
      className="w-75 h-190 flex flex-col-reverse relative md:flex-row mx-auto 
      group items-center bg-neutral-100 px-4 pt-4 gap-4 justify-center md:h-110 lg:h-110
       "
    >
      <img
        className=" hidden lg:flex lg:w-l lg:mx-auto lg:absolute lg:z-1"
        src={SunIcon}
      />
      <div
        className=" w-full bg-white rounded-2xl h-90 p-5 mb-5 z-2 bottom-0
        absolute transform -rotate-1 shadow-[2px_4px_4px_hsla(33,22%,20%,0.4)]
        md:-right-40
        lg:-rotate-4 lg:w-xs lg:top-18 lg:right-40 
        lg:group-hover:rotate-4 lg:group-hover:right-60
        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
       will-change-transform"
      >
        <div className="flex justify-between items-start">
          <h3 className="text-[10px] font-medium uppercase tracking-wider text-neutral-700">
            Receipt
            <p className="text-base text-neutral-900">Your stay</p>
          </h3>
          <div className="text-right">
            <p className="text-[10px] font-mono text-neutral-700">No MS-2026</p>
            <p className="text-[10px] font-mono text-neutral-700">0421-AH</p>
          </div>
        </div>

        <div className="flex justify-center gap-10 mt-3 pt-4 border-t border-neutral-400 ">
          <div className="flex flex-col text-center">
            <p className="text-[10px] uppercase tracking-wider text-neutral-700">
              Check in
            </p>
            <h3 className="text-2xl font-medium text-neutral-900">25 Apr</h3>
            <p className="text-xs text-neutral-700">Saturday · 15:00</p>
          </div>
          <div className="flex flex-col text-center">
            <p className="text-[10px] uppercase tracking-wider text-neutral-700">
              Check out
            </p>
            <h3 className="text-2xl font-medium text-neutral-900">29 Apr</h3>
            <p className="text-xs text-neutral-700">Wednesday · 11:00</p>
          </div>
        </div>

        <div className="border-t border-neutral-400 my-4 pt-4 space-y-1.5 text-xs">
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

        <div className="flex border-t border-neutral-400  justify-between items-center pt-3 mb-4 mt-1">
          <span className="text-sm uppercase tracking-wide text-neutral-600">
            Total Paid
          </span>
          <span className="text-xl font-heading text-neutral-900">
            € 730.40
          </span>
        </div>
        <div className="flex">
          <p className="w-full text-[10px] text-neutral-500 text-left mt-1">
            PAID · WISE · GBP
          </p>
          <img src={IconBarcode} />
        </div>
      </div>
      <div
        className="w-full mb-6 rounded-xl h-90 top-6
       bg-gradient-to-bl from-terracotta-400 to-terracotta-700 p-4
       shadow-[0_10px_20px_hsla(15,69%,37%,0.6)] md:right-40
       absolute z-3 rotate-1 lg:rotate-4
       lg:w-xs lg:left-33 lg:top-19  md:top-15
       lg:group-hover:left-60 lg:group-hover:-rotate-4
       transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
       will-change-transform"
      >
        <div className="flex border-t border-dashed border-sun-200 pt-2">
          <p className="w-full text-xs uppercase tracking-wider text-neutral-200">
            Welcome Card
          </p>
          <img src={SunIconSmall} />
        </div>
        <div className="flex flex-col mt-5 mb-13">
          <h2 className="mt-1.5 text-lg italic text-sun-200">
            A note from your host,
          </h2>
          <h2 className="text-3xl italic text-neutral-100">Margaux.</h2>

          <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
            We're so glad you're coming. The shutters will be open, the lemonade
            cold, and the cat, Poivre, pretending not to notice you.
          </p>
        </div>
        <div className="flex flex-col items-left justify-center">
          <span className="text-[10px] font-medium uppercase tracking-wider text-sun-50">
            Room
          </span>

          <span className="text-lg font-medium text-sun-50">La Garrigue</span>
        </div>
      </div>
    </section>
  );
}

export default Booking;
