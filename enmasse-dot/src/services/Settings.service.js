import { useSetRecoilState } from 'recoil';
import { RouteConstants } from '../utils/constants/routeConstants';
import { useFetchWrapper } from '../helpers';
import { authState, usersState, loggedUserState } from '../states';
import { useNavigate, useLocation } from 'react-router-dom';

const useSettingsService = () => {
    const fetchWrapper = useFetchWrapper();
}

export { useSettingsService };