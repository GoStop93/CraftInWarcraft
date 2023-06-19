import { SetStateAction, useEffect, useState } from "react";
import { 
    StyledContainer, 
    StyledCard, 
    StyledImageAndTitle, 
    StyledImage, 
    StyledTitle, 
    StyledDescription,
    StyledBigImage, 
} from "./RaceInformation.styles";

import { ModalWindow } from "../../../components/ModalWindow/ModalWindow";
import { IRaceInfirmatioProps } from "./type";

export const RaceInformation = ({ color, raceAdditionalInformation }: IRaceInfirmatioProps) => {
    const [openModalIndex, setOpenModalIndex] = useState(-1);

    const handleOpenModal = (index: SetStateAction<number>) => {
      setOpenModalIndex(index);

      document.body.style.overflow = "hidden";
    };
  
    const handleCloseModal = () => {
      setOpenModalIndex(-1);

      document.body.style.overflow = "auto";
    };

    useEffect(() => {
        const handleKeyDown = (event: { key: string; }) => {
          if (event.key === "Escape") {
            handleCloseModal();
          }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
        window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <StyledContainer>
            {raceAdditionalInformation.map((block, index) => (
                <>
                    <StyledCard>
                        <StyledImageAndTitle onClick={() => handleOpenModal(index)}>
                            <StyledImage background={block.image} color={color} />
                            <StyledTitle color={color}>{block.name}</StyledTitle>
                        </StyledImageAndTitle>
                        <StyledDescription>{block.description}</StyledDescription>
                    </StyledCard>
                    {openModalIndex === index && (
                        <ModalWindow
                        big
                        hasBackground
                        onCloseHandler={handleCloseModal}
                        >
                            <StyledBigImage background={block.image} />
                        </ModalWindow>
                    )}
                </>
            ))}
        </StyledContainer>
    );
};
