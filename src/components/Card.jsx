import {
  faPersonBiking,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  return (
    <article className=" bg-zinc-200 rounded-2xl px-2 py-3 max-w-80">
      <div className="flex gap-3 justify-center mb-6">
        <div className="relative h-6 w-6">
          <FontAwesomeIcon
            className="absolute text-red-600 w-full h-full left-0 top-0"
            icon={faPersonBiking}
          />
        </div>
        <h3>Fastest runner</h3>
      </div>

      <ul className="flex justify-between flex-wrap">
        <li className="flex items-center gap-3 ">
          <FontAwesomeIcon className=" text-zinc-900" icon={faUser} />
          <p>John Doe John Doe John Doe</p>
        </li>
        <li className="flex items-center gap-3">
          <FontAwesomeIcon className=" text-zinc-900" icon={faStopwatch} />
          <p>1:52:00</p>
        </li>
      </ul>
    </article>
  );
};

export default Card;
