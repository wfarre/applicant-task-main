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
