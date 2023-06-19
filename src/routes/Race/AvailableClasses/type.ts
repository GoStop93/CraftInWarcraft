import WarriorIcon from '../../../assets/icons/class_icons/warrior.jpg';
import PaladinIcon from '../../../assets/icons/class_icons/paladin.jpg';
import HunterIcon from '../../../assets/icons/class_icons/hunter.jpg';
import RogueIcon from '../../../assets/icons/class_icons/rogue.jpg';
import PriestIcon from '../../../assets/icons/class_icons/priest.jpg';
import ShamanIcon from '../../../assets/icons/class_icons/shaman.jpg';
import MageIcon from '../../../assets/icons/class_icons/mage.jpg';
import WarlockIcon from '../../../assets/icons/class_icons/warlock.jpg';
import MonkIcon from '../../../assets/icons/class_icons/monk.jpg';
import DruidIcon from '../../../assets/icons/class_icons/druid.jpg';
import DemonHunterIcon from '../../../assets/icons/class_icons/demonhunter.jpg';
import DeathKnightIcon from '../../../assets/icons/class_icons/deathknight.jpg';

export interface IAvailableClassesProps {
    classes: string[];
}

interface Class {
    className: string;
    description: string;
    icon: string;
    text?: string;
}

export const availableClasses: Class[] = [
    {
        className: 'warrior',
        description: 'For as long as war has raged, heroes from every race have aimed to master the art of battle. Warriors combine strength, leadership, and a vast knowledge of arms and armor to wreak havoc in glorious combat.',
        icon: WarriorIcon,
    },
    {
        className: 'paladin',
        description: 'This is the call of the paladin: to protect the weak, to bring justice to the unjust, and to vanquish evil from the darkest corners of the world.',
        icon: PaladinIcon,
    },
    {
        className: 'hunter',
        description: 'From an early age, the call of the wild draws some adventurers from the comfort of their homes into the unforgiving primal world outside. Those who endure become hunters.',
        icon: HunterIcon,
    },
    {
        className: 'rogue',
        description: 'For rogues, the only code is the contract, and their honor is purchased in gold. Free from the constraints of a conscience, these mercenaries rely on brutal and efficient tactics.',
        icon: RogueIcon,
    },
    {
        className: 'priest',
        description: 'Priests are devoted to the spiritual, and express their unwavering faith by serving the people. For millennia they have left behind the confines of their temples and the comfort of their shrines so they can support their allies in war-torn lands.',
        icon: PriestIcon,
    },
    {
        className: 'shaman',
        description: 'Shaman are the spiritual leaders of their tribes and clans. They are masters of the elements, using spells and totems that heal or enhance their allies in battle while unleashing the fury of the elements upon their foes',
        icon: ShamanIcon,
    },
    {
        className: 'mage',
        description: 'Students gifted with a keen intellect and unwavering discipline may walk the path of the mage. The arcane magic available to magi is both great and dangerous, and thus is revealed only to the most devoted practitioners.',
        icon: MageIcon,
    },
    {
        className: 'warlock',
        description: 'In the face of demonic power, most heroes see death. Warlocks see only opportunity. Dominance is their aim, and they have found a path to it in the dark arts. These voracious spellcasters summon demonic minions to fight beside them.',
        icon: WarlockIcon,
    },
    {
        className: 'monk',
        description: 'Bare-knuckle brawlers whose no-weapon styles were born in ancient Pandaria, monks are as diverse as the energy that surrounds them. They can shoulder deadly attacks through the haze of their brews, heal broken chi flows, and beat their enemies with wind-quick fists and feet.',
        icon: MonkIcon,
    },
    {
        className: 'druid',
        description: 'Druids harness the vast powers of nature to preserve balance and protect life. As master shapeshifters, druids can take on the forms of a variety of beasts, each focused on a specific combate role',
        icon: DruidIcon,
    },
    {
        className: 'demon_hunter',
        description: 'Demon hunters embrace the forbidden powers of the Legion. They make use of fel and chaotic magics, metamorphosis abilities, spectral sight, and hellish agility to hunt down and defeat even the most dangerous adversaries.',
        icon: DemonHunterIcon,
        text: 'demon hunter'
    },
    {
        className: 'death_knight',
        description: "When the Lich King’s control over his death knights was broken, his former champions found their new purpose as Knights of the Ebon Blade. After Bolvar Fordragon donned the helm to keep the undead Scourge contained, he called forth a new generation of death knights to join the Ebon Blade's cause.",
        icon: DeathKnightIcon,
        text: 'death knight'
    },
];
