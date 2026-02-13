// Registration deadline: 13 Feb 2026, 23:59:59 Europe/Nicosia (UTC+2)
export const REGISTRATION_DEADLINE = new Date('2026-02-13T23:59:59+02:00');

export function isRegistrationClosed(): boolean {
  return new Date() > REGISTRATION_DEADLINE;
}
