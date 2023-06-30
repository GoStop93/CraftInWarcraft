import { 
    StyledContainer, 
    StyledHeader,
    StyledTitile,
    StyledSubtitle,
    StyledContent,
} from "./Explorer.styles";
import { ExplorerTabGroup } from "./ExplorerTabGroup/ExplorerTabGroup";

export const Explorer = () => {
    return (
        <StyledContainer>
            <StyledHeader>
                <StyledTitile>Become an explorer</StyledTitile>
                <StyledSubtitle>
                    Uncover all its mysteries by delving into its diverse aspects. 
                    Immerse yourself in a captivating realm of knowledge as you choose your desired category.
                </StyledSubtitle>
                <ExplorerTabGroup />
            </StyledHeader>
        </StyledContainer>
    );
};
