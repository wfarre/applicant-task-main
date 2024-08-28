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

export const sortDataBy = (dataToSort, type) =>
  dataToSort.sort((a, b) => {
    const timeA = convertTimeToSeconds(a[type]);
    const timeB = convertTimeToSeconds(b[type]);
    return timeA - timeB;
  });

export const getBestAthleteInOneCategory = (array, category) => {
  const newArray = array?.filter(
    (athlete) =>
      athlete[category] !== "00:00:00" && athlete[category] !== "23:59:59"
  );
  const sortedData = sortDataBy(newArray, category);
  return sortedData[0];
};
