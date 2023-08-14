
import { BsMouse2 } from "react-icons/bs";

const Mousescrol = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <section>
        <div className="row">
            <button id="scrolbtn" onClick={scrollTo}>
              <BsMouse2 id="mous" />
            </button>
    
        </div>
      </section>
    </div>
  );
};

export default Mousescrol;