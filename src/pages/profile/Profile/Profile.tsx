import React, {FC, useEffect, useRef, useState} from 'react';
import {
    Backdrop,
    Box,
    CircularProgress,
    Container,
    Grid
} from '@mui/material';
import {agent} from "../../../api/agent";
import {IResponseUserImage} from "../../../types/ResponseTypes";
import {IError} from "../../../types/ErrorTypes";
import {
    BooksInformation as BooksInformationComponent,
    DialogImageForm as DialogImageFormComponent,
    GamesInformation as GamesInformationComponent,
    MainInformation as MainInformationComponent
} from './components';
import {DialogConfirmationComponent} from "../../../components";
import {Notification, NotificationTypes} from "../../../common/Notification";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";
import {useActions} from "../../../hooks/redux/useActions";

interface ProfileProps {
}

const Profile: FC<ProfileProps> = (props) => {
    const {
        userProgress
    } = useTypedSelector(state => state.user);
    const {
        getUserProgress
    } = useActions();
    const [userImage, setUserImage] = useState<IResponseUserImage>({
        avatar: "",
        id: 0,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isOpenImageForm, setIsOpenImageForm] = useState(false);
    const [isShowBackdrop, setIsShowBackdrop] = useState(false);

    const refDialogConfirmation = useRef<any>(null);

    useEffect(() => {
        (async () => {
            await getUserProgress();
            await getUserImage();
        })()
    }, []);

    const getUserImage = async () => {
        await setIsLoading(true);
        const response: IResponseUserImage | IError = await agent.get<IResponseUserImage>(`medya-api/user-image`)
            .then(res => {
                return {
                    id: res.data.id,
                    avatar: res.data.avatar,
                }
            })
            .catch(err => {
                return {error: err.response.data.message}
            });

        setUserImage(response as IResponseUserImage);
        await setIsLoading(false);
    }

    const changeImage = async (image: any, isConfirm?: boolean) => {
        if (!isConfirm) {
            if (refDialogConfirmation && refDialogConfirmation.current) {
                refDialogConfirmation.current.onOpen({
                    message: "Вы действительно хотите изменить изображение?",
                    acceptButtonTitle: "Да, изменить",
                    cancelButtonTitle: "Нет",
                    acceptButtonAction: changeImage.bind(this, image, true),
                })
            }
            return;
        }
        await setIsShowBackdrop(true);

        const response = await agent.put(`medya-api/user-image`, image)
            .then(res => res.data)
            .catch(err => {
                return {error: err.response.data.message}
            });
        if (response.error) {
            Notification({
                message: response.error,
                type: NotificationTypes.error,
            });
            await setIsShowBackdrop(false);
        } else {
            Notification({
                message: 'Изображение успешно сохранено',
                type: NotificationTypes.success,
            });
            await getUserImage();
            await setIsShowBackdrop(false);
        }
    };

    const handleSetIsOpenImage = (isOpen: boolean) => {
        setIsOpenImageForm(isOpen);
    };
    const handleCLoseIsOpenImage = () => {
        handleSetIsOpenImage(false);
    }
    return (
        <>
            <Container maxWidth="xl">
                {Boolean(!isLoading) && (
                    <Grid container alignItems='center' columnSpacing={5}>
                        <Grid item xs={9}>
                            <Grid container flexDirection='column'>
                                <Grid item>
                                    <MainInformationComponent
                                        userProgress={userProgress}
                                        userImage={userImage}

                                        onOpen={handleSetIsOpenImage}
                                    />
                                </Grid>
                                <Grid item>
                                    <BooksInformationComponent userProgress={userProgress}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <Box>
                                <GamesInformationComponent/>
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </Container>

            <DialogImageFormComponent
                isOpen={isOpenImageForm}

                onClose={handleCLoseIsOpenImage}
                onChangeImage={changeImage}
            />

            <DialogConfirmationComponent
                ref={refDialogConfirmation}
            />

            <Backdrop open={isShowBackdrop}>
                <CircularProgress color="secondary" size={64}/>
            </Backdrop>
        </>
    );
};

export default Profile;