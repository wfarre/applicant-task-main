import User from "../models/User";

export default class UserFactory {
  constructor(data, type) {
    if (type === "APIv1") {
      return new User(data);
    }
  }
}
