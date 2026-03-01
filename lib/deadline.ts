// Registration deadline: 14 Mar 2026, 12:00:00 Europe/Berlin (UTC+1)
export const REGISTRATION_DEADLINE = new Date('2026-03-14T12:00:00+01:00');

export function isRegistrationClosed(): boolean {
  return new Date() > REGISTRATION_DEADLINE;
}
