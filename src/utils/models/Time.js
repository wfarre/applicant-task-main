import { convertTimeToSeconds } from "../utils";

export class Time {
  constructor(data) {
    this._time = data.time;
  }

  get timeInSeconds() {
    return convertTimeToSeconds(this._time);
  }

  get time() {
    return this._time;
  }

  get isTimeValid() {
    return this._time !== "00:00:00" && this._time !== "23:59:59";
  }
}
