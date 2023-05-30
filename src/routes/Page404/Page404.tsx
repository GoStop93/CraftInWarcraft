import { useNavigate } from "react-router-dom";
import { 
    StyledContainer, 
    StyledContent, 
    StyledTitle, 
    StyledSubtitle, 
    StyledButton 
} from "./Page404.styles";

export const Page404 = () => {
    let navigate = useNavigate();

    return (
        <StyledContainer>
            <StyledContent>
                <StyledTitle>You are not prepared</StyledTitle>
                <StyledSubtitle>404</StyledSubtitle>
                <StyledButton onClick={() => navigate('/main')}> Back to main page</StyledButton>
            </StyledContent>
        </StyledContainer>
    );
};
