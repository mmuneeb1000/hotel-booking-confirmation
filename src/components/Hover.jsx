import DiamondIcon from "../assets/images/icon-sparkle.svg";
function Hover() {
  return (
    <section className="flex justify-center gap-4 align-center">
      <img src={DiamondIcon} />
      <p className="text-xs uppercase tracking-widest">Hover To Fan</p>
      <img src={DiamondIcon} />
    </section>
  );
}

export default Hover;
