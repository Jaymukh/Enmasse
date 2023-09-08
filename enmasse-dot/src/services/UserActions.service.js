import { useSetRecoilState, useRecoilState } from 'recoil';
import { useFetchWrapper } from '../helpers';
import { authState, loggedUserState } from '../states';
import { useNavigate, useLocation } from 'react-router-dom';
import { APIS, RouteConstants } from '../constants';

const useUserService = () => {
    // const baseUrl = `${process.env.REACT_APP_BASE_API_URL}`;
    const fetchWrapper = useFetchWrapper();
    const [auth, setAuth] = useRecoilState(authState);
    const setLoggedUser = useSetRecoilState(loggedUserState);
    const navigate = useNavigate();
    const location = useLocation();

    const login = (email_id, password) => {
        return fetchWrapper.post(APIS.USERS.LOGIN, { email_id, password })
            .then(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                setAuth(user);
                getUserDetails().then(data => {
                    setLoggedUser(data);
                })
                    .catch(error => {
                        console.log(error);
                    });
                // get return url from location state or default to home page
                const from = (!location.pathname || location.pathname === '/login') ? RouteConstants.root : location.pathname;
                if (user.is_first_login) {
                    navigate(RouteConstants.update_password);
                } else {
                    navigate(from);
                }
            })
            .catch(error => console.log(error))
    }

    const logout = () => {
        const refresh = auth?.tokens?.refresh;
        return fetchWrapper.post(APIS.USERS.LOGOUT, { refresh })
            .then(response => {
                // remove user from local storage, set auth state to null and redirect to login page
                localStorage.removeItem('user');
                setAuth({});
                navigate(RouteConstants.login);
            })
            .catch(error => console.log(error));

    }

    const getAll = () => {
        return fetchWrapper.get(APIS.USERS.GET_ALL_USERS);
    }

    const getUserDetails = () => {
        return fetchWrapper.get(APIS.USERS.GET_LOGGED_USER);
    }

    const setNewPassword = () => {
        return fetchWrapper.post(APIS.USERS.SET_NEW_PASSWORD);
    }

    const changePassword = (data) => {
        return fetchWrapper.put(APIS.USERS.CHANGE_PASSWORD, data);
    }

    const inviteNew = (newUser) => {
        return fetchWrapper.post(APIS.USERS.INVITE_NEW, newUser)
    }
<<<<<<< HEAD
    
    const editInvite = (updatedUser) => {        
=======

    const editInvite = (updatedUser) => {
>>>>>>> 5d93778daf3e3ce735f1bd853def6cbc6ae42477
        return fetchWrapper.post(APIS.USERS.REINVITE, updatedUser)
    }

    return {
        login,
        logout,
        getAll,
        getUserDetails,
        changePassword,
        setNewPassword,
        inviteNew,
        editInvite,        
    }
}

export { useUserService };