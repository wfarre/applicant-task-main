import { lazy, Suspense, useEffect, useRef, useState } from "react";
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
import RankingTable from "./components/RankingTable";
import { Header } from "./components/Header";
import GoTopButton from "./components/GoTopButton";
// import Footer from "./components/Footer";

const Footer = lazy(() => import("./components/Footer"));
// const Card = lazy(() => import("./components/Card"));

function App() {
  const [allUsers, setAllUsers] = useState();
  const [users, setUsers] = useState();
  const [bestSwimmer, setBestSwimmer] = useState();
  const [bestBiker, setBestBiker] = useState();
  const [bestRunner, setBestRunner] = useState();

  const topRef = useRef();

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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div ref={topRef}></div>
          <Header />
          <main className="relative">
            {error ? (
              <Error errorMsg={error} />
            ) : (
              <>
                <GoTopButton
                  goTop={() =>
                    topRef.current.scrollIntoView({ behavior: "smooth" })
                  }
                />
                <section className="mb-8 w-full" id="best-times">
                  <h2 className="mb-5 text-center text-2xl font-bold">
                    Best time by category
                  </h2>
                  <ul className="flex w-full flex-wrap justify-center gap-8">
                    {bestTimes.map((bestTime, index) => {
                      return (
                        <li key={"bestTime" + index}>
                          {/* <Suspense> */}
                          <Card
                            athleteTime={bestTime?.time}
                            athleteName={bestTime?.athleteName}
                            icon={bestTime?.icon}
                            category={bestTime?.category}
                          />
                          {/* </Suspense> */}
                        </li>
                      );
                    })}
                  </ul>
                </section>
                <section className="w-full pb-32" id="table">
                  <RankingTable users={users} />
                </section>
              </>
            )}
          </main>
          <Suspense>
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
