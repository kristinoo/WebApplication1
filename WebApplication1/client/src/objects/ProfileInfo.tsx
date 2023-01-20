import RoleType from "../enums/RoleType";
import {ProfileInput} from "./ProfileInput";


export type ProfileInfo = {
    id: string;
    loginName: string;
    role: RoleType;
    userProfile: ProfileInput;
    errorMessage: string;
};
// в каком виде получаем инфу с сервера