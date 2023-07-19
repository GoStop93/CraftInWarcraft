import { useEffect, useState } from "react";
import useWowService from "../../../../../../../utils/services/WoWService";
import { IItemProps } from "../../type";
import { ItemInformationForTooltip } from "./ItemInformationForTooltip/ItemInformationForTooltip";
import Loading from '../../../../../../../assets/icons/loading/guldan_loading.gif';
import { 
    StyledItems,
    StyledItemIcon,
    StyledItemsInformation,
    StyledRecipeItem,
    StyledLoading,
} from "./ItemForTooltip.styles";

export const ItemForTooltip = ({ id }: IItemProps) => {
    
  const { getRandomItem, loading } = useWowService();

  const [itemIcon, setItemIcon] = useState("");
  const [itemQuality, setItemQuality] = useState("");
  const [recipeItemId, setRecipeItemId] = useState<number | undefined>();

  const fetchRandomItem = async () => {

    const item = await getRandomItem(id);

    setItemIcon(item.icon);
    setItemQuality(item.quality);
    setRecipeItemId(item.recipeItemId);
};

useEffect(() => {
    if(id) {
        fetchRandomItem();
    }
}, [id])

  return (
      <>
      {loading ? (
        <StyledLoading src={Loading} />
      ) : (
        <StyledItems>
          {itemIcon ? (
            <StyledItemIcon color={itemQuality} src={itemIcon} />
          ) : null}
          <StyledItemsInformation>
            <ItemInformationForTooltip id={id} />
            {recipeItemId ? (
              <StyledRecipeItem>
                <ItemInformationForTooltip id={recipeItemId} />
              </StyledRecipeItem>
            ) : null}
          </StyledItemsInformation>
        </StyledItems>
      )}
    </>
  );
};
