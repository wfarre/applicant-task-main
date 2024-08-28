import {
  //   faPersonBiking,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Card = ({ athleteTime, athleteName, category, icon }) => {
  return (
    <article className=" bg-zinc-200 rounded-2xl px-2 py-3 max-w-80 w-80">
      <div className="flex gap-3 justify-center mb-6">
        <div className="relative h-6 w-6">
          {/* <FontAwesomeIcon
            className="absolute text-red-600 w-full h-full left-0 top-0"
            icon={faPersonBiking}
          /> */}
          {icon}
        </div>
        <h3>{category}</h3>
      </div>

      <ul className="flex justify-between flex-wrap">
        <li className="flex items-center gap-3 ">
          <FontAwesomeIcon className=" text-zinc-900" icon={faUser} />
          <p>{athleteName ? athleteName : "-- --"}</p>
        </li>
        <li className="flex items-center gap-3">
          <FontAwesomeIcon className=" text-zinc-900" icon={faStopwatch} />
          <p>{athleteTime ? athleteTime : "--:--:--"}</p>
        </li>
      </ul>
    </article>
  );
};

Card.propTypes = {
  athleteTime: PropTypes.string,
  athleteName: PropTypes.string,
  category: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Card;
