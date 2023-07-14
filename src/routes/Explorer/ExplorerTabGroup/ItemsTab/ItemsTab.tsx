import { useState, useEffect } from "react";
import useWowService from "../../../../utils/services/WoWService";
import Gold from '../../../../assets/icons/explorer/items/gold.gif';
import Silver from '../../../../assets/icons/explorer/items/silver.gif';
import Copper from '../../../../assets/icons/explorer/items/copper.gif';
import Socket from '../../../../assets/icons/explorer/items/socket.gif';
import { itemsIds } from "./data";
import { 
    StyledContainer, 
    StyledTopContent,
    StyledBottomContent,
    StyledTitle,
    StyledItems,
    StyledItemIcon,
    StyledItemsInformation,
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
    StyledDescription
} from "./ItemsTab.styles"

export const ItemsTab = () => {
    const { getItemClasses, getRandomItem } = useWowService();

    const [itemIcon, setItemIcon] = useState("");
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
    const [setItems, setSetItems] = useState([]);
    const [setBonuses, setSetBonuses] = useState([]);
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

    

    const fetchItemClasses = async () => {

        const ids = await getItemClasses();

        // if (ids.length === 0) {
        //   console.log("Нет доступных идентификаторов существа.");
        // } else {
          console.log(ids);
        // }
    };

    const fetchRandomItem = async () => {

        const randomIndex = Math.floor(Math.random() * itemsIds.length);
        const randomItemId = itemsIds[randomIndex]
    
        const item = await getRandomItem(2881);

        setItemIcon(item.icon);
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
        setSetItems(item.setItems);
        setSetBonuses(item.setBonuses);
        setItemDescription(item.itemDescription);
        setItemStatsColor(item.statColor);
        setItemType(item.itemType);
        setRequiresSkill(item.requiresSkills);
    };


    useEffect(() => {
        fetchRandomItem();
        // fetchItemClasses();
    }, [])


    return (
        <StyledContainer>
            <StyledTopContent>
                <StyledTitle>Items</StyledTitle>
            </StyledTopContent>
            <StyledBottomContent>
                <StyledItems>
                    {itemIcon ? (
                        <StyledItemIcon color={itemQuality} src={itemIcon}/>
                    ): null}
                    <StyledItemsInformation>
                        <StyledItemName color={itemQuality}>{itemName}</StyledItemName>
                        {itemLevel ? (
                            <StyledItemLevel>{itemLevel}</StyledItemLevel>
                        ): null}
                        {itemBinding ? (
                            <StyledItemMainText>{itemBinding}</StyledItemMainText>
                        ): null}
                        { (itemClass && itemSubclass && itemSubclass !== 'Non-equippable')? (
                            <StyledItemClassAndSubclass>
                                <StyledItemMainText>{itemSubclass}</StyledItemMainText>
                                <StyledItemMainText>{itemClass}</StyledItemMainText>
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
                                    <StyledSet key={item}>{item}</StyledSet>
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
                        {priseHeader ? (
                            <StyledPrice>
                            {priseHeader}{' '}
                            {priseGold}<StyledPriceIcon src={Gold} />
                            {priseSilver}<StyledPriceIcon src={Silver} />
                            {priseCopper}<StyledPriceIcon src={Copper} />
                        </StyledPrice>
                        ): null}
                    </StyledItemsInformation>
                </StyledItems>
            </StyledBottomContent>
        </StyledContainer>
    );
};
