import { useState, useEffect } from "react";
import { Formik, useField } from 'formik';
import { ITabProps } from "../type";
import { Item } from "./Item/Item";
import { itemsIds } from "./data";
import DemonHunter from '../../../../assets/images/explorer/items/demon_hunter.png';
import { IItemsTabProps } from "./type";
import useWowService from "../../../../utils/services/WoWService";
import { 
    StyledContainer, 
    StyledTopContent,
    StyledBottomContent,
    StyledTitle,
    DemonHunterImage,
    StyledNavigation,
    ItemInputBlock,
    ItemRandomBlock,
    StyledButtonAndTitle,
    RandomButton,
    ButtonText,
    StyledItemContent,
    StyledForm,
    StyledInputAndMessage,
    StyledInput,
    StyledErrorMessage,
    GoButton,
    StyledNavigationText,
    StyledLayerBack
} from "./ItemsTab.styles"

export const ItemsTab = ({ offset }: ITabProps) => {

    const { getItem } = useWowService();

    const [randomId, setRandomId] = useState<number>();
    const [errorMessage, setErrorMessage] = useState("");

    const createRandomId = () => {

        const randomIndex = Math.floor(Math.random() * itemsIds.length);
        const randomItemId = itemsIds[randomIndex]

        setRandomId(randomItemId);
    };

    const createSearchId = async (item: string) => {
        try {
            let myItem = await getItem(item);

            if (myItem) {
                setRandomId(myItem.id);
    
                setErrorMessage("");
            } else {
                setErrorMessage(`Item "${item}" not found.`);
            }
        } catch {
            console.log('Ошибка при получении предмета.');
        }
    };

    useEffect(() => {
        createRandomId();
    }, [])

    const MyTextInput = ({ ...props }: IItemsTabProps) => {
        const [field, meta] = useField(props.name);
    
        return (
            <StyledInputAndMessage>
               <StyledInput {...props} {...field} /> 
               {meta.touched && meta.error ? (
                    <StyledErrorMessage>{meta.error}</StyledErrorMessage>
               ) : null}
            </StyledInputAndMessage>
        );
    };

    return (
        <StyledContainer>
            <StyledTopContent>
                <StyledLayerBack offset={offset}></StyledLayerBack>
                <StyledTitle>Items</StyledTitle>
            </StyledTopContent>
            <StyledBottomContent>
                <StyledNavigation>
                    <ItemInputBlock>
                        <StyledButtonAndTitle>
                            <StyledNavigationText>Item Search</StyledNavigationText>
                            <Formik
                                initialValues = {{
                                    name: '',
                                }}
                                onSubmit = {
                                    values => {
                                        createSearchId(values.name);
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
                        </StyledButtonAndTitle>
                    </ItemInputBlock>
                    <ItemRandomBlock>
                        <StyledButtonAndTitle>
                            <StyledNavigationText>Random item</StyledNavigationText>
                            <RandomButton onClick={createRandomId}>
                                <ButtonText>Random</ButtonText>
                            </RandomButton>
                        </StyledButtonAndTitle>
                    </ItemRandomBlock>
                </StyledNavigation>
                <StyledItemContent>
                    <Item id={randomId} />
                    <DemonHunterImage src={DemonHunter} />
                </StyledItemContent>
            </StyledBottomContent>
        </StyledContainer>
    );
};
