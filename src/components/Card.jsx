import { faStopwatch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Card = ({ athleteTime, athleteName, category, icon }) => {
  return (
    <article className="w-80 max-w-80 rounded-2xl bg-zinc-200 px-2 py-3">
      <div className="mb-6 flex justify-center gap-3">
        <div className="relative h-6 w-6">
          <FontAwesomeIcon
            className="absolute left-0 top-0 h-full w-full text-red-600"
            icon={icon}
          />
        </div>
        <h3 className="font-bold">{category}</h3>
      </div>

      <ul className="flex flex-wrap justify-between">
        <li className="flex items-center gap-3">
          <FontAwesomeIcon className="text-zinc-900" icon={faUser} />
          <p>{athleteName ? athleteName : "-- --"}</p>
        </li>
        <li className="flex items-center gap-3">
          <FontAwesomeIcon className="text-zinc-900" icon={faStopwatch} />
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
  icon: PropTypes.any.isRequired,
};

export default Card;
