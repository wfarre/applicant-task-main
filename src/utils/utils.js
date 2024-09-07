/**
 * Convert a time string into seconds
 * @param {String} time
 * @returns {Number} time is seconds
 */
export const convertTimeToSeconds = (time) => {
  const timeArray = time.split(":");
  let totalTime = 0;
  let timeMultiplier = 1;

  for (let i = timeArray.length - 1; i >= 0; i--) {
    totalTime += timeArray[i] * timeMultiplier;
    timeMultiplier *= 60;
  }

  return totalTime;
};

/**
 * Sort an array according to the mentionned type
 * @param {Array} dataToSort array of user
 * @param {String} type time | runTime | swinTime | bikeTime in our case
 * @returns {Array} sorted Array of user
 */
export const sortDataBy = (dataToSort, type) =>
  dataToSort.sort((a, b) => a[type].timeInSeconds - b[type].timeInSeconds);

/**
 *
 * @param {Array} array of athlete
 * @param {String} category
 * @returns {Object} The best athlete's data in the category
 */
export const getBestAthleteInOneCategory = (array, category) => {
  const newArray = array?.filter((athlete) => athlete?.[category].isTimeValid);
  const sortedData = sortDataBy(newArray, category);
  return sortedData[0];
};

/**
 *
 * @param {*} athleteArray : array of all users
 * @returns an object with the best athlete in each category.
 */
export const getBestAthletes = (athleteArray) => {
  let bestTimes = {
    swimTime: null,
    runTime: null,
    bikeTime: null,
  };

  bestTimes = athleteArray.reduce((accumulator, currentAthlete) => {
    Object.keys(accumulator)?.map((key) => {
      if (!currentAthlete[key].isTimeValid) return;
      if (accumulator[key] === null) {
        accumulator = { ...accumulator, [key]: currentAthlete };
      } else if (
        currentAthlete[key].timeInSeconds <
        accumulator[key]?.[key].timeInSeconds
      ) {
        accumulator = { ...accumulator, [key]: currentAthlete };
      }
    });
    return accumulator;
  }, bestTimes);

  return bestTimes;
};

/**
 * if there is an searchInput, it will display the corresponsing athletes,
 * otherwise it will display all athletes.
 * @param {Array} arrayOfUsers
 * @param {String} searchInput : in that case, it would a last name input
 * @returns Array of users
 */
export const filterUsersToDisplaBySearch = (arrayOfUsers, searchInput) => {
  let filteredUsers = arrayOfUsers;

  if (searchInput.length > 0) {
    filteredUsers = filteredUsers.filter((user) =>
      user.lastName.toLowerCase().includes(searchInput.toLowerCase()),
    );
  }

  filteredUsers = filteredUsers.filter(
    (user) => user.totalTime !== "00:00:00" && user.totalTime !== "23:59:59",
  );

  return filteredUsers;
};
