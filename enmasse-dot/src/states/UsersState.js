import { atom } from "recoil";

export const usersState = atom({
    key: 'users',
    default: [],
});

export const loggedUserState = atom({
    key: "loggedUser",
    default: {},
});