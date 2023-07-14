import { useState, useEffect } from "react";
import useWowService from "../../../../utils/services/WoWService";
import Gold from '../../../../assets/icons/explorer/items/gold.gif';
import Silver from '../../../../assets/icons/explorer/items/silver.gif';
import Copper from '../../../../assets/icons/explorer/items/copper.gif';
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
    StyledPrice
} from "./ItemsTab.styles"

export const ItemsTab = () => {
    const { getItemClasses, getRandomItem } = useWowService();

    const [itemIcon, setItemIcon] = useState("");
    const [itemName, setItemName] = useState("");
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
    const [itemSpells, setItemSpells] = useState([]);
    const [requiresLevel, setRequiresLevel] = useState("");
    const [priseHeader, setPriseHeader] = useState("");
    const [priseGold, setPriseGold] = useState("");
    const [priseSilver, setPriseSilver] = useState("");
    const [priseCopper, setPriseCopper] = useState("");
    const [itemArmor, setItemArmor] = useState("");

    

    const fetchItemClasses = async () => {

        const ids = await getItemClasses();

        // if (ids.length === 0) {
        //   console.log("Нет доступных идентификаторов существа.");
        // } else {
          console.log(ids);
        // }
    };

    const fetchRandomItem = async () => {
        const item = await getRandomItem(105039);

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
    };


    useEffect(() => {
        fetchRandomItem();
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
                        { (itemClass && itemSubclass)? (
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
                        {itemStats.map((stats) => (
                            <StyledItemMainText key={stats}>{stats}</StyledItemMainText>
                        ))}
                        {durability ? (
                            <StyledItemMainText>{durability}</StyledItemMainText>
                        ): null}
                        {itemSpells.map((spell) => (
                            <StyledSpellsText key={spell}>{spell}</StyledSpellsText>
                        ))}
                        {requiresLevel ? (
                            <StyledItemMainText>{requiresLevel}</StyledItemMainText>
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
