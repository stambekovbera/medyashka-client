import React, {FC} from 'react';
import {createUseStyles} from "react-jss";
import {
    FooterComponent,
    HeaderComponent
} from "./components";
import {Outlet, useLocation} from "react-router-dom";

interface LayoutProps {
    isAuth: boolean;
}

const Layout: FC<LayoutProps> = (props) => {
    const {
        isAuth
    } = props;
    const classes = useStyles();
    const location = useLocation();

    const renderFooter = () => {
        const path = location.pathname;

        switch (path) {
            case "/books":
                return null;
            case "/profile":
                return null;
            default:
                return <FooterComponent/>;
        }
    }
    return (
        <>
            <HeaderComponent isAuth={isAuth}/>
            <main className={classes.main}>
                <Outlet/>
            </main>
            {renderFooter()}
        </>
    );
};

const useStyles = createUseStyles({
    main: {
        flex: "1 0 auto",
    }
})

export default Layout;