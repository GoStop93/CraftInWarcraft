import { useParams, useNavigate } from "react-router-dom";
import { 
    StyledContainer, 
    StyledHeader, 
    StyledContent, 
    StyledClassImage,
    StyledInfo,
    StyledInfoTitle,
    StyledInfoText,
    StyledSpecializationContainer,
    StyledClassEmblem,
    StyledSpecializationCards,
 } from "./Class.styles";

import { classInformation } from "./type";
import { useEffect } from "react";

import { SpecializationCard } from "./SpecializationCard/SpecializationCard";

const formatClassName = (className: string) => {
    return className.replace("_", " ").replace(/\b\w/g, (match) => match.toUpperCase());
};

export const Class = () => {
    const navigate = useNavigate();
    const { id = "" } = useParams();
    const formattedClassName =  formatClassName(id);

    const classInfo = classInformation[id];

    useEffect(() => {
        if (!classInfo) {
          console.log(`Class with id "${id}" not found`);
          navigate("*");
        }
      }, [classInfo, id, navigate]);

    return !classInfo ? null :(
        <StyledContainer background={classInfo.backgroundImage}>
            <StyledHeader color={classInfo.textColor}>{formattedClassName}</StyledHeader>
            <StyledContent>
                <StyledClassImage 
                    src={classInfo.classImage} 
                    alt={formattedClassName} 
                    width={classInfo.width}
                    left={classInfo.left}
                    top={classInfo.top}
                />
                <StyledInfo>
                    <StyledInfoTitle>Class information</StyledInfoTitle>
                    <StyledInfoText>{classInfo.classDescription}</StyledInfoText>
                </StyledInfo>
                <StyledSpecializationContainer>
                    <StyledClassEmblem src={classInfo.classEmblem}/>
                    <StyledSpecializationCards>
                        {classInfo.specializations.map((specialization) => (
                            <SpecializationCard
                                key={specialization.name}
                                name={specialization.name}
                                text={specialization.text}
                                icon={specialization.icon}
                            />
                        ))}
                    </StyledSpecializationCards>
                </StyledSpecializationContainer>
            </StyledContent>
        </StyledContainer>
    );
};
