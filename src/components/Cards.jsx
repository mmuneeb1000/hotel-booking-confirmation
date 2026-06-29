import { Copy } from "lucide-react";
import ArrivalImg from "../assets/images/icon-key.svg";
import WifiImg from "../assets/images/icon-wifi.svg";
import BreakfastImg from "../assets/images/icon-breakfast.svg";

function Cards() {
  return (
    <section
      className="w-full mt-10 pt-4 flex flex-col
     md:flex-row lg:flex-row justify-center bg-neutral-100 gap-6"
    >
      <div className="w-full p-4 rounded-lg bg-white lg:w-xs border border-neutral-400">
        <div className="flex items-center gap-3 ">
          <img
            className="bg-terracotta-600 p-1.5 rounded-xl"
            src={ArrivalImg}
          />
          <h4 className="text-sm w-full font-medium uppercase tracking-wider  text-terracotta-600">
            Arrival
          </h4>
          <span className="text-xl font-bold text-terracotta-600 px-2 py-0.5 rounded-md">
            01
          </span>
        </div>
        <h3 className="text-xl text-neutral-700 font-medium mt-3">
          Check-in from 15:00
        </h3>
        <p className="text-xs text-neutral-500">Sat, 25 April</p>
        <p className="text-sm text-neutral-600 leading-relaxed mt-2">
          Ring the brass bell by the blue door. If we’re at the market, the key
          is in the terracotta pot by the olive tree.
        </p>
      </div>

      <div className="w-full p-4 rounded-lg bg-white lg:w-xs border border-neutral-400">
        <div className="flex items-center gap-3">
          <img className="bg-blue-500 p-1.5 rounded-xl" src={WifiImg} />
          <h4 className="text-sm w-full font-medium uppercase tracking-wider  text-blue-500">
            Wifi
          </h4>
          <span className="text-xl font-bold text-blue-500 px-2 py-0.5 rounded-md">
            02
          </span>
        </div>
        <h3 className="text-xl text-neutral-700 font-medium mt-3">
          Le Soleil · Guest
        </h3>
        <p className="text-xs text-neutral-500">Password below</p>
        <div className="flex flex-col gap-2 items-start justify-between mt-4">
          <div className="w-full flex align-center rounded-xl bg-neutral-200 whitespace-nowrap py-1 px-2">
            <p className="text-xs mt-0.75 w-full  uppercase tracking-wider  text-neutral-700">
              Network
            </p>
            <p className="text-sm font-medium text-neutral-700">
              Le Soleil · Guest
            </p>
          </div>
          <div className="w-full flex align-center rounded-xl bg-neutral-200 whitespace-nowrap py-1 px-2 ">
            <p className="text-xs mt-0.75 w-full uppercase tracking-wider text-neutral-700">
              Password
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono text-neutral-700 ">
                soleil-2026
              </span>
              <button className="text-neutral-900 hover:text-neutral-500 transition">
                <Copy size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 rounded-lg bg-white lg:w-xs border border-neutral-400">
        <div className="flex items-center gap-3">
          <img className="bg-rose-500 p-1.5 rounded-xl" src={BreakfastImg} />
          <h4 className="w-full text-sm font-medium uppercase tracking-wider text-rose-500">
            Breakfast
          </h4>
          <span className="text-xl font-bold text-rose-500  px-2 py-0.5 rounded-md">
            03
          </span>
        </div>
        <h3 className="text-xl text-neutral-700 font-medium mt-3">
          Served 8 – 10:30
        </h3>
        <p className="text-xs text-neutral-500">On the terrace</p>
        <p className="text-sm text-neutral-600 leading-relaxed mt-2">
          Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free
          option? Leave a note the night before.
        </p>
      </div>
    </section>
  );
}

export default Cards;
