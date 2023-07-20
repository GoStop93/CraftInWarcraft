import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from 'react-helmet';
import { 
    StyledContainer, 
    StyledContent, 
    StyledTitle, 
    StyledSubtitle, 
    StyledButton 
} from "./Page404.styles";

export const Page404 = () => {
    let navigate = useNavigate();

    const path = require('../../assets/audio/not_prepared.mp3');
    const [audio] = useState<HTMLAudioElement>(new Audio(path));

    const handleHover = () => {
        audio.play();
        setTimeout(() => {
            navigate('/main')
        }, 7000)
    };

    return (
        <>
            <Helmet>
                <title>404</title>
                <link rel="icon" href="/favicons/404.ico" />
            </Helmet>
            <StyledContainer>
                <StyledContent>
                    <StyledTitle>You are not prepared</StyledTitle>
                    <StyledSubtitle>404</StyledSubtitle>
                    <StyledButton onClick={handleHover}> Back to main page</StyledButton>
                </StyledContent>
            </StyledContainer>
        </>
    );
};
