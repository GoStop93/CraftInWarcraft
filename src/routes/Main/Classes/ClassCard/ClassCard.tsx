import { Link } from "react-router-dom"
import { 
    StyledContainer, 
    StyledClass,
    StyledDescription,
    StyledImage 
} from "./ClassCard.styles";
import { ICardProps } from "./type";
import { pathDesignClassCard } from "./type";

export const ClassCard = ({className, textColor, shadowColor, text}: ICardProps) => {
    return (
        <StyledContainer>
            <StyledClass>
                <Link style={{textDecoration: 'none'}} to={`/main/${className}`}>
                    <StyledDescription color={textColor}>{text ?  text : className}</StyledDescription>
                    <StyledImage cardImage={pathDesignClassCard[className]} color={shadowColor}></StyledImage>
                </Link>
            </StyledClass>
        </StyledContainer>
    );
};
