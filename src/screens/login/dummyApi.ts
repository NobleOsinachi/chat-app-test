export interface User {
  id: number;
  email: string;
  displayName: string;
  password: string;
}

export const users = {
  0: {
    id: 0,
    email: 'zero@zero.com',
    displayName: 'Gokou',
    password: 'zero',
  },
  1: {
    id: 1,
    email: 'one@one.com',
    displayName: 'Vegeta',
    password: 'one',
  },
  2: {
    id: 2,
    email: 'two@two.com',
    displayName: 'Gohan',
    password: 'two',
  },
  3: {
    id: 3,
    email: 'three@three.com',
    displayName: 'Trunks',
    password: 'three',
  },
  4: {
    id: 4,
    email: 'four@four.com',
    displayName: 'Goten',
    password: 'four',
  },
};

export interface UserNonSensitive {
  displayName: string;
  id: number;
}

interface LogInArgs {
  email: string;
  password: string;
}

interface LogInRes {
  err: string | undefined;
  user: UserNonSensitive | undefined;
}

export const logIn = ({ email, password }: LogInArgs): LogInRes => {
  let err;
  const userArr = Object.values(users);
  const matchedUser = userArr.find((u) => {
    const { email: uEmail, password: uPassword } = u;

    if (email === uEmail && password !== uPassword) {
      err = 'Oops, incorrect password... try again?';
    }

    return email === uEmail && password === uPassword;
  });

  const user = matchedUser
    ? { id: matchedUser.id, displayName: matchedUser.displayName }
    : undefined;
  err = !matchedUser && !err ? 'Oops no such user found...' : err;

  return { err, user };
};
