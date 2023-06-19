import { IRaceCardProps } from './type';
import { Link } from 'react-router-dom';
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
    iconPart,
    text,
}: IRaceCardProps) => {
    return (
        <StyledContainer>
            <Link style={{textDecoration: 'none'}} to={`/main/race/${name}`} >
                <StyledBox color={color}>
                    <StyledBoxForImage>
                        <StyledFullImage src={iconFull} />
                    </StyledBoxForImage>
                    <StyledPartImage src={iconPart}/>
                    <StyledLogo src={smallLogo} />
                </StyledBox>
                <StyledRaceName>{text ? text : name}</StyledRaceName>
            </Link>
        </StyledContainer>
    );
};
