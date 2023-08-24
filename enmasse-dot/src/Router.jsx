import React, { Suspense, useState, useMemo } from "react";
import { Routes, Route, Navigate, useNavigate, Outlet } from 'react-router-dom';
import { RouteConstants } from "./utils/constants/routeConstants";
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        typography: {
            "fontFamily": `"Poppins", sans-serif`,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#E0E3E7',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#111827',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: 'var(--TextField-brandBorderColor)',
                    },
                    root: {
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor:
                                'var(--TextField-brandBorderHoverColor)',
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]:
                        {
                            borderColor:
                                'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        '&:before, &:after': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        '&:before': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom:
                                '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });

const ProtectedRoute = ({ isLogged, children }) => {
    if (!isLogged) {
        return <Navigate to={RouteConstants.login} />;
    }
    return <Outlet />;
}

const AppRouter = () => {
    const outerTheme = useTheme();

    const [isLogged, setIsLogged] = useState(false);
    const [visiblePanel, setVisiblePanel] = useState(0);
    const [overlay, setOverlay] = useState(true);

    const navigate = useNavigate();

    const Login = useMemo(() => React.lazy(() => import("./components/login/Login")), []);
    const HomeContainer = useMemo(() => React.lazy(() => import("./components/HomeContainer")), []);
    const DashboardContainer = useMemo(() => React.lazy(() => import("./components/DashboardContainer")), []);
    const StoryContainer = useMemo(() => React.lazy(() => import("./components/StoryContainer")), []);
    const ProfileContainer = useMemo(() => React.lazy(() => import("./components/ProfileContainer")), []);

    const handleLoggedIn = (flag) => {
        setIsLogged(flag);
        if (flag) {
            navigate(RouteConstants.root);
        }
    }

    const handleVisiblePanel = (index) => {
        setVisiblePanel(index);
    };
    
    const handleOverlay = (overlay) => {
        setOverlay(overlay);
    };

    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <Suspense fallback={<div className=""></div>}>
                <Routes>
                    <Route path={RouteConstants.login} element={<Login handleLoggedIn={handleLoggedIn} />} />
                    <Route element={<ProtectedRoute isLogged={isLogged} />}>
                        <Route path={RouteConstants.root} element={<HomeContainer handleVisiblePanel={handleVisiblePanel} handleOverlay={handleOverlay} overlay={overlay} />} />
                        <Route path={RouteConstants.dashboards} element={<DashboardContainer handleVisiblePanel={handleVisiblePanel} />} />
                        <Route path={RouteConstants.stories} element={<StoryContainer handleVisiblePanel={handleVisiblePanel} />} />
                        <Route path={RouteConstants.profile} element={<ProfileContainer handleVisiblePanel={handleVisiblePanel} visiblePanel={visiblePanel} />} />
                    </Route>
                </Routes>
            </Suspense >
        </ThemeProvider>
    );
};

export default AppRouter;
