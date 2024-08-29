import { useEffect, useState } from "react";
import useFecth from "./hooks/useFetch";
import Loader from "./components/Loader";
import {
  faPersonBiking,
  faRunning,
  faSwimmer,
} from "@fortawesome/free-solid-svg-icons";
import UserFactory from "./utils/Factories/UserFactory";
import Card from "./components/Card";
import { getBestAthleteInOneCategory, sortDataBy } from "./utils/utils";
import Error from "./components/Error";

function App() {
  const [allUsers, setAllUsers] = useState();
  const [users, setUsers] = useState();
  const [bestSwimmer, setBestSwimmer] = useState();
  const [bestBiker, setBestBiker] = useState();
  const [bestRunner, setBestRunner] = useState();

  const [data, error, isLoading] = useFecth(
    "https://core.xterraplanet.com/api/application-task/cee4389b-1668-4e39-b500-3572f0982b09",
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
        (user) =>
          user.totalTime !== "00:00:00" && user.totalTime !== "23:59:59",
      );
      setUsers(sortDataBy(filteredUsers, "totalTime"));
      setBestSwimmer(getBestAthleteInOneCategory(allUsers, "swimTime"));
      setBestRunner(getBestAthleteInOneCategory(allUsers, "runTime"));
      setBestBiker(getBestAthleteInOneCategory(allUsers, "bikeTime"));
    }
  }, [allUsers]);

  const bestTimes = [
    {
      category: "Fastest Run",
      athleteName:
        bestRunner && bestRunner?.firstName + " " + bestRunner?.lastName,
      time: bestRunner && bestRunner?.runTime,
      icon: faRunning,
    },
    {
      category: "Fastest Ride",
      athleteName:
        bestBiker && bestBiker?.firstName + " " + bestBiker?.lastName,
      time: bestBiker && bestBiker?.bikeTime,
      icon: faPersonBiking,
    },
    {
      category: "Fastest Swim",
      athleteName:
        bestSwimmer && bestSwimmer?.firstName + " " + bestSwimmer?.lastName,
      time: bestSwimmer && bestSwimmer?.swimTime,
      icon: faSwimmer,
    },
  ];

  return (
    // <div className="relative">
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="mb-8 w-full bg-zinc-900 pb-6 pt-6 text-white">
            <h1 className="text-center text-5xl font-semibold uppercase">
              Results
            </h1>
          </header>

          <main>
            {error ? (
              <Error errorMsg={error} />
            ) : (
              <>
                <section className="mb-8 w-full" id="best-times">
                  <h2 className="mb-5 text-center text-2xl font-bold">
                    Best time by category
                  </h2>
                  <ul className="flex w-full flex-wrap justify-center gap-8">
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
                <section className="mb-6 w-full" id="table">
                  <table className="w-full table-fixed text-sm sm:text-base">
                    <thead className="bg-zinc-900 py-2 text-left text-white">
                      <tr>
                        <th className="">First Name</th>
                        <th className="">Last Name</th>
                        <th className="overflow-hidden text-ellipsis">
                          Gender
                        </th>
                        <th className="overflow-hidden text-ellipsis">
                          Division
                        </th>
                        <th className="overflow-hidden text-ellipsis">
                          Nationality
                        </th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody id="table-body">
                      {users?.map((user, index) => {
                        return (
                          <tr key={user.lastName + index}>
                            <td className="overflow-hidden text-ellipsis">
                              {user.firstName}
                            </td>
                            <td className="overflow-hidden text-ellipsis">
                              {user.lastName}
                            </td>
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
    </>
    // </div>
  );
}

export default App;
