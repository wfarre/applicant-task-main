import { useEffect, useState } from "react";
import "./App.css";
import useFecth from "./hooks/useFetch";
import { convertTimeToSeconds } from "./utils/utils";
import Loader from "./components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBiking,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const getBestAthleteInOneCategory = (array, category) => {
  const newArray = array?.map((athlete) => {
    let dataToReturn = {
      firstName: athlete.first_name,
      lastName: athlete.last_name,
      time: "",
    };

    const categoryData = athlete.splits.find(
      (split) => split.name === category
    );

    if (categoryData.time !== "00:00:00" && categoryData.time !== "23:59:59") {
      dataToReturn.time = categoryData.time;
      return dataToReturn;
    }
  });

  console.log(newArray);

  const sortedData = newArray.sort((a, b) => {
    const timeA = convertTimeToSeconds(a.time);
    const timeB = convertTimeToSeconds(b.time);
    return timeA - timeB;
  });

  return sortedData[0];
};

function App() {
  const { data, error, isLoading } = useFecth(
    "https://core.xterraplanet.com/api/application-task/cee4389b-1668-4e39-b500-3572f0982b09"
  );

  const [users, setUsers] = useState();
  const [bestSwimmer, setBestSwimmer] = useState();
  const [bestBiker, setBestBiker] = useState();
  const [bestRunner, setBestRunner] = useState();

  useEffect(() => {
    if (data) {
      const filteredUsers = data.filter(
        (user) =>
          user.total_time !== "00:00:00" && user.total_time !== "23:59:59"
      );

      let sortedData = filteredUsers.sort((a, b) => {
        const timeA = convertTimeToSeconds(a.total_time);
        const timeB = convertTimeToSeconds(b.total_time);
        return timeA - timeB;
      });

      console.log(data);
      // const max = Math.max(...)

      setUsers(sortedData);
    }
  }, [data]);

  useEffect(() => {
    if (data) console.log(getBestAthleteInOneCategory(data, "swim_time"));

    // setBestSwimmer();
  }, [data]);

  useEffect(() => {
    console.log(bestSwimmer);
  });

  return (
    <div className="relative">
      {/* {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : ( */}
      <>
        <div className=" bg-zinc-900 text-white pt-6 pb-6 mb-8">
          <h1 className=" text-5xl font-semibold text-center  uppercase">
            Results
          </h1>
        </div>

        <section className="mb-8">
          <h2 className=" text-2xl font-bold text-center mb-5">
            Best time by category
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <article className=" bg-zinc-200 rounded-2xl px-4 py-3 w-80">
              <div className="flex gap-3 justify-center mb-6">
                <div className="relative h-6 w-6">
                  <FontAwesomeIcon
                    className="absolute text-red-600 w-full h-full left-0 top-0"
                    icon={faPersonBiking}
                  />
                </div>
                <h3>Fastest runner</h3>
              </div>

              <ul className="flex justify-between">
                <li className="flex items-center gap-3 ">
                  <FontAwesomeIcon className=" text-zinc-900" icon={faUser} />
                  <p>
                    {bestSwimmer
                      ? `${bestSwimmer?.first_name}  ${bestSwimmer?.last_name}`
                      : "--"}
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    className=" text-zinc-900"
                    icon={faStopwatch}
                  />
                  <p>{bestSwimmer?.splits[0].time}</p>
                </li>
              </ul>
            </article>

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

              <div className="flex justify-between flex-wrap">
                <div className="flex items-center gap-3 ">
                  <FontAwesomeIcon className=" text-zinc-900" icon={faUser} />
                  <p>John Doe John Doe John Doe</p>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    className=" text-zinc-900"
                    icon={faStopwatch}
                  />
                  <p>1:52:00</p>
                </div>
              </div>
            </article>

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

              <div className="flex justify-between flex-wrap">
                <div className="flex items-center gap-3 ">
                  <FontAwesomeIcon className=" text-zinc-900" icon={faUser} />
                  <p>John Doe John Doe John Doe</p>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    className=" text-zinc-900"
                    icon={faStopwatch}
                  />
                  <p>1:52:00</p>
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* <table className="w-full">
            <thead className="text-left bg-zinc-900 text-white ">
              <tr>
                <th className="px-1 py-2">First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Division</th>
                <th>Nationality</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody id="table-body">
              {users?.map((user, index) => {
                return (
                  <tr key={user.last_name + index} className="py-2">
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.gender}</td>
                    <td>{user.division}</td>
                    <td>{user.nationality}</td>
                    <td>{user.total_time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
      </>
      {/* )} */}
    </div>
  );
}

export default App;
