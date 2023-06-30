import { StyledTabGroup } from "./ExplorerTabGroup.styles";
import { CreaturesTab } from "./CreaturesTab/CreaturesTab";
import { DungeonsTab } from "./DungeonsTab/DungeonsTab";
import { ItemsTab } from "./ItemsTab/ItemsTab";
import { PetsTab } from "./PetsTab/PetsTab";
import DungeonsIcon from '../../../assets/icons/explorer/tab_icons/dungeons.png';
import CreaturesIcon from '../../../assets/icons/explorer/tab_icons/creatures.png';
import ItemsIcon from '../../../assets/icons/explorer/tab_icons/items.png';
import PetsIcon from '../../../assets/icons/explorer/tab_icons/pets.png';
  
  export const ExplorerTabGroup = () => {
    const tabs = [
      {
        name: 'Dungeons',
        description: 'Uncover the mysteries of captivating dungeons and hone your battle skills in epic encounters.',
        icon: DungeonsIcon,
        content: <DungeonsTab />,
      },
      {
        name: 'Creatures',
        description: 'Encounter amazing creatures and delve into their characteristics, abilities, and unique traits.',
        icon: CreaturesIcon,
        content: <CreaturesTab />,
      },
      {
        name: 'Items',
        description: 'Dive into a world of magic and loot with diverse items that will aid you in battles and adventures.',
        icon: ItemsIcon,
        content: <ItemsTab />,
      },
      {
        name: 'Pets',
        description: 'Explore the variety of pets to collect and train, to accompany you on exciting adventures',
        icon: PetsIcon,
        content: <PetsTab />,
      },
    ];
  
    return <StyledTabGroup tabs={tabs} />;
  };
