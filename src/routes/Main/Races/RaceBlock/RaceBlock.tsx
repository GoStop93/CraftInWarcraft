import { 
    StyledContainer, 
    StyledLogo,
    StyledContent,
    StyledTitle,
    StyledSubtitle,
    StyledRaceCards, 
} from "./RaceBlock.styles";

import { IRaceBlockProps } from './type';

import { RaceCard } from './RaceCard/RaceCard';

export const RaceBlock = ({ 
    background, 
    logo, 
    title, 
    subtitle, 
    color, 
    smallLogo,
    races 
}: IRaceBlockProps) => {
    return (
        <StyledContainer background={background}>
            <StyledLogo src={logo} />
            <StyledContent>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubtitle>{subtitle} </StyledSubtitle>
                <StyledRaceCards>
                    {races.map((race) => (
                        <RaceCard 
                            color={color} 
                            smallLogo={smallLogo}
                            name={race.name}
                            text={race.text}
                            iconFull={race.iconFull}
                            iconPart={race.iconPart}
                        />
                    ))}
                </StyledRaceCards>
            </StyledContent>
        </StyledContainer>
    );
};
