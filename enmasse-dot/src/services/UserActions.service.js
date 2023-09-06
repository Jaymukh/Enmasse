import { useSetRecoilState } from 'recoil';
import { RouteConstants } from '../utils/constants/routeConstants';
import { useFetchWrapper } from '../helpers';
import { authState, loggedUserState } from '../states';
import { useNavigate, useLocation } from 'react-router-dom';
import { APIS } from '../constants';

const useUserService = () => {
    // const baseUrl = `${process.env.REACT_APP_BASE_API_URL}`;
    const fetchWrapper = useFetchWrapper();
    const setAuth = useSetRecoilState(authState);
    const setLoggedUser = useSetRecoilState(loggedUserState);
    const navigate = useNavigate();
    const location = useLocation();

    const login = (email_id, password) => {
        return fetchWrapper.post(APIS.USERS.LOGIN, { email_id, password })
            .then(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                setAuth(user);
                
                // get return url from location state or default to home page
                const from = (!location.pathname || location.pathname === '/login') ? RouteConstants.root : location.pathname;
                navigate(from);
            })
            .catch(error => console.log(error))
    }

    const logout = () => {
        // remove user from local storage, set auth state to null and redirect to login page
        localStorage.removeItem('user');
        setAuth({});
        navigate(RouteConstants.login);
    }

    function getAll() {
        return fetchWrapper.get(APIS.USERS.APIS.GET_ALL_USERS);
    }

    function getUserDetails() {
        return fetchWrapper.get(APIS.USERS.GET_LOGGED_USER)
    }

    return {
        login,
        logout,
        getAll,
        getUserDetails
    }
}

export { useUserService };