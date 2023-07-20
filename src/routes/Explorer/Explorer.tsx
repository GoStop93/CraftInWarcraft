import { useEffect, useState } from "react";
import { 
    StyledContainer, 
    StyledHeader,
    StyledTitile,
    StyledSubtitle,
} from "./Explorer.styles";
import { ExplorerTabGroup } from "./ExplorerTabGroup/ExplorerTabGroup";

const Explorer = () => {

    const [offset, setOffset] = useState(450);

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
            <StyledHeader>
                <StyledTitile>Become an explorer</StyledTitile>
                <StyledSubtitle>
                    Uncover all its mysteries by delving into its diverse aspects. 
                    Immerse yourself in a captivating realm of knowledge as you choose your desired category.
                </StyledSubtitle>
                <ExplorerTabGroup offset={offset}/>
            </StyledHeader>
        </StyledContainer>
    );
};

export default Explorer;
