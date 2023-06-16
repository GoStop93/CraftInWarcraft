import { StyledContainer, StyledContent } from "./Races.styles";
import { RaceBlock } from "./RaceBlock/RaceBlock";
import { racesData } from "./type";

export const Races = () => {
    return (
        <StyledContainer>
            <StyledContent>
                {racesData.map((fractionData) => (
                    <RaceBlock 
                        key={fractionData.fraction}
                        background={fractionData.background}
                        logo={fractionData.logo}
                        title={fractionData.title}
                        subtitle={fractionData.subtitle}
                        color={fractionData.color}
                        smallLogo={fractionData.smallLogo}
                        races={fractionData.races}
                    />
                ))}
            </StyledContent>
        </StyledContainer>
    );
};
