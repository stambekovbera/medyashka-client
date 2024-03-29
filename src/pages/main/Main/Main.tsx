import React, {FC, useEffect} from 'react';
import {
    Box,
    Container
} from "@mui/material";
import {
    BooksInformation as BooksInformationComponent,
    CharactersInformation as CharactersInformationComponent,
    Feedback as FeedbackComponent
} from './components';
import {createUseStyles} from "react-jss";
import {useActions} from "../../../hooks/redux/useActions";

interface MainProps {
}

const Main: FC<MainProps> = () => {
    const {
        getUserProgress
    } = useActions();
    const classes = useStyles();

    useEffect(() => {
        (async () => {
            await getUserProgress();
        })();
    }, []);
    return (
        <>
            <Container maxWidth="xl">
                <Box className={classes.sliderContent}>
                    <BooksInformationComponent/>
                </Box>
            </Container>
            <Box className={classes.charactersContent}>
                <Container maxWidth="xl">
                    <CharactersInformationComponent/>
                </Container>
            </Box>
            <Container maxWidth="xl">
                <FeedbackComponent/>
            </Container>
        </>
    );
};

const useStyles = createUseStyles({
    sliderContent: {
        marginTop: 150,
    },
    charactersContent: {
        marginTop: 150,
        paddingTop: 50,
        paddingBottom: 50,
        background: "#6252B0",
    },
})

export default Main;