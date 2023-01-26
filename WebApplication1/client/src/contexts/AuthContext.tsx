import React, {useState, useMemo, useEffect} from "react"
import RoleType from "../enums/RoleType"
import AuthInfo from "../objects/AuthInfo"
import AuthInput from "../objects/AuthInput"
import authRepository from "../repositories/AuthRepository"
import { createContext } from "react";
import {useNavigate} from "react-router-dom";

interface IAuthContext {
    loginName: string;
    isAuthenticated: boolean;
    role: RoleType;
    login: (input: AuthInput) => Promise<AuthInfo>;
    registration: (input: AuthInput) => Promise<AuthInfo>;
    logout: () => Promise<AuthInfo>;
}

export const AuthContext = createContext<IAuthContext>({
    loginName: "",
    isAuthenticated: false,
    role: RoleType.Undefined,
    login(input: AuthInput): Promise<AuthInfo> {
        throw Error("Отсутствует реализация метода");
    },
    registration(input: AuthInput): Promise<AuthInfo> {
        throw Error("Отсутствует реализация метода");
    },
    logout(): Promise<AuthInfo> {
        throw Error("Отсутствует реализация метода");
    },
});

export const AuthContextProvider = ({ children }: any) => {
    // const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState(RoleType.Undefined);
    const [loginName, setLoginName] = useState("");
    const [thigs, theThing] = useState(0);
    const navigate = useNavigate();
    // useEffect(() => {
    //     authRepository.getInfo().then((data) => {
    //         setState(data);
    //         if (!data.isAuthenticated) {
    //             navigate("/auth");
    //         }
    //     });
    // }, []);

    const setState = (authInfo: AuthInfo) => {
        setIsAuthenticated(authInfo.isAuthenticated);
        setRole(authInfo.role);
        setLoginName(authInfo.loginName);
    };

    const login = async (input: AuthInput): Promise<AuthInfo> => {
        let data = await authRepository.login(input);
        setState(data);
        return data;
    };
    const registration = async (input: AuthInput): Promise<AuthInfo> => {
        let data = await authRepository.registration(input);
        setState(data);
        return data;
    };

    const logout = async (): Promise<AuthInfo> => {
        let data = await authRepository.logout();
        setState(data);
        return data;
    };

    return (
        <AuthContext.Provider
            value={{ loginName, isAuthenticated, role, login, registration, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};