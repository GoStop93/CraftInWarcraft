import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { 
    StyledContainer, 
    StyledContent, 
    StyledTitle, 
    StyledSubtitle, 
    StyledButton 
} from "./Page404.styles";

const Page404 = () => {
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
        <StyledContainer>
            <StyledContent>
                <StyledTitle>You are not prepared</StyledTitle>
                <StyledSubtitle>404</StyledSubtitle>
                <StyledButton onClick={handleHover}> Back to main page</StyledButton>
            </StyledContent>
        </StyledContainer>
    );
};

export default Page404;
