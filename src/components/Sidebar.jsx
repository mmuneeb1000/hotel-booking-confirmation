import { useState } from "react";
import MainLogo from "../assets/images/logo.svg";
import SunImage from "../assets/images/icon-weather.svg";
import {
  Menu,
  X,
  Sun,
  MapPin,
  Home,
  Coffee,
  MessageCircle,
  Calendar,
  Sparkles,
} from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const menuItems = [
    { icon: Calendar, label: "Your stay", href: "#" },
    { icon: Home, label: "The house", href: "#" },
    { icon: MapPin, label: "Around town", href: "#" },
    { icon: Coffee, label: "Breakfast", href: "#" },
    { icon: MessageCircle, label: "Messages", href: "#" },
  ];

  return (
    <section>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white transition"
        aria-label="Toggle menu"
      >
        <Menu size={24} className="text-stone-700" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-80 bg-neutral-100 z-50 
          transform transition-transform border-r border-neutral-400 duration-300 ease-in-out
          lg:translate-x-0 lg:relative lg:w-72 lg:min-h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          flex flex-col shadow-2xl lg:shadow-none
        `}
      >
        {/* Close button - mobile only */}
        <button
          onClick={closeSidebar}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-xl transition"
          aria-label="Close menu"
        >
          <X size={24} className="text-stone-700" />
        </button>

        <div className="p-6 pt-8 lg:pt-6 border-b border-stone-100">
          <img src={MainLogo} />
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-stone-600 hover:bg-amber-50 hover:text-stone-800 transition group"
                  onClick={closeSidebar}
                >
                  <item.icon
                    size={20}
                    className="text-stone-400 group-hover:text-amber-600 transition"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-4 p-4 relative overflow-hidden rounded-2xl bg-sun-300 bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col items-start justify-between">
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-700">
              Today in Cassis
            </p>

            <p className="text-3xl font-heading text-stone-700 mt-1">27°</p>
            <p className="text-sm text-stone-500">Sunny · light breeze</p>
          </div>
          <img className="absolute wd-full right-0 -top-4" src={SunImage} />
        </div>
        <footer>
          <div className="p-6 mt-4 ">
            <div className="space-y-2">
              <p className="text-xs text-neutral-700 leading-relaxed">
                <span className="font-bold text-neutral-700">EST. 1987</span>
                <br />
                MAISON SOLEIL - 12 RUE DES OLIVIERS - CASSIS
              </p>
              <p className="text-[10px] text-neutral-700 tracking-wider">
                © 2026 MAISON SOLEIL
              </p>
            </div>
          </div>
        </footer>
      </aside>
    </section>
  );
}

export default Sidebar;
