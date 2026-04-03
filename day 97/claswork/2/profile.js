import { createProfile } from './shared.js';
import { getUser } from './user.js';

export function getProfile() {
  const user = getUser();
  return createProfile(user);
}