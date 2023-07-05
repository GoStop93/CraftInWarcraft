import { useEffect, useState } from "react";
import { StyledContainer, StyledIcon, StyledName } from "./PetsAbility.styles";
import { IPetsAbilityProps } from "./type";
import useWowService from "../../../../../utils/services/WoWService";

export const PetsAbility = ({ petsAbility }: IPetsAbilityProps) => {
    const { getPetAbility } = useWowService();

    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');

    const fetchPetsAbility = async () => {
        try {
          const petAbility = await getPetAbility(petsAbility);
      
          setName(petAbility.name);
          setIcon(petAbility.icon);
        } catch (error) {
          console.log('Ошибка при получении медиа-данных способности питомца:', error);
        }
      };

    useEffect (() => {
        fetchPetsAbility();
    },[])


    return (
        name && icon ? (
            <StyledContainer>
                <StyledIcon src={icon} />
                <StyledName>{name}</StyledName>
            </StyledContainer>
        ) : null
    );
};
