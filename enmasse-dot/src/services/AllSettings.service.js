import { useSetRecoilState } from 'recoil';
import { RouteConstants } from '../utils/constants/routeConstants';
import { useFetchWrapper } from '../helpers';
import { authState, usersState, loggedUserState } from '../states';
import { useNavigate, useLocation } from 'react-router-dom';

const useUserService = () => {
    // const allSettings = () => {
    //     return fetchWrapper.post(editInviteURL, updatedUser)
    // }
}

export { useUserService };