import { Copy } from "lucide-react";

function Cards() {
  return (
    <section className="w-full flex">
      <div className="w-sm p-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-md">
            01
          </span>
          <h4 className="text-xs font-medium uppercase tracking-wider text-stone-400">
            Arrival
          </h4>
        </div>
        <p className="text-base font-medium text-stone-800 mt-1">
          Check-in from 15:00
        </p>
        <p className="text-sm text-stone-500">Sat, 25 April</p>
        <p className="text-sm text-stone-600 leading-relaxed mt-1.5">
          Ring the brass bell by the blue door. If we’re at the market, the key
          is in the terracotta pot by the olive tree.
        </p>
      </div>

      <div className="w-sm p-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-md">
            02
          </span>
          <h4 className="text-xs font-medium uppercase tracking-wider text-stone-400">
            Wifi
          </h4>
        </div>
        <p className="text-base font-medium text-stone-800 mt-1">
          Le Soleil · Guest
        </p>
        <p className="text-xs text-stone-400 mt-0.5">Password below</p>
        <div className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 mt-2">
          <div>
            <p className="text-xs uppercase tracking-wider text-stone-400">
              Network
            </p>
            <p className="text-sm font-medium text-stone-700">
              Le Soleil · Guest
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-wider text-stone-400">
              Password
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono text-stone-700">
                soleil-2026
              </span>
              <button className="text-stone-400 hover:text-stone-600 transition">
                <Copy size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-sm p-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-md">
            03
          </span>
          <h4 className="text-xs font-medium uppercase tracking-wider text-stone-400">
            Breakfast
          </h4>
        </div>
        <p className="text-base font-medium text-stone-800 mt-1">
          Served 8 – 10:30
        </p>
        <p className="text-sm text-stone-500">On the terrace</p>
        <p className="text-sm text-stone-600 leading-relaxed mt-1.5">
          Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free
          option? Leave a note the night before.
        </p>
      </div>
    </section>
  );
}

export default Cards;
