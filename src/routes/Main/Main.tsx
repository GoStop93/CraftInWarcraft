import { useState, useEffect } from "react";
import { 
    StyledContainer, 
    StyledGreeting,
    StyledHeader,
    StyledTitle,
    StyledSubtitle,
    StyledLayerBack,
    StyledLayerMiddle,
    StyledLayerFront 
} from "./Main.styles";
import { Factions } from "./Factions/Factions";
import { Classes } from "./Classes/Classes";
import { Races } from "./Races/Races";

export const Main = () => {
    const [offset, setOffset] = useState(0);
    const name = localStorage.getItem('name');

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
            <Factions/>
            <Classes/>
            <Races />
        </StyledContainer>
    );
};
