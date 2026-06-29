import DiamondIcon from "../assets/images/icon-sparkle.svg";
function Hover() {
  return (
    <section className=" hidden lg:flex lg:justify-center lg:gap-4 lg:align-center">
      <img src={DiamondIcon} />
      <p className="text-xs uppercase text-neutral-800 tracking-widest">
        Hover To Fan
      </p>
      <img src={DiamondIcon} />
    </section>
  );
}

export default Hover;
