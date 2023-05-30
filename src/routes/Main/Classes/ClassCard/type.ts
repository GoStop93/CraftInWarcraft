import WarriorIcon from '../../../../assets/icons/small_classes/warrior.jpg';
import PaladinIcon from '../../../../assets/icons/small_classes/paladin.jpg';
import HunterIcon from '../../../../assets/icons/small_classes/hunter.jpg';
import RogueIcon from '../../../../assets/icons/small_classes/rogue.jpg';
import PriestIcon from '../../../../assets/icons/small_classes/priest.jpg';
import ShamanIcon from '../../../../assets/icons/small_classes/shaman.jpg';
import MageIcon from '../../../../assets/icons/small_classes/mage.jpg';
import WarlockIcon from '../../../../assets/icons/small_classes/warlock.jpg';
import MonkIcon from '../../../../assets/icons/small_classes/monk.jpg';
import DruidIcon from '../../../../assets/icons/small_classes/druid.jpg';
import DemonHunterIcon from '../../../../assets/icons/small_classes/demon_hunter.jpg';
import DeathKnightIcon from '../../../../assets/icons/small_classes/death_knight.jpg';

export interface ICardProps {
    className: string,
    textColor: string,
    shadowColor: string,
    text?: string
};

export enum CLASS_NAMES_ENUM {
    WARRIOR = 'warrior',
    PALADIN = 'paladin',
    HUNTER = 'hunter',
    ROGUE = 'rogue',
    PRIEST = 'priest',
    SHAMAN = 'shaman',
    MAGE = 'mage',
    WARLOCK = 'warlock',
    MONK = 'monk',
    DRUID = 'druid',
    DEMON_HUNTER = 'demon_hunter',
    DEATH_KNIGHT = 'death_khight'
};

export const pathDesignClassCard: Record<string, string> = {
    warrior: WarriorIcon,
    paladin: PaladinIcon,
    hunter: HunterIcon,
    rogue: RogueIcon,
    priest: PriestIcon,
    shaman: ShamanIcon,
    mage: MageIcon,
    warlock: WarlockIcon,
    monk: MonkIcon,
    druid: DruidIcon,
    demon_hunter: DemonHunterIcon,
    death_khight: DeathKnightIcon,
}
