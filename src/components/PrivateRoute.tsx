import { useCookies } from 'react-cookie';
import { Route, Navigate, Routes } from 'react-router-dom';
import { history } from '../helpers/history';

function PrivateRoute({ children }: any) {
    const [cookies,] = useCookies();
    if (!cookies.pricerSession) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/signIn" state={{ from: history.location }} /> 
    }
            
            // authorized so return component
    return children;
}

export default PrivateRoute;