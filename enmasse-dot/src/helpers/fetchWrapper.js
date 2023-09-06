import { useRecoilState } from 'recoil';
import { authState } from '../states';

function useFetchWrapper() {
    const [auth, setAuth] = useRecoilState(authState);

    return {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE')
    };

    function request(method) {
        return (url, body) => {
            const requestOptions = {
                method,
                headers: authHeader(url)
            };
            if (body) {
                requestOptions.headers['Content-Type'] = 'application/json';
                requestOptions.body = JSON.stringify(body);
            }
            return fetch(url, requestOptions).then(handleResponse);
        }
    }

    // helper functions

    async function authHeader(url) {
        // return auth header with jwt if user is logged in and request is to the api url
        const token = auth?.tokens?.access;
        const isLoggedIn = !!token;
        const isTokenExpired = checkTokenExpired(token);
        if (isLoggedIn && !isTokenExpired) {
            return { Authorization: `Bearer ${token}` };
        } 
        // else if (isLoggedIn && isTokenExpired) {
        //     try {
        //         const newAccessToken = await getRefreshToken();
        //         const updatedAuth = {
        //             ...auth,
        //             tokens: {
        //                 ...auth.tokens,
        //                 access: newAccessToken
        //             }
        //         };
        //         setAuth(updatedAuth);
        //         return { Authorization: `Bearer ${newAccessToken}` };
        //     } catch (error) {
        //         console.error('Error refreshing access token:', error);
        //         // You can choose to log the user out or handle this error differently
        //         return {};
        //     }
        // } 
        else {
            return {};
        }
    }

    function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);

            if (!response.ok) {
                if ([401, 403].includes(response.status) && auth?.token) {
                    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                    localStorage.removeItem('user');
                    setAuth(null);
                }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    }

    function checkTokenExpired(accessToken) {
        if (!accessToken) {
            // Token is missing; consider it expired.
            return true;
        }

        try {
            const tokenData = JSON.parse(atob(accessToken.split('.')[1]));
            const expirationTime = tokenData.exp * 1000;
            const currentTime = Date.now();
            return currentTime >= expirationTime;
        } catch (error) {
            // Error parsing the token; consider it expired.
            return true;
        }
    }

    async function getRefreshToken() {
        const refresh = auth?.tokens?.refresh;
        const requestOptions = {
            method: 'POST',
            'Content-Type': 'application/json',
            refresh
        };
        const url = '/users/token-refresh/';
        const response = await fetch(url, requestOptions);
        return handleResponse(response);
    }

}

export { useFetchWrapper };

