import { atom } from "recoil";

export const AllSettingsState = atom({
    key: 'allSettings',
    default: {},
});

export const UserSettingsState = atom({
    key: 'userSettings',
    default: {},
});