import { useEffect, useState } from "react";
import useWowService from "../../../../utils/services/WoWService";
import { CSSTransition } from "react-transition-group";
import { Formik, useField } from 'formik';
import { creaturesIds } from "./data";
import { ICreaturesTabProps } from "./type";
import Loading from '../../../../assets/icons/loading/guldan_loading.gif';
import Demon from '../../../../assets/images/explorer/creatures/demon.png';
import Imp from '../../../../assets/images/explorer/creatures/imp.png';
import { 
    StyledContainer, 
    StyledTopContent,
    StyledBottomContent,
    StyledTitle, 
    StyledCreatureInformation,
    StyledCreatureImage,
    StyledCreatureContent,
    StyledCreatureName,
    StyledCreatureType,
    StyledCreatureFamily,
    StyledCreatureFamilyBlock,
    StyledFamilyIcon,
    StyledFamilyName,
    StyledLoading,
    StyledDemon,
    StyledImp,
    StyledRandomContent,
    StyledRandomText,
    StyledCreatureSearch,
    StyledCreatureInformationContainer,
    StyledErrorMessage,
    StyledInput,
    StyledButtonAndInputTitle,
    StyledForm,
    GoButton,
    ButtonText,
    StyledInputAndMessage,
} from "./CreaturesTab.styles";

export const CreaturesTab = () => {

    const { getCreature, getRandomCreature, loading } = useWowService();

    const [rainFalling, setRainFalling] = useState(false);

    const handleMouseEnter = () => {
        setRainFalling(true);
    };
    
    const handleMouseLeave = () => {
        setRainFalling(false);
    };

    const [creatureImage, setCreatureImage] = useState("");
    const [creatureName, setCreatureName] = useState("");
    const [creatureType, setCreatureType] = useState("");
    const [familyIcon, setFamilyIcon] = useState("");
    const [familyName, setFamilyName] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const fetchCreature = async (creatureName: string) => {

        try {
            let creature = await getCreature(creatureName);

            if (creature) {
                setCreatureImage(creature.creatureMedia);
                setCreatureName(creature.name);
                setCreatureType(creature.type);
                setFamilyIcon(creature.familyMedia);
                setFamilyName(creature.family);
    
                setErrorMessage("");
            } else {
                setErrorMessage(`Creature with name "${creatureName}" not found.`);
            }
        } catch {
            console.log('Ошибка при получении существа. Получение другого случайного существа...');
        }
    }

    const fetchRandomCreature = async () => {
        try {
            const randomIndex = Math.floor(Math.random() * creaturesIds.length);
            const randomCreatureId = creaturesIds[randomIndex];
        
            let creature = await getRandomCreature(randomCreatureId);
        
            setCreatureImage(creature.creatureMedia);
            setCreatureName(creature.name);
            setCreatureType(creature.type);
            setFamilyIcon(creature.familyMedia);
            setFamilyName(creature.family);

            setErrorMessage("");
          } catch (error) {
            console.log('Ошибка при получении существа. Получение другого случайного существа...');
            const newIndex = 21108;
            let creature = await getRandomCreature(newIndex);
        
            setCreatureImage(creature.creatureMedia);
            setCreatureName(creature.name);
            setCreatureType(creature.type);
            setFamilyIcon(creature.familyMedia);
            setFamilyName(creature.family);

            setErrorMessage("");
          }
        };

    useEffect(() => {
        fetchRandomCreature();
    }, []);

    const MyTextInput = ({ ...props }: ICreaturesTabProps) => {
        const [field, meta] = useField(props.name);
    
        return (
            <StyledInputAndMessage>
               <StyledInput {...props} {...field} /> 
               {meta.touched && meta.error ? (
                    <StyledErrorMessage>{meta.error}</StyledErrorMessage>
               ) : null}
            </StyledInputAndMessage>
        )
    }

    const duration = 500;

    return (
        <StyledContainer>
            <StyledTopContent>
                <StyledTitle>Creatures</StyledTitle>
            </StyledTopContent>
            <StyledBottomContent>
                <StyledRandomContent>
                <CSSTransition
                    in={rainFalling}
                    timeout={duration}
                    classNames='text'
                    mountOnEnter
                    unmountOnExit
                >
                    <StyledRandomText>Show me another creature!</StyledRandomText>
                </CSSTransition>
                    <StyledDemon 
                        src={Demon} 
                        onClick={fetchRandomCreature} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} 
                    />
                </StyledRandomContent>
                <StyledCreatureInformationContainer>
                    <StyledCreatureInformation>
                        {loading ? <StyledLoading src={Loading} /> : (
                            <>
                                <StyledCreatureImage src={creatureImage} /><StyledCreatureContent>
                                    <StyledCreatureName>{creatureName}</StyledCreatureName>
                                    <StyledCreatureType>
                                        Type:<strong>{creatureType}</strong>
                                    </StyledCreatureType>
                                    <StyledCreatureFamily>Family:</StyledCreatureFamily>
                                    <StyledCreatureFamilyBlock>
                                        <StyledFamilyIcon src={familyIcon} />
                                        <StyledFamilyName>{familyName}</StyledFamilyName>
                                    </StyledCreatureFamilyBlock>
                                    <StyledImp src={Imp} />
                                </StyledCreatureContent>
                            </>
                        )}
                    </StyledCreatureInformation>
                    <StyledCreatureSearch>
                        <StyledButtonAndInputTitle>
                            Find any creature
                            <Formik
                                initialValues = {{
                                    name: '',
                                }}
                                onSubmit = {
                                    values => {
                                        fetchCreature(values.name);
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
                        </StyledButtonAndInputTitle>
                    </StyledCreatureSearch>
                </StyledCreatureInformationContainer>
            </StyledBottomContent>
        </StyledContainer>
    );
};
