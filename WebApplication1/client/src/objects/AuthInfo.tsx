import RoleType from "../enums/RoleType"

type AuthInfo = {
    isAuthenticated: boolean;
    loginName: string;
    role: RoleType;
}

export default AuthInfo;

// какой объект получим с сервера