import { useState, useEffect } from "react";
import { 
    StyledContainer, 
    StyledGreeting,
    StyledHeader,
    StyledTitle,
    StyledSubtitle,
    StyledLayerBack,
    StyledLayerMiddle,
    StyledLayerFront,
    UpButton,
} from "./Main.styles";
import { UpIcon } from "../../assets/icons/navigation_icons";
import { Factions } from "./Factions/Factions";
import { Classes } from "./Classes/Classes";
import { Races } from "./Races/Races";
import { ExplorerLink } from "./ExplorerLink/ExplorerLink";

export const Main = () => {
    const [offset, setOffset] = useState(0);
    const name = localStorage.getItem('name');
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setOffset(window.scrollY);
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (offset > 1500) { // Change the scroll threshold as needed
          setShowButton(true);
        } else {
          setShowButton(false);
        }
    }, [offset])

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <StyledContainer>
            <StyledGreeting>
                <StyledHeader offset={offset} >
                    <StyledTitle> {name} <br/><br/> welcome  to information portal</StyledTitle><br/>
                    <StyledSubtitle>Craft in Warcraft</StyledSubtitle>
                </StyledHeader>
                <StyledLayerBack offset={offset}/>
                <StyledLayerMiddle offset={offset}/>
                <StyledLayerFront offset={offset}/>
            </StyledGreeting>
            <Factions />
            <Classes />
            <Races />
            <ExplorerLink />
            {showButton && (
                <UpButton onClick={handleScrollToTop}>
                    <UpIcon />
                </UpButton>
            )}
        </StyledContainer>
    );
};
