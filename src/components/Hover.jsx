import DiamondIcon from "../assets/images/icon-sparkle.svg";
function Hover() {
  return (
    <section className="flex justify-center align-center">
      <span>
        <img src={DiamondIcon} />
        Hover To Fan
        <img src={DiamondIcon} />
      </span>
    </section>
  );
}

export default Hover;
