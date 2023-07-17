import { useEffect, useState } from "react";
import useWowService from "../../../../../utils/services/WoWService";
import { IItemProps } from "./type";
import { ItemInformation } from "./ItemInformation/ItemInformation";
import Loading from '../../../../../assets/icons/loading/guldan_loading.gif';
import { 
    StyledItems,
    StyledItemIcon,
    StyledItemsInformation,
    StyledRecipeItem,
    StyledLoading,
} from "./Item.styles";

export const Item = ({ id }: IItemProps) => {
    
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
              <ItemInformation id={id} />
              {recipeItemId ? (
                <StyledRecipeItem>
                  <ItemInformation id={recipeItemId} />
                </StyledRecipeItem>
              ) : null}
            </StyledItemsInformation>
          </StyledItems>
        )}
      </>
    );
};
