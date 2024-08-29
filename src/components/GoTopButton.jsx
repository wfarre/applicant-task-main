import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const GoTopButton = ({ goTop }) => {
  const handleClick = () => {
    goTop();
  };
  return (
    <aside className="z-10">
      <button
        className="fixed bottom-16 right-6 h-12 w-12 rounded-full border border-solid border-white bg-zinc-900"
        onClick={handleClick}
      >
        <FontAwesomeIcon
          className="text-xl text-white"
          icon={faAngleDoubleUp}
        />
        <span className="absolute left-0 top-0 h-0 w-0 opacity-0">
          Go to the top of the page
        </span>
      </button>
    </aside>
  );
};

GoTopButton.propTypes = {
  goTop: PropTypes.func,
};

export default GoTopButton;
