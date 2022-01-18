interface UserProps {
  login: string;
  password: string;
}

export default class UserServices {
  async execute({ login, password }: UserProps) {
    console.log({ login, password });
    if (login === "bruno" && password === "bruno123") {
      return true;
    }

    return false;
  }
}
