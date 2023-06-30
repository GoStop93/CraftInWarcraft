import { ITabProps } from "./type";
import { 
    StyledContainer, 
    StyledIcon,
    StyledTitle,
    StyledDescription, 
} from "./Tab.styles";

export const Tab = ({ onClick, isActive, name, description, icon }: ITabProps) => {
    return (
        <StyledContainer 
            onClick={onClick}
            isActive={isActive}
        >
            <StyledIcon src={icon} isActive={isActive} />
            <StyledTitle isActive={isActive} >
                {name}
            </StyledTitle>
            <StyledDescription>
                {description}
            </StyledDescription>
        </StyledContainer>
    );
};
