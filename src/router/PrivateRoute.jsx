import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";

const PrivateRoute = ({ element: Element, isAuth, ...rest }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            navigate("/sign-in", { replace: true });
        }
    }, [isAuth, navigate]);

    return isAuth
};

export default PrivateRoute;