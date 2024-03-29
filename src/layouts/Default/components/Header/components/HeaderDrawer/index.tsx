import React, {FC} from 'react';
import {createUseStyles} from "react-jss";
import {
    Box, Button,
    Drawer, Grid, IconButton,
    List,
    ListItem, ListItemButton, ListItemText, Typography
} from "@mui/material";
import {
    Facebook as FacebookIcon,
    Instagram as InstIcon,
    YouTube as YouTubeIcon,
    Login as LoginIcon
} from '@mui/icons-material';
import clsx from "clsx";
import {Link, useLocation} from "react-router-dom";

interface HeaderDrawerProps {
    isOpenDrawer: boolean;
    isAuth: boolean;
    onCloseDrawer: () => void;
    onOpenDialog: () => void;
}

const HeaderDrawer: FC<HeaderDrawerProps> = (props) => {
    const {
        isOpenDrawer,
        isAuth,

        onCloseDrawer,
        onOpenDialog,
    } = props;
    const classes = useStyles();
    const location = useLocation();

    const openActionsDialog = () => {
        onOpenDialog();
        onCloseDrawer();
    }
    const getNavList = (isAuth: boolean) => {
        if (isAuth) {
            return [
                {
                    id: 1,
                    label: "Главная",
                    to: "/",
                },
                {
                    id: 2,
                    label: "Книги",
                    to: "/books",
                },
                {
                    id: 3,
                    label: "Профиль",
                    to: "/profile",
                },
            ]
        } else {
            return [
                {
                    id: 5,
                    label: "Главная",
                    to: "/",
                },
                {
                    id: 6,
                    label: "Книги",
                    to: "/books",
                },
            ]
        }
    };
    return (
        <>
            <Drawer
                classes={{
                    paper: classes.drawerContainer,
                }}
                anchor="left"
                open={isOpenDrawer}
                variant="temporary"

                onClose={onCloseDrawer}
            >
                <Box className={classes.drawerBox}>
                    <Grid
                        container
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="center"
                        height="100%"
                    >
                        <Grid item>
                            <Grid container flexDirection="column" alignItems="center">
                                {!isAuth && (
                                    <Grid item>
                                        <IconButton
                                            className={classes.loginIcon}
                                            color="secondary"

                                            onClick={openActionsDialog}
                                        >
                                            <LoginIcon/>
                                        </IconButton>
                                    </Grid>
                                )}
                                <Grid item>
                                    <List>
                                        {
                                            getNavList(isAuth).map(item => (
                                                <ListItem
                                                    key={item.id}
                                                    className={clsx({
                                                        [classes.drawerListItem]: true,
                                                        [classes.activePage]: location.pathname === item.to,
                                                    })}
                                                >
                                                    <Link to={item.to || '/'}>
                                                        <Button
                                                            disableRipple
                                                            className={classes.drawerButton}

                                                            onClick={onCloseDrawer}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    </Link>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <List>
                                <Grid container flexDirection="column">
                                    <Grid item>
                                        <IconButton className={classes.socialIcon} color="secondary">
                                            <InstIcon/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton className={classes.socialIcon} color="secondary">
                                            <YouTubeIcon/>
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton className={classes.socialIcon} color="secondary">
                                            <FacebookIcon/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </>
    );
};

const useStyles = createUseStyles({
    drawerContainer: {
        "&.MuiPaper-root": {
            padding: "20px 0",
            borderRadius: "0 28px 28px 0",
            backgroundColor: "#FEDE77",
        }
    },
    drawerBox: {
        height: "100%",
        textAlign: "center",
    },
    drawerListItem: {
        "&.MuiListItem-root": {
            justifyContent: "center",
            padding: "0 0 0 20px",
            marginBottom: "0",
            borderRight: "10px solid rgba(0, 0, 0, 0.0)",
            transition: "all .2s linear",
            "&:last-child": {
                marginBottom: "0",
            }
        }
    },
    drawerButton: {
        "&.MuiButton-root": {
            textAlign: "center",
            color: "#000000",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "16px",
            letterSpacing: "0.14em",
            width: "100%",
            borderRadius: "0",
            transition: "all .2s linear",
            padding: "0 12px",

            "&:hover": {
                color: "#FB8349",
            }
        },
    },
    loginIcon: {
        "&.MuiButtonBase-root": {
            "& svg": {
                width: 32,
                height: 32,
                fill: "#000000",
                transition: "all .2s linear",
                "& path": {
                    fill: "#000000",
                    transition: "all .2s linear",
                },
            },

            "&:hover": {
                "& svg, path": {
                    fill: "#FB8349",
                }
            }
        }
    },
    socialIcon: {
        "&.MuiButtonBase-root": {
            "& svg": {
                width: 32,
                height: 32,
                fill: "#000000",
                transition: "all .2s linear",
                "& path": {
                    fill: "#000000",
                    transition: "all .2s linear",
                },
            },

            "&:hover": {
                "& svg, path": {
                    fill: "#FB8349",
                }
            }
        }
    },

    activePage: {
        "&.MuiListItem-root": {
            backgroundColor: "rgba(251,131,73, 0.15)",
            borderColor: "#FB8349",
            "& .MuiButton-root": {
                color: "#FB8349",
            }
        }
    },
});

export default HeaderDrawer;