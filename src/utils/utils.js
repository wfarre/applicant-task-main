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
  dataToSort.sort((a, b) => {
    const timeA = convertTimeToSeconds(a[type]);
    const timeB = convertTimeToSeconds(b[type]);
    return timeA - timeB;
  });

/**
 *
 * @param {Array} array of athlete
 * @param {String} category
 * @returns {Object} The best athlete's data in the category
 */
export const getBestAthleteInOneCategory = (array, category) => {
  const newArray = array?.filter(
    (athlete) =>
      athlete[category] !== "00:00:00" && athlete[category] !== "23:59:59",
  );
  const sortedData = sortDataBy(newArray, category);
  return sortedData[0];
};
