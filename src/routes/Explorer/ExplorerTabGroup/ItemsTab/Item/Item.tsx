import { useEffect, useState } from 'react';
import useWowService from '../../../../../utils/services/WoWService';
import { IItemProps } from './type';
import { ItemInformation } from './ItemInformation/ItemInformation';
import { ItemInformationForTooltip } from './ItemInformation/ItemForTooltip/ItemInformationForTooltip/ItemInformationForTooltip';
import { StyledItems, StyledItemIcon, StyledItemsInformation, StyledRecipeItem } from './Item.styles';

export const Item = ({ id }: IItemProps) => {
  const { getRandomItem } = useWowService();

  const [itemIcon, setItemIcon] = useState('');
  const [itemId] = useState<any>(id);

  const [itemQuality, setItemQuality] = useState('');
  const [recipeItemId, setRecipeItemId] = useState<number | undefined>();

  const fetchRandomItem = async (itemId: any) => {
    const item = await getRandomItem(itemId);

    setItemIcon(item.icon);
    setItemQuality(item.quality);
    setRecipeItemId(item.recipeItemId);
  };

  const setItemData = (itemData: any) => {
    setItemIcon(itemData.icon);
    setItemQuality(itemData.quality);
    setItemIcon(itemData.icon);
    setItemQuality(itemData.quality);
    setRecipeItemId(itemData.recipeItemId);
  };

  useEffect(() => {
    if (itemId) {
      fetchRandomItem(itemId);
    }
  }, [itemId]);

  return (
    <StyledItems>
      {itemIcon ? <StyledItemIcon color={itemQuality} src={itemIcon} /> : null}
      <StyledItemsInformation>
        <ItemInformation id={id} onItemChange={setItemData} />
        {recipeItemId ? (
          <StyledRecipeItem>
            <ItemInformationForTooltip recipe id={recipeItemId} />
          </StyledRecipeItem>
        ) : null}
      </StyledItemsInformation>
    </StyledItems>
  );
};
