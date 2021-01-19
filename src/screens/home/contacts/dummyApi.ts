import { users, User } from '../../login/dummyApi';

const usersArr = Object.values(users);

export const getContacts = (uDisplayName: string) => {
  return usersArr
    .filter(({ displayName }: User) => displayName !== uDisplayName)
    .map(({ displayName, id }) => ({ displayName, id }))
    .sort((a, b) =>
      a.displayName > b.displayName
        ? 1
        : a.displayName < b.displayName
        ? -1
        : 0,
    );
};
