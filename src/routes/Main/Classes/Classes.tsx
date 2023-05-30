import { 
    StyledContainer,
    StyledHeader, 
    StyledTitle,
    StyledSubtitle,
    StyledContent 
} from "./Classes.styles";

import { listOfClasses } from "./type";

import { ClassCard } from "./ClassCard/ClassCard";

export const Classes = () => {
    return (
        <StyledContainer>
            <StyledHeader>
                <StyledTitle>Classes</StyledTitle>
                <StyledSubtitle>From knights in shiny armor to skulking stalkers and cunning spellcasters, each class in World of Warcraft presents unique challenges and gameplay for you to master. What is your calling?</StyledSubtitle>
            </StyledHeader>
            <StyledContent>
                {listOfClasses.map((classData) => (
                    <ClassCard 
                            key={classData.className} 
                            className={classData.className} 
                            textColor={classData.textColor} 
                            shadowColor={classData.shadowColor}
                            text={classData.text}
                    />
                ))}
            </StyledContent>
        </StyledContainer>
    );
};
