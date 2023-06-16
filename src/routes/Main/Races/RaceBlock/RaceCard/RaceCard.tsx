import { IRaceCardProps } from './type';
import { 
    StyledContainer, 
    StyledBox,
    StyledLogo,
    StyledFullImage,
    StyledPartImage,
    StyledBoxForImage,
    StyledRaceName, 
} from "./RaceCard.styles";

export const RaceCard = ({ 
    color, 
    smallLogo, 
    name,
    iconFull, 
    iconPart 
}: IRaceCardProps) => {
    return (
        <StyledContainer>
            <StyledBox color={color}>
                <StyledBoxForImage>
                    <StyledFullImage src={iconFull} />
                </StyledBoxForImage>
                <StyledPartImage src={iconPart}/>
                <StyledLogo src={smallLogo} />
            </StyledBox>
            <StyledRaceName>{name}</StyledRaceName>
        </StyledContainer>
    );
};
