import React, {FC} from 'react';
import {Box} from "@mui/material";
import {createUseStyles} from "react-jss";
import clsx from "clsx";
import {FooterComponent, HeaderComponent} from "./components";
import {Outlet} from "react-router-dom";

interface LayoutProps {
    isAuth?: boolean;
}

const Layout: FC<LayoutProps> = (props) => {
    const {
        isAuth
    } = props;
    const classes = useStyles();
    return (
        <>
            <HeaderComponent isAuth={isAuth}/>
            <main className={classes.main}>
                <Outlet/>
            </main>
            <FooterComponent/>
        </>
    );
};

const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
    },
    main: {
        flex: "1 0 auto",
    }
})

export default Layout;