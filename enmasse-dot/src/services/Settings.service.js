import { useSetRecoilState } from 'recoil';
import { useFetchWrapper } from '../helpers';
import { authState, usersState, loggedUserState } from '../states';
import { useNavigate, useLocation } from 'react-router-dom';
import { APIS, RouteConstants } from '../constants';

const useSettingsService = () => {
    const fetchWrapper = useFetchWrapper();

    function getAllSettings() {
        return fetchWrapper.get(APIS.SETTINGS.GET_ALL_SETTINGS);
    }
    function getUserSettings() {
        return fetchWrapper.get(APIS.SETTINGS.GET_USER_SETTINGS);
    }

    return {
        getAllSettings,
        getUserSettings
        
    }
}

export { useSettingsService };