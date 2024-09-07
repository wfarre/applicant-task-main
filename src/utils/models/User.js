import { Time } from "./Time";

export default class User {
  constructor(data) {
    this._lastName = data.last_name;
    this._firstName = data.first_name;
    this._gender = data.gender;
    this._division = data.division;
    this._nationality = data.nationality;
    this._totalTime = data.total_time;
    this._splits = data.splits;
  }

  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get gender() {
    return this._gender;
  }

  get division() {
    return this._division;
  }

  get nationality() {
    return this._nationality;
  }

  get totalTime() {
    return new Time({ time: this._totalTime });
  }

  get swimTime() {
    return new Time({ time: this._splits[0].time });
  }

  get bikeTime() {
    return new Time({ time: this._splits[1].time });
  }

  get runTime() {
    return new Time({ time: this._splits[2].time });
  }
}
