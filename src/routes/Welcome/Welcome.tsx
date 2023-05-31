import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import silvana from '../../assets/images/welcome/silvana.png';
import garrosh from '../../assets/images/welcome/garrosh.png';
import anduin from '../../assets/images/welcome/anduin.png';
import bran from '../../assets/images/welcome/bran.png';
import { LogInForm } from "./LogInForm/LogInForm";
import logo from '../../assets/images/welcome/logo.png';

import { 
    StyledContainer, 
    StyledGreetings, 
    StyledLayers,
    StyledLayerFront,
    StyledLayerMiddle,
    StyledLayerBack,
    StyledHeader,
    StyledTitle,
    StyledCaption,
    StyledContent,
    StyledSilvanaImage,
    StyledGarroshImage,
    StyledAnduinImage,
    StyledBranImage,
    StyledText,
    StyledTextContent,
    StyledSubtitle,
    StyledLogoContainer,
    StyledLogo,
    StyledLoginContainer,
    StyledCopy 
} from "./Welcome.styles";
import React from "react";

export const Welcome = () => {
    const [offset, setOffset] = useState(0);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setOffset(window.pageYOffset);
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const duration = 2000;

    return (
        <StyledContainer>
            <StyledGreetings>
                <StyledLayers>
                    <StyledHeader offset={offset}>
                        <StyledCaption>Welcome to Project</StyledCaption>
                        <StyledTitle>Craft in Warcraft</StyledTitle>
                    </StyledHeader>
                    <StyledLayerBack offset={offset}></StyledLayerBack>
                    <StyledLayerMiddle offset={offset}></StyledLayerMiddle>
                    <StyledLayerFront offset={offset}></StyledLayerFront>
                </StyledLayers>
            </StyledGreetings>
            <StyledContent>
                <CSSTransition
                    in={showImage}
                    timeout={duration}
                    classNames='image'
                    mountOnEnter
                    unmountOnExit
                    >
                    <div>
                        <StyledSilvanaImage src={silvana} alt="Silvana"/>
                        <StyledGarroshImage src={garrosh} alt="Garrosh"/>
                    </div>
                </CSSTransition>
                <StyledText>
                    <StyledSubtitle>information portal</StyledSubtitle>
                    <StyledTextContent >Welcome to the information portal about World of Warcraft. Here you can find all the information about the most popular MMORPG. Log into  your account and let's get started!</StyledTextContent>
                </StyledText>
                <StyledLogoContainer>
                    <StyledLogo
                        src={logo}
                        alt="Horde and Aliance" 
                        onMouseEnter={() => setShowImage(true)}
                        onMouseLeave={() => setShowImage(false)} 
                    />
                </StyledLogoContainer>
                <StyledLoginContainer>
                    <CSSTransition
                        in={showImage}
                        timeout={duration}
                        classNames='image'
                        mountOnEnter
                        unmountOnExit>
                        <div>
                            <StyledAnduinImage src={anduin} alt="Anduin"/>
                            <StyledBranImage src={bran} alt="dwarf"/>
                        </div>
                    </CSSTransition>
                    <LogInForm/>
                </StyledLoginContainer>
                <StyledCopy>© Mikhail Litvinov</StyledCopy>
            </StyledContent>
        </StyledContainer>
    )
};
