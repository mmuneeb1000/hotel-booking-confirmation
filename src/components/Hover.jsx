import DiamondIcon from "../assets/images/icon-sparkle.svg";
function Hover() {
  return (
    <section className=" hidden lg:flex lg:justify-center lg:gap-3 lg:align-center">
      <img className="w-2" src={DiamondIcon} />
      <p className="text-[10px] uppercase text-neutral-800 tracking-widest">
        Hover To Fan
      </p>
      <img className="w-2" src={DiamondIcon} />
    </section>
  );
}

export default Hover;
