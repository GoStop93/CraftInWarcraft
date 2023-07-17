import { useEffect, useState } from "react";
import { Formik, useField } from 'formik';
import * as Yup from 'yup';
import useWowService from "../../../../utils/services/WoWService";
import { ITabProps } from "../type";
import { IPetsTabProps } from "./type";
import { PetsAbility } from "./PetsAbility/PetsAbility";
import { petsIds } from "./data";
import Bear from '../../../../assets/images/explorer/pets/pet_bear.png';
import Tree from '../../../../assets/images/explorer/pets/tree.png';
import Loading from '../../../../assets/icons/loading/tree_running.gif';
import { 
    StyledContainer, 
    StyledTopContent,
    StyledBottomContent,
    StyledTitle,
    StyledPetInformation,
    StyledPetIcon,
    StyledPetContent,
    StyledPetName,
    StyledPetDescription,
    StyledLoading,
    StyledPetAbilitiesContent,
    StyledPetAbilitiesTitle,
    StyledPetContainer,
    StyledPetImage,
    TreeImage,
    StyledNavigationContainer,
    StyledRandomContainer,
    StyledInputContainer,
    StyledButtonAndInputTitle,
    ButtonText,
    GoButton,
    StyledForm,
    StyledInput,
    StyledErrorMessage,
    StyledLayerBack,
} from "./PetsTab.styles"

export const PetsTab = ({ offset }: ITabProps) => {

    const { getPet, getPetByName, loading } = useWowService();

    const [petName, setPetName] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [petIcon, setPetIcon] = useState("");
    const [petAbilities, setPetAbilities] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchRandomPet = async () => {
        const randomIndex = Math.floor(Math.random() * petsIds.length);
        const randomInstanceId = petsIds[randomIndex];
        
        const pet = await getPet(randomInstanceId);

        setPetName(pet.name);
        setPetDescription(pet.description);
        setPetIcon(pet.icon);
        setPetAbilities(pet.ids);
    };

    const fetchPet = async (name: string ) => {

        const pet = await getPetByName(name);

        if (pet) {
            setPetName(pet.name);
            setPetDescription(pet.description);
            setPetIcon(pet.icon);
            setPetAbilities(pet.ids);

            setErrorMessage("");
        } else {
            setErrorMessage(`Pet with name "${name}" not found.`);
        }
    };

    useEffect(() => {
        fetchRandomPet();
    }, []);

    const MyTextInput = ({ ...props }: IPetsTabProps) => {
        const [field, meta] = useField(props.name);
    
        return (
            <>
               <StyledInput {...props} {...field} /> 
               {meta.touched && meta.error ? (
                    <StyledErrorMessage>{meta.error}</StyledErrorMessage>
               ) : null}
            </>
        );
    };

    return (
        <StyledContainer>
            <StyledTopContent>
                <StyledLayerBack offset={offset}></StyledLayerBack>
                <StyledTitle>Pets</StyledTitle>
            </StyledTopContent>
            <StyledBottomContent>
                <StyledNavigationContainer>
                    <StyledInputContainer>
                        <StyledButtonAndInputTitle>Find your pet!</StyledButtonAndInputTitle>
                        <Formik
                                initialValues = {{
                                    name: '',
                                }}
                                validationSchema = {Yup.object({
                                    name: Yup.string()
                                            .min(2, 'at least two characters')
                                            .required('required field!'),
                                })}
                                onSubmit = {
                                    values => {
                                        fetchPet(values.name);
                                    }
                                }
                            >
                                <StyledForm >
                                    <MyTextInput
                                        id='name'
                                        name='name'
                                        type='text'
                                    />
                                    {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
                                    <GoButton type="submit">
                                        <ButtonText>Go!</ButtonText>
                                    </GoButton>
                                </StyledForm>
                            </Formik>
                    </StyledInputContainer>
                    <StyledRandomContainer>
                        <StyledButtonAndInputTitle>Or use the power of the tree!</StyledButtonAndInputTitle>
                        <TreeImage src={Tree} onClick={fetchRandomPet} />
                    </StyledRandomContainer>
                </StyledNavigationContainer>
                <StyledPetInformation>
                    {loading ? <StyledLoading src={Loading} /> : (
                        <>
                            <StyledPetImage src={Bear} />
                            <StyledPetContainer>
                                <StyledPetIcon src={petIcon} />
                                <StyledPetContent>
                                    <StyledPetName>{petName}</StyledPetName>
                                    <StyledPetDescription>{petDescription}</StyledPetDescription>
                                </StyledPetContent>
                            </StyledPetContainer>
                            <StyledPetAbilitiesContent>
                                <StyledPetAbilitiesTitle>abilities:</StyledPetAbilitiesTitle>
                                {petAbilities.map((petsAbility) => (
                                    <PetsAbility key={petsAbility} petsAbility={petsAbility} />
                                ))}
                            </StyledPetAbilitiesContent>
                        </>
                    )}
                </StyledPetInformation>
            </StyledBottomContent>
        </StyledContainer>
    );
};
