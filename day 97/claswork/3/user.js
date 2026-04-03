import { getProfile } from './profile.js';

export function getUser() {
  const user = { name: "Gio" };

  return {
    ...user,
    profile: getProfile(user)
  };
}