import { Preferences } from "@capacitor/preferences";

export const PREFERENCE_SESSION_STATE_KEY = "session-state";

const setSessionState = async (value: any) => {
  await Preferences.set({
    key: PREFERENCE_SESSION_STATE_KEY,
    value: JSON.stringify(value),
  });
};

const getSessionState = async () => {
  const { value } = await Preferences.get({
    key: PREFERENCE_SESSION_STATE_KEY,
  });
  return value ? JSON.parse(value) : {};
};

const clearSessionState = async () => {
  await Preferences.remove({ key: PREFERENCE_SESSION_STATE_KEY });
};

export { setSessionState, getSessionState, clearSessionState };
