import { 
    StyledContainer, 
    StyledHeader, 
    StyledTitile, 
    StyledIcon, 
    StyledText 
} from "./SpecializationCard.styles";

import { ISpecializationCardProps } from "./type";

export const SpecializationCard = ({ name, icon, text }: ISpecializationCardProps) => {
    return (
        <StyledContainer>
            <StyledHeader>
                <StyledIcon src={icon}/>
                <StyledTitile>{name}</StyledTitile>
            </StyledHeader>
                <StyledText>{text}</StyledText>
        </StyledContainer>
    );
};
