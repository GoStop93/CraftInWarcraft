import { useEffect, useState } from "react";
import { Formik, useField } from 'formik';
import * as Yup from 'yup';
import useWowService from "../../../../utils/services/WoWService";
import { dungeonIds } from "./data";
import { IDungeonsTabProps } from "./type";
import Loading from '../../../../assets/icons/loading/loading.gif';
import Orc from '../../../../assets/images/explorer/orc.png';
import ChoGall from '../../../../assets/images/explorer/choGall.png';
import { Encounter } from "./Encounter/Encounter";
import { 
    StyledContainer, 
    StyledTopContent,
    StyledBottomContent,
    StyledTitle, 
    StyledDungeonInformation,
    StyledImage,
    DungeonContent,
    DungeonTitle,
    DungeonDescription,
    DungeonsNavigation,
    DungeonInputBlock,
    DungeonRandomBlock,
    StyledButtonAndInputTitle,
    RandomButton,
    GoButton,
    ButtonText,
    StyledErrorMessage,
    StyledForm,
    StyledInput,
    StyledLoading,
    StyledLevel,
    DefaultIcon,
    DefaultArea,
    StyledEncounters,
    EncountersContent,
    StyledOrcImage,
    StyledEncounterText,
    StyledEncounterTitle,
    StyledChoImage,
} from "./DungeonsTab.styles"

export const DungeonsTab = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const { getInstance, getInstanceByName, loading } = useWowService();

    const [dungeonName, setDungeonName] = useState("");
    const [dungeonDescription, setDungeonDescription] = useState("");
    const [dungeonImage, setDungeonImage] = useState("");
    const [minLvl, setMinLvl] = useState("");
    const [encounters, setEncounters] = useState([]);

    const fetchRandomInstance = async () => {
        const randomIndex = Math.floor(Math.random() * dungeonIds.length);
        const randomInstanceId = dungeonIds[randomIndex];
        
        const instance = await getInstance(randomInstanceId);

        setDungeonName(instance.name);
        setDungeonDescription(instance.description);
        setDungeonImage(instance.image);
        setMinLvl(instance.level);
        setEncounters(instance.ids);

        setErrorMessage("");
    };

    const fetchInstance = async (instanceName: string ) => {

        const instance = await getInstanceByName(instanceName);

        if (instance) {
            setDungeonName(instance.name);
            setDungeonDescription(instance.description);
            setDungeonImage(instance.image);
            setMinLvl(instance.level);
            setEncounters(instance.ids);

            setErrorMessage("");
        } else {
            setErrorMessage(`Instance with name "${instanceName}" not found.`);
        }
    };

    useEffect(() => {
        fetchRandomInstance();
    }, []);

    const MyTextInput = ({ ...props }: IDungeonsTabProps) => {
        const [field, meta] = useField(props.name);
    
        return (
            <>
               <StyledInput {...props} {...field} /> 
               {meta.touched && meta.error ? (
                    <StyledErrorMessage>{meta.error}</StyledErrorMessage>
               ) : null}
            </>
        )
    }

    return (
        <StyledContainer>
            <StyledTopContent>
                <StyledTitle>Dungeons</StyledTitle>
            </StyledTopContent>
            <StyledBottomContent>
                {loading ? <StyledLoading src={Loading} /> : (
                    <StyledDungeonInformation>
                            <StyledImage src={dungeonImage} alt={dungeonName} />
                            <DefaultArea>
                                <DefaultIcon />
                            </DefaultArea>
                        <DungeonContent>
                            <DungeonTitle>{dungeonName}</DungeonTitle>
                            <DungeonDescription>
                                {dungeonDescription ? dungeonDescription : 'There is no description available for this dungeon.'}
                            </DungeonDescription>
                            <StyledLevel><strong>Minimum level:</strong>  {minLvl}</StyledLevel>
                        </DungeonContent>
                    </StyledDungeonInformation>
                )}
                <DungeonsNavigation>
                    <DungeonInputBlock>
                        <StyledButtonAndInputTitle>
                            Enter the dungeon name to get information about it!
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
                                        fetchInstance(values.name);
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
                    </DungeonInputBlock>
                    <DungeonRandomBlock>
                        <StyledButtonAndInputTitle>
                            Or click the button to get information about a random dungeon.
                            <RandomButton onClick={fetchRandomInstance}>
                                <ButtonText>Try it!</ButtonText>
                            </RandomButton>
                        </StyledButtonAndInputTitle>
                    </DungeonRandomBlock>
                </DungeonsNavigation>
                <EncountersContent>
                    <StyledChoImage src={ChoGall} />
                    <StyledEncounterText>
                        <StyledEncounterTitle>Encounters</StyledEncounterTitle>
                        <StyledEncounters>
                                {encounters.map((encounter) => (
                                    <Encounter key={encounter} encounter={encounter} />
                                ))}
                        </StyledEncounters>
                    </StyledEncounterText>
                    <StyledOrcImage src={Orc} />
                </EncountersContent>
            </StyledBottomContent>
        </StyledContainer>
    );
};
