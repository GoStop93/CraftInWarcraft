import { useEffect, useState } from 'react';
import useWowService from '../../../../../../utils/services/WoWService';
import { ItemForTooltip } from './ItemForTooltip/ItemForTooltip';
import { ToolTip } from '../../../../../../components/ToolTip/ToolTip';
import Gold from '../../../../../../assets/icons/explorer/items/gold.gif';
import Silver from '../../../../../../assets/icons/explorer/items/silver.gif';
import Copper from '../../../../../../assets/icons/explorer/items/copper.gif';
import Socket from '../../../../../../assets/icons/explorer/items/socket.gif';
import Loading from '../../../../../../assets/icons/loading/guldan_loading.gif';
import { IItemInformationProps } from './type';
import {
    StyledItemName,
    StyledItemLevel,
    StyledItemMainText,
    StyledItemClassAndSubclass,
    StyledItemDamageAndSpeed,
    StyledSpellsText,
    StyledPriceIcon,
    StyledPrice,
    StyledSockeBlock,
    StyledSocket,
    StyledSocketImage,
    StyledSocketBonus,
    StyledSetBlock,
    StyledSetName,
    StyledSet,
    StyledSetBonusBlock,
    StyledSetBonus,
    StyledDescription,
    StyledReagents,
    StyledToy,
    StyledItemNameDescription,
    StyledPlayableClassesContainer,
    StyledPlayableClass,
    StyledToolTipContainer,
    StyledLoading,
} from "./ItemInformation.styles";


export const ItemInformation = ({ 
    children,
    id,
    onItemChange,
}: IItemInformationProps) => {

    const { getRandomItem, loading } = useWowService();

    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemLevel, setItemLevel] = useState("");
    const [itemBinding, setItemBinding] = useState("");
    const [itemClass, setItemClass] = useState("");
    const [itemSubclass, setItemSubclass] = useState("");
    const [itemQuality, setItemQuality] = useState("");
    const [durability, setDurability] = useState("");
    const [weaponDamage, setWeaponDamage] = useState("");
    const [weaponSpeed, setWeaponSpeed] = useState("");
    const [weaponDps, setWeaponDps] = useState("");
    const [itemStats, setItemStats] = useState([]);
    const [itemStatsColor, setItemStatsColor] = useState([]);
    const [itemSpells, setItemSpells] = useState([]);
    const [itemSockets, setItemSockets] = useState([]);
    const [setItems, setSetItems] = useState<any[]>([]);
    const [setBonuses, setSetBonuses] = useState([]);
    const [playableClasses, setPlayableClasses] = useState([]);
    const [requiresLevel, setRequiresLevel] = useState("");
    const [requiresSkill, setRequiresSkill] = useState("");
    const [priseHeader, setPriseHeader] = useState("");
    const [priseGold, setPriseGold] = useState("");
    const [priseSilver, setPriseSilver] = useState("");
    const [priseCopper, setPriseCopper] = useState("");
    const [itemArmor, setItemArmor] = useState("");
    const [socketBonus, setSocketBonus] = useState("");
    const [setName, setSetName] = useState("");
    const [itemType, setItemType] = useState("");
    const [reagents, setReagents] = useState<any[]>([]);
    const [toy, setToy] = useState("");
    const [unique, setUnique] = useState("");
    const [expiration, setExpiration] = useState("");
    const [charges, setCharges] = useState("");
    const [gemProperties, setGemProperties] = useState("");
    const [limitCategory, setLimitCategory] = useState("");
    const [itemNameDescription, setItemNameDescription] = useState("");
    const [itemNameDescriptionR, setItemNameDescriptionR] = useState("");
    const [itemNameDescriptionG, setItemNameDescriptionG] = useState("");
    const [itemNameDescriptionB, setItemNameDescriptionB] = useState("");
    
    const fetchRandomItem = async (itemId: any) => {

        try {
            const item = await getRandomItem(itemId);

            onItemChange(item);
    
            setItemName(item.itemName);
            setItemLevel(item.itemLevel);
            setItemBinding(item.itemBinding);
            setItemClass(item.itemClass);
            setItemSubclass(item.itemSubclass);
            setWeaponDamage(item.weaponDamage);
            setWeaponSpeed(item.weaponSpeed);
            setWeaponDps(item.weaponDps);
            setDurability(item.durability);
            setItemStats(item.stats);
            setItemSpells(item.spells);
            setRequiresLevel(item.requiresLevel);
            setPriseHeader(item.sellPriceHeader);
            setPriseGold(item.sellPriceGold);
            setPriseSilver(item.sellPriceSilver);
            setPriseCopper(item.sellPriceCopper);
            setItemQuality(item.quality);
            setItemArmor(item.armor);
            setItemSockets(item.sockets);
            setSocketBonus(item.socketBonus);
            setSetName(item.setName);
            setSetItems(item.setItemsData);
            setSetBonuses(item.setBonuses);
            setItemDescription(item.itemDescription);
            setItemStatsColor(item.statColor);
            setItemType(item.itemType);
            setRequiresSkill(item.requiresSkills);
            setReagents(item.reagentData);
            setToy(item.toy);
            setGemProperties(item.gemProperties);
            setItemNameDescription(item.itemNameDescription);
            setItemNameDescriptionR(item.itemNameDescriptionR);
            setItemNameDescriptionG(item.itemNameDescriptionG);
            setItemNameDescriptionB(item.itemNameDescriptionB);
            setUnique(item.unique);
            setExpiration(item.expiration);
            setLimitCategory(item.limitCategory);
            setPlayableClasses(item.playableClasses);
            setCharges(item.charges);
        } catch (error) {
            console.log('Ошибка при получении предмета.');
        }

    };

    const fetchItemWithId = async (itemId: any) => {
        await fetchRandomItem(itemId);
    };

    useEffect(() => {
        if(id) {
            fetchRandomItem(id);
        }
    }, [id])
    

    return (
        <>
            {loading ? <StyledLoading src={Loading} /> : 
                <>
                    <StyledItemName color={itemQuality}>
                        {itemName}
                    </StyledItemName>
                    {itemNameDescription ? (
                        <StyledItemNameDescription
                            r={itemNameDescriptionR}
                            g={itemNameDescriptionG}
                            b={itemNameDescriptionB}
                        >
                            {itemNameDescription}
                        </StyledItemNameDescription>
                    ): null}
                    {itemLevel ? (
                        <StyledItemLevel>{itemLevel}</StyledItemLevel>
                    ): null}
                    {itemBinding ? (
                        <StyledItemMainText>{itemBinding}</StyledItemMainText>
                    ): null}
                    {limitCategory ? (
                        <StyledItemMainText>{limitCategory}</StyledItemMainText>
                    ): null}
                    {unique ? (
                        <StyledItemMainText>{unique}</StyledItemMainText>
                    ): null}
                    {expiration ? (
                        <StyledItemMainText>{expiration}</StyledItemMainText>
                    ): null}
                    {toy ? ( 
                        <StyledToy>{toy}</StyledToy>
                    ): null}
                    {gemProperties ? (
                        <StyledItemMainText>{gemProperties}</StyledItemMainText>
                    ): null}
                    { (itemClass && itemSubclass && itemSubclass !== 'Non-equippable' && itemSubclass !== 'Quest')? (
                        <StyledItemClassAndSubclass>
                            <StyledItemMainText>{itemSubclass}</StyledItemMainText>
                            {(itemClass !== 'Quest' && itemClass!== 'Miscellaneous' )? (
                                <StyledItemMainText>{itemClass}</StyledItemMainText>
                            ): null}
                        </StyledItemClassAndSubclass>
                    ): null}
                    {itemArmor ? (
                        <StyledItemMainText>{itemArmor}</StyledItemMainText>
                    ): null}
                    {weaponDamage && weaponSpeed ? (
                        <StyledItemDamageAndSpeed>
                            <StyledItemMainText>{weaponDamage}</StyledItemMainText>
                            <StyledItemMainText>{weaponSpeed}</StyledItemMainText>
                        </StyledItemDamageAndSpeed>
                    ): null}
                    {weaponDps ? (
                        <StyledItemMainText>{weaponDps}</StyledItemMainText>
                    ): null}
                    {itemStats.map((stats, index) => (
                        <StyledItemMainText key={stats} color={itemStatsColor[index]}>
                            {stats}
                        </StyledItemMainText>
                    ))}
                    {itemSockets.length > 0? (
                        <StyledSockeBlock>
                            {itemSockets.map((socket, index) => (
                                <StyledSocket key={index}>
                                    <StyledSocketImage src={Socket} />
                                    {socket}
                                </StyledSocket>
                            ))}
                            <StyledSocketBonus>{socketBonus}</StyledSocketBonus>
                        </StyledSockeBlock>
                    ): null}
                    {durability ? (
                        <StyledItemMainText>{durability}</StyledItemMainText>
                    ): null}
                    {playableClasses.length > 0 ? (
                        <StyledPlayableClassesContainer>
                                Classes:
                                {playableClasses.map((playableClasse, index) => (
                                    <StyledPlayableClass playableClasse={playableClasse} key={playableClasse}>
                                        {playableClasse}{index !== playableClasses.length - 1 ? ',' : ''}
                                    </StyledPlayableClass>
                                ))}
                        </StyledPlayableClassesContainer>
                    ): null}
                    {itemSpells.map((spell) => (
                        <StyledSpellsText key={spell}>{spell}</StyledSpellsText>
                    ))}
                    {requiresLevel ? (
                        <StyledItemMainText>{requiresLevel}</StyledItemMainText>
                    ): null}
                    {setItems.length > 0? (
                        <StyledSetBlock>
                            <StyledSetName>{setName}</StyledSetName>
                            {setItems.map((item) => (
                                <StyledSet
                                    key={item.id}
                                    onClick={() => fetchItemWithId(item.id)}
                                >
                                    <ToolTip 
                                        key={item.id}
                                        items 
                                        content={
                                            <StyledToolTipContainer>
                                                <ItemForTooltip id={item.id} />
                                            </StyledToolTipContainer>
                                        }
                                    >
                                        {item.name}
                                    </ToolTip>
                                </StyledSet>
                            ))}
                            <StyledSetBonusBlock>
                                {setBonuses.map((bonus) => (
                                    <StyledSetBonus key={bonus}>{bonus}</StyledSetBonus>
                                ))}
                            </StyledSetBonusBlock>
                        </StyledSetBlock>
                    ): null}
                    {(itemDescription && itemType !== 'Recipe')? (
                        <StyledDescription>"{itemDescription}"</StyledDescription>
                    ): null}
                    {(itemDescription && itemType === 'Recipe')? (
                        <StyledDescription recipe>Use: {itemDescription}</StyledDescription>
                    ): null}
                    {requiresSkill ? (
                        <StyledItemMainText>{requiresSkill}</StyledItemMainText>
                    ): null}
                    {charges ? (
                        <StyledItemMainText>{charges}</StyledItemMainText>
                    ): null}
                    {priseHeader ? (
                        <StyledPrice>
                            {priseHeader}{' '}
                            {(priseGold !== '0') ? (
                                <>{priseGold}<StyledPriceIcon src={Gold} /></>
                            ): null}
                            {(priseSilver !== '0') ? (
                                <>{priseSilver}<StyledPriceIcon src={Silver} /></>
                            ): null}
                            {(priseCopper !== '0') ? (
                                <>{priseCopper}<StyledPriceIcon src={Copper} /></>
                            ): null}
                        </StyledPrice>
                    ): null}
                    {children}
                    {reagents ? (
                        <StyledReagents>
                            {reagents.map((reagent, index) => (
                                <StyledItemMainText key={reagent.name} onClick={() => fetchItemWithId(reagent.id)}>
                                    <ToolTip 
                                        items
                                        key={reagent.id}
                                        content={
                                            <StyledToolTipContainer>
                                                <ItemForTooltip id={reagent.id} />
                                            </StyledToolTipContainer>
                                        }
                                    >
                                        {`${reagent.name} (${reagent.quantity})${index !== reagents.length - 1 ? ',' : ''}`}
                                    </ToolTip>
                                </StyledItemMainText>
                            ))}
                        </StyledReagents>
                    ): null}
                </>
            }
        </>
    );
};
