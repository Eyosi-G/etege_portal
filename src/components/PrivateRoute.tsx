import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hook";
import jwt_decode from "jwt-decode";
import * as moment from "moment"

interface IProps {
    children: React.ReactNode;
    roles: string[];
}

interface IJwt {
    exp: number
}
const PrivateRoute = (props: IProps) => {
    const { data } = useAppSelector((state) => state.user);

    if (!data) {
        return <Navigate to="/auth/login" />;
    }

    const decoded = jwt_decode<IJwt>(data.token);

    if (moment.utc(Date.now() / 1000).isAfter(moment.utc(decoded.exp))) {
        return <Navigate to="/auth/login" />;
    }


    if (!props.roles.includes(data.role)) return <Navigate to="/auth/login" />;
    return <>{props.children}</>;
};

export default PrivateRoute;