import { useSetRecoilState } from 'recoil';
import { RouteConstants } from '../utils/constants/routeConstants';
import { useFetchWrapper } from '../helpers';
import { authState, usersState, loggedUserState } from '../states';
import { useNavigate, useLocation } from 'react-router-dom';

const useUserService = () => {
    // const baseUrl = `${process.env.REACT_APP_BASE_API_URL}`;
    const loginURL = '/users/login/';
    const getAllURL = '/users/all/';
    const fetchWrapper = useFetchWrapper();
    const setAuth = useSetRecoilState(authState);
    const setUsers = useSetRecoilState(usersState);
    const setLoggedUser = useSetRecoilState(loggedUserState);
    const navigate = useNavigate();
    const location = useLocation();

    const login = (email_id, password) => {
        return fetchWrapper.post(loginURL, { email_id, password })

            .then(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                setAuth(user);

                // get return url from location state or default to home page
                const from = (!location.pathname || location.pathname === '/login') ? RouteConstants.root : location.pathname;
                navigate(from);
            });
    }

    const logout  = () => {
        // remove user from local storage, set auth state to null and redirect to login page
        localStorage.removeItem('user');
        setAuth({});
        navigate(RouteConstants.login);
    }  

    function getAll() {
        return fetchWrapper.get(getAllURL).then(setUsers);
    } 

    function getUserDetails() {
        return fetchWrapper.get().then(setLoggedUser);
    }

    return {
        login,
        logout,
        getAll
    }
}

export { useUserService };