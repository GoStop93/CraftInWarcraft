import { useEffect, useState } from "react";
import useWowService from "../../../../../utils/services/WoWService";
import { StyledEncounter, ModalContent, ModalTitle, ModalText } from "./Encounter.styls"
import { ModalWindow } from "../../../../../components/ModalWindow/ModalWindow";
import { IEncounterProps } from "./type";

export const Encounter = ({ encounter }: IEncounterProps) => {

    const [openModalIndex, setOpenModalIndex] = useState(false);

    const [encounterName, setEncounterName] = useState('');
    const [encounterDescription, setEncounterDescription] = useState('');

    const { getEncounter } = useWowService();

    const handleOpenModal = () => {
        setOpenModalIndex(true);
  
        document.body.style.overflow = "hidden";
    };
    
      const handleCloseModal = () => {
        setOpenModalIndex(false);
  
        document.body.style.overflow = "auto";
    };

    const fetchEncounter= async (id: number ) => {

        const encounterInfo = await getEncounter(id);

        setEncounterName(encounterInfo.name);
        setEncounterDescription(encounterInfo.description);
    };

    useEffect(() => {
        fetchEncounter(encounter);
    }, []);

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
          <>
            <StyledEncounter onClick={() => handleOpenModal()}>
                {encounterName}
            </StyledEncounter>
            {openModalIndex && (
                <ModalWindow 
                    hasBackground
                    onCloseHandler={handleCloseModal}
                >
                    <ModalContent>
                        <ModalTitle>{encounterName}</ModalTitle>
                        <ModalText>{encounterDescription ? encounterDescription : 'There is no description'}</ModalText>
                    </ModalContent>
                </ModalWindow>
            )}
        </>
    );
};
