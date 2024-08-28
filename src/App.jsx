import { useEffect, useState } from "react";
import "./App.css";
import useFecth from "./hooks/useFetch";
import Loader from "./components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBiking,
  faRunning,
  faSwimmer,
} from "@fortawesome/free-solid-svg-icons";
import UserFactory from "./utils/Factories/UserFactory";
import Card from "./components/Card";
import { getBestAthleteInOneCategory, sortDataBy } from "./utils/utils";

function App() {
  const [allUsers, setAllUsers] = useState();
  const [users, setUsers] = useState();
  const [bestSwimmer, setBestSwimmer] = useState();
  const [bestBiker, setBestBiker] = useState();
  const [bestRunner, setBestRunner] = useState();

  const [data, error, isLoading] = useFecth(
    "https://core.xterraplanet.com/api/application-task/cee4389b-1668-4e39-b500-3572f0982b09"
  );

  useEffect(() => {
    if (data) {
      const userArray = data.map((user) => new UserFactory(user, "APIv1"));
      setAllUsers(userArray);
    }
  }, [data]);

  useEffect(() => {
    if (allUsers) {
      const filteredUsers = allUsers.filter(
        (user) => user.totalTime !== "00:00:00" && user.totalTime !== "23:59:59"
      );
      const sortedData = sortDataBy(filteredUsers, "totalTime");
      setUsers(sortedData);
    }
  }, [allUsers]);

  useEffect(() => {
    if (allUsers) {
      setBestSwimmer(getBestAthleteInOneCategory(allUsers, "swimTime"));
      setBestRunner(getBestAthleteInOneCategory(allUsers, "runTime"));
      setBestBiker(getBestAthleteInOneCategory(allUsers, "bikeTime"));
    }
  }, [allUsers]);

  const bestTimes = [
    {
      category: "Fastest Runner",
      athleteName:
        bestRunner && bestRunner?.firstName + " " + bestRunner?.lastName,
      time: bestRunner && bestRunner?.runTime,
      icon: (
        <FontAwesomeIcon
          className="absolute text-red-600 w-full h-full left-0 top-0"
          icon={faRunning}
        />
      ),
    },
    {
      category: "Fastest Ride",
      athleteName:
        bestBiker && bestBiker?.firstName + " " + bestBiker?.lastName,
      time: bestBiker && bestBiker?.bikeTime,
      icon: (
        <FontAwesomeIcon
          className="absolute text-red-600 w-full h-full left-0 top-0"
          icon={faPersonBiking}
        />
      ),
    },
    {
      category: "Fastest Swimmer",
      athleteName:
        bestSwimmer && bestSwimmer?.firstName + " " + bestSwimmer?.lastName,
      time: bestSwimmer && bestSwimmer?.swimTime,
      icon: (
        <FontAwesomeIcon
          className="absolute text-red-600 w-full h-full left-0 top-0"
          icon={faSwimmer}
        />
      ),
    },
  ];

  return (
    <div className="relative">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className=" bg-zinc-900 text-white pt-6 pb-6 mb-8">
            <h1 className=" text-5xl font-semibold text-center  uppercase">
              Results
            </h1>
          </header>

          <main>
            {error ? (
              <p className="text-center text-xl">{error}</p>
            ) : (
              <>
                <section className="mb-8" id="best-times">
                  <h2 className=" text-2xl font-bold text-center mb-5">
                    Best time by category
                  </h2>
                  <ul className="flex justify-center gap-8 flex-wrap">
                    {bestTimes.map((bestTime, index) => {
                      return (
                        <li key={"bestTime" + index}>
                          <Card
                            athleteTime={bestTime?.time}
                            athleteName={bestTime?.athleteName}
                            icon={bestTime?.icon}
                            category={bestTime?.category}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </section>
                <section id="table">
                  <table className="w-full">
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
                          <tr key={user.lastName + index} className="py-2">
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>{user.division}</td>
                            <td>{user.nationality}</td>
                            <td>{user.totalTime}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </section>
              </>
            )}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
