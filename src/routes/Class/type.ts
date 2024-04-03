import WarriorBackground from '../../assets/images/background/singleClass/warrior.jpg';
import PaladinBackground from '../../assets/images/background/singleClass/paladin.jpg';
import HunterBackground from '../../assets/images/background/singleClass/hunter.jpg';
import RogueBackground from '../../assets/images/background/singleClass/rogue.jpg';
import PriestBackground from '../../assets/images/background/singleClass/priest.jpg';
import ShamanBackground from '../../assets/images/background/singleClass/shaman.jpg';
import MageBackground from '../../assets/images/background/singleClass/mage.jpg';
import WarlockBackground from '../../assets/images/background/singleClass/warlock.jpg';
import MonkBackground from '../../assets/images/background/singleClass/monk.jpg';
import DruidBackground from '../../assets/images/background/singleClass/druid.jpg';
import DemonHunterBackground from '../../assets/images/background/singleClass/demon_hunter.jpg';
import DeathKnightBackground from '../../assets/images/background/singleClass/death_knight.jpg';

import WarriorIcon from '../../assets/images/singleClass/warrior.png';
import PaladinIcon from '../../assets/images/singleClass/paladin.png';
import HunterIcon from '../../assets/images/singleClass/hunter.png';
import RogueIcon from '../../assets/images/singleClass/rogue.png';
import PriestIcon from '../../assets/images/singleClass/priest.png';
import ShamanIcon from '../../assets/images/singleClass/shaman.png';
import MageIcon from '../../assets/images/singleClass/mage.png';
import WarlockIcon from '../../assets/images/singleClass/warlock.png';
import MonkIcon from '../../assets/images/singleClass/monk.png';
import DruidIcon from '../../assets/images/singleClass/druid.png';
import DemonHunterIcon from '../../assets/images/singleClass/demon_hunter.png';
import DeathKnightIcon from '../../assets/images/singleClass/death_knight.png';

import WarriorEmblem from '../../assets/icons/class_emblems/warrior.png';
import PaladinEmblem from '../../assets/icons/class_emblems/paladin.png';
import HunterEmblem from '../../assets/icons/class_emblems/hunter.png';
import RogueEmblem from '../../assets/icons/class_emblems/rogue.png';
import PriestEmblem from '../../assets/icons/class_emblems/priest.png';
import ShamanEmblem from '../../assets/icons/class_emblems/shaman.png';
import MageEmblem from '../../assets/icons/class_emblems/mage.png';
import WarlockEmblem from '../../assets/icons/class_emblems/warlock.png';
import MonkEmblem from '../../assets/icons/class_emblems/monk.png';
import DruidEmblem from '../../assets/icons/class_emblems/druid.png';
import DemonHunterEmblem from '../../assets/icons/class_emblems/demon_hunter.png';
import DeathKnightEmblem from '../../assets/icons/class_emblems/death_knight.png';

import ArmsIcon from '../../assets/icons/specializations_icons/warrior/arms.jpg';
import FuryIcon from '../../assets/icons/specializations_icons/warrior/fury.jpg';
import ProtectionWarriorIcon from '../../assets/icons/specializations_icons/warrior/protection.jpg';

import HolyPaladinIcon from '../../assets/icons/specializations_icons/paladin/holy.jpg';
import ProtectionPaladinIcon from '../../assets/icons/specializations_icons/paladin/protection.jpg';
import RetributionIcon from '../../assets/icons/specializations_icons/paladin/retribution.jpg';

import BeastMasteryIcon from '../../assets/icons/specializations_icons/hunter/beast_mastery.jpg';
import MarksmanshipIcon from '../../assets/icons/specializations_icons/hunter/marksmanship.jpg';
import SurvivalIcon from '../../assets/icons/specializations_icons/hunter/survival.jpg';

import AssassinationIcon from '../../assets/icons/specializations_icons/rogue/assassination.jpg';
import OutlawIcon from '../../assets/icons/specializations_icons/rogue/outlow.jpg';
import SubtletyIcon from '../../assets/icons/specializations_icons/rogue/subtlety.jpg';

import DisciplineIcon from '../../assets/icons/specializations_icons/priest/discipline.jpg';
import HolyPriestIcon from '../../assets/icons/specializations_icons/priest/holy.jpg';
import ShadowIcon from '../../assets/icons/specializations_icons/priest/shadow.jpg';

import ElementalIcon from '../../assets/icons/specializations_icons/shaman/elemental.jpg';
import EnhancementIcon from '../../assets/icons/specializations_icons/shaman/enhantment.jpg';
import RestorationShamanIcon from '../../assets/icons/specializations_icons/shaman/restoration.jpg';

import ArcaneIcon from '../../assets/icons/specializations_icons/mage/arcane.jpg';
import FireIcon from '../../assets/icons/specializations_icons/mage/fire.jpg';
import FrostMageIcon from '../../assets/icons/specializations_icons/mage/frost.jpg';

import AfflictionIcon from '../../assets/icons/specializations_icons/warlock/affliction.jpg';
import DemonologyIcon from '../../assets/icons/specializations_icons/warlock/demonology.jpg';
import DestructionIcon from '../../assets/icons/specializations_icons/warlock/destructuion.jpg';

import BrewmasterIcon from '../../assets/icons/specializations_icons/monk/brewmaster.jpg';
import MistweaverIcon from '../../assets/icons/specializations_icons/monk/mistweaver.jpg';
import WindwalkerIcon from '../../assets/icons/specializations_icons/monk/windwalker.jpg';

import BalanceIcon from '../../assets/icons/specializations_icons/druid/balance.jpg';
import FeralIcon from '../../assets/icons/specializations_icons/druid/feral.jpg';
import GuardianIcon from '../../assets/icons/specializations_icons/druid/guardian.jpg';
import RestorationDruidIcon from '../../assets/icons/specializations_icons/druid/restoration.jpg';

import HavocIcon from '../../assets/icons/specializations_icons/demon_hunter/havoc.jpg';
import VengeanceIcon from '../../assets/icons/specializations_icons/demon_hunter/vengeance.jpg';

import BloodIcon from '../../assets/icons/specializations_icons/death_knight/blood.jpg';
import FrostDKIcon from '../../assets/icons/specializations_icons/death_knight/frost.jpg';
import UnholyIcon from '../../assets/icons/specializations_icons/death_knight/unholy.jpg';

interface Specialization {
  name: string;
  icon: string;
  text: string;
}

interface ClassInformation {
  [key: string]: {
    backgroundImage: string;
    classImage: string;
    classDescription: string;
    classEmblem: string;
    textColor: string;
    width: number;
    left: number;
    top: number;
    specializations: Specialization[];
  };
}

export const classInformation: ClassInformation = {
  warrior: {
    backgroundImage: WarriorBackground,
    classImage: WarriorIcon,
    classEmblem: WarriorEmblem,
    classDescription:
      'Warriors equip themselves carefully for combat and engage their enemies head-on, letting attacks glance off their heavy armor. They use diverse combat tactics and a wide variety of weapon types to protect their more vulnerable allies. Warriors must carefully master their rage – the power behind their strongest attacks – in order to maximize their effectiveness in combat.',
    textColor: '#CD5B31',
    width: 65,
    left: 50,
    top: 17,
    specializations: [
      {
        name: 'Arms',
        text: 'A battle-hardened master of weapons, using mobility and overpowering attacks to strike their opponents down. Preferred Weapon: Two-Handed Axe, Mace, Sword',
        icon: ArmsIcon,
      },
      {
        name: 'Fury',
        text: 'A furious berserker unleashing a flurry of attacks to carve their opponents to pieces. Preferred Weapons: Dual Axes, Maces, Swords',
        icon: FuryIcon,
      },
      {
        name: 'Protection',
        text: 'A stalwart protector who uses a shield to safeguard themselves and their allies. Preferred Weapon: Axe, Mace, Sword, and Shield',
        icon: ProtectionWarriorIcon,
      },
    ],
  },
  paladin: {
    backgroundImage: PaladinBackground,
    classImage: PaladinIcon,
    classEmblem: PaladinEmblem,
    classDescription:
      'Paladins stand directly in front of their enemies, relying on heavy armor and healing in order to survive incoming attacks. Whether with massive shields or crushing two-handed weapons, Paladins are able to keep claws and swords from their weaker fellows – or they use healing magic to ensure that they remain on their feet',
    textColor: '#648ABF',
    width: 90,
    left: 45,
    top: 15,
    specializations: [
      {
        name: 'Holy',
        text: 'Invokes the power of the Light to heal and protect allies and vanquish evil from the darkest corners of the world. Preferred Weapon: Sword, Mace, and Shield',
        icon: HolyPaladinIcon,
      },
      {
        name: 'Protection',
        text: 'Uses Holy magic to shield themselves and defend allies from attackers. Preferred Weapon: Sword, Mace, Axe, and Shield',
        icon: ProtectionPaladinIcon,
      },
      {
        name: 'Retribution',
        text: 'A righteous crusader who judges and punishes opponents with weapons and Holy magic. Preferred Weapon: Two-Handed Sword, Mace, Axe',
        icon: RetributionIcon,
      },
    ],
  },
  hunter: {
    backgroundImage: HunterBackground,
    classImage: HunterIcon,
    classEmblem: HunterEmblem,
    classDescription:
      'Hunters battle their foes at a distance or up close, commanding their pets to attack while they nock their arrows, fire their guns, or ready their polearms. Though their weapons are effective at short and long ranges, hunters are also highly mobile. They can evade or restrain their foes to control the arena of battle',
    textColor: '#789A67',
    width: 80,
    left: 47,
    top: 15,
    specializations: [
      {
        name: 'Beast Mastery',
        text: 'A master of the wild who can tame a wide variety of beasts to assist them in combat. Preferred Weapon: Bow, Crossbow, Gun',
        icon: BeastMasteryIcon,
      },
      {
        name: 'Marksmanship',
        text: 'A master sharpshooter who excels in bringing down enemies from afar. Preferred Weapon: Bow, Crossbow, Gun',
        icon: MarksmanshipIcon,
      },
      {
        name: 'Survival',
        text: 'An adaptive ranger who favors using explosives, animal venom, and coordinated attacks with their bonded beast. Preferred Weapon: Polearm, Staff',
        icon: SurvivalIcon,
      },
    ],
  },
  rogue: {
    backgroundImage: RogueBackground,
    classImage: RogueIcon,
    classEmblem: RogueEmblem,
    classDescription:
      'Rogues often initiate combat with a surprise attack from the shadows, leading with vicious melee strikes. When in protracted battles, they utilize a successive combination of carefully chosen attacks to soften the enemy up for a killing blow. Rogues must take special care when selecting targets so that their combo attacks are not wasted, and they must be conscious of when to hide or flee if a battle turns against them.',
    textColor: '#614059',
    width: 90,
    left: 50,
    top: 20,
    specializations: [
      {
        name: 'Assassination',
        text: 'A deadly master of poisons who dispatches victims with vicious dagger strikes. Preferred Weapons: Dagger',
        icon: AssassinationIcon,
      },
      {
        name: 'Outlaw',
        text: 'A ruthless fugitive who uses agility and guile to stand toe-to-toe with enemies. Preferred Weapons: Axes, Maces, Swords, Fist Weapons',
        icon: OutlawIcon,
      },
      {
        name: 'Subtlety',
        text: 'A dark stalker who leaps from the shadows to ambush their unsuspecting prey. Preferred Weapons: Daggers',
        icon: SubtletyIcon,
      },
    ],
  },
  priest: {
    backgroundImage: PriestBackground,
    classImage: PriestIcon,
    classEmblem: PriestEmblem,
    classDescription:
      'Priests use powerful healing magic to fortify themselves and their allies. They also wield powerful offensive spells from a distance, but can be overwhelmed by enemies due to their physical frailty and minimal armor. Experienced priests carefully balance the use of their offensive powers when tasked with keeping their party alive.',
    textColor: '#D5C2A2',
    width: 80,
    left: 51,
    top: 7,
    specializations: [
      {
        name: 'Discipline',
        text: 'Uses magic to shield allies from taking damage as well as heal their wounds. Preferred Weapon: Staff, Wand, Dagger, Mace',
        icon: DisciplineIcon,
      },
      {
        name: 'Holy',
        text: 'A versatile healer who can reverse damage on individuals or groups and even heal from beyond the grave. Preferred Weapon: Staff, Wand, Dagger, Mace',
        icon: HolyPriestIcon,
      },
      {
        name: 'Shadow',
        text: 'Uses sinister Shadow magic and terrifying Void magic to eradicate enemies. Preferred Weapon: Staff, Wand, Dagger, Mace',
        icon: ShadowIcon,
      },
    ],
  },
  shaman: {
    backgroundImage: ShamanBackground,
    classImage: ShamanIcon,
    classEmblem: ShamanEmblem,
    classDescription:
      'During combat, shaman place damaging and controlling totems on the ground to maximize their effectiveness while hindering their enemies. Shaman are versatile enough to battle foes up close or at range, but wise shaman choose their avenue of attack based on their enemies’ strengths and weaknesses.',
    textColor: '#2F5884',
    width: 100,
    left: 43,
    top: 17,
    specializations: [
      {
        name: 'Elemental',
        text: 'A spellcaster who harnesses the destructive forces of nature and the elements. Preferred Weapon: Mace, Dagger, and Shield',
        icon: ElementalIcon,
      },
      {
        name: 'Enhancement',
        text: 'A totemic warrior who strikes foes with weapons imbued with elemental power. Preferred Weapons: Dual Axes, Maces, Fist Weapons',
        icon: EnhancementIcon,
      },
      {
        name: 'Restoration',
        text: 'A healer who calls upon ancestral spirits and the cleansing power of water to mend allies wounds. Preferred Weapon: Mace, Dagger, and Shiel',
        icon: RestorationShamanIcon,
      },
    ],
  },
  mage: {
    backgroundImage: MageBackground,
    classImage: MageIcon,
    classEmblem: MageEmblem,
    classDescription:
      'Mages demolish their foes with arcane incantations. Although they wield powerful offensive spells, mages are fragile and lightly armored, making them particularly vulnerable to close-range attacks. Wise mages make careful use of their spells to keep their foes at a distance or hold them in place.',
    textColor: '#AD5CE6',
    width: 90,
    left: 45,
    top: 15,
    specializations: [
      {
        name: 'Arcane',
        text: 'Manipulates raw Arcane magic, destroying enemies with overwhelming power. Preferred Weapon: Staff, Wand, Dagger, Sword',
        icon: ArcaneIcon,
      },
      {
        name: 'Fire',
        text: 'Focuses the pure essence of Fire magic, assaulting enemies with combustive flames. Preferred Weapon: Staff, Wand, Dagger, Sword',
        icon: FireIcon,
      },
      {
        name: 'Frost',
        text: 'Freezes enemies in their tracks and shatters them with Frost magic. Preferred Weapon: Staff, Wand, Dagger, Sword',
        icon: FrostMageIcon,
      },
    ],
  },
  warlock: {
    backgroundImage: WarlockBackground,
    classImage: WarlockIcon,
    classEmblem: WarlockEmblem,
    classDescription:
      'Warlocks burn and destroy weakened foes with a combination of crippling illnesses and dark magic. While their demon pets protect and enhance them, warlocks strike at their enemies from a distance. As physically weak spellcasters bereft of heavy armor, cunning warlocks allow their minions to take the brunt of enemy attacks in order to save their own skin.',
    textColor: '#EC872A',
    width: 74,
    left: 47,
    top: 17,
    specializations: [
      {
        name: 'Affliction',
        text: 'A master of shadow magic who specializes in drains and damage-over-time spells. Preferred Weapon: Staff, Wand, Dagger, Sword',
        icon: AfflictionIcon,
      },
      {
        name: 'Demonology',
        text: 'A commander of demons who twists the souls of their army into devastating power. Preferred Weapon: Staff, Wand, Dagger, Sword',
        icon: DemonologyIcon,
      },
      {
        name: 'Destruction',
        text: 'A master of chaos who calls down fire to burn and demolish enemies. Preferred Weapon: Staff, Wand, Dagger, Sword',
        icon: DestructionIcon,
      },
    ],
  },
  monk: {
    backgroundImage: MonkBackground,
    classImage: MonkIcon,
    classEmblem: MonkEmblem,
    classDescription:
      'Whatever their combat role, monks rely mainly on their hands and feet to do the talking, and on strong connection with their inner chi to power their abilities. Monks can also heal their allies while at the same time damaging their enemies.',
    textColor: '#AF8130',
    width: 120,
    left: 50,
    top: 5,
    specializations: [
      {
        name: 'Brewmaster',
        text: 'A sturdy brawler who uses unpredictable movement and mystical brews to avoid damage and protect allies. Preferred Weapon: Staff, Polearm',
        icon: BrewmasterIcon,
      },
      {
        name: 'Mistweaver',
        text: 'A healer who masters the mysterious art of manipulating life energies aided by the wisdom of the Jade Serpent. Preferred Weapon: Staff, Mace, Sword',
        icon: MistweaverIcon,
      },
      {
        name: 'Windwalker',
        text: 'A martial artist without peer who pummels foes with hands and fists. Preferred Weapons: Fist Weapons, Axes, Maces, Swords',
        icon: WindwalkerIcon,
      },
    ],
  },
  druid: {
    backgroundImage: DruidBackground,
    classImage: DruidIcon,
    classEmblem: DruidEmblem,
    classDescription:
      'Druids are versatile combatants, in that they can fulfill nearly every role – healing, tanking, and damage dealing. It’s critical that druids tailor the form they choose to the situation, as each form bears a specific purpose',
    textColor: '#8CA0C9',
    width: 70,
    left: 50,
    top: 17,
    specializations: [
      {
        name: 'Balance',
        text: 'Can shapeshift into a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies. Preferred Weapon: Staff, Dagger, Mace',
        icon: BalanceIcon,
      },
      {
        name: 'Feral',
        text: 'Takes on the form of a great cat to deal damage with bleeds and bites. Preferred Weapon: Staff, Polearm',
        icon: FeralIcon,
      },
      {
        name: 'Guardian',
        text: 'Takes on the form of a mighty bear to absorb damage and protect allies. Preferred Weapon: Staff, Polearm',
        icon: GuardianIcon,
      },
      {
        name: 'Restoration',
        text: 'Channels powerful Nature magic to regenerate and revitalize allies. Preferred Weapon: Staff, Dagger, Mace',
        icon: RestorationDruidIcon,
      },
    ],
  },
  demon_hunter: {
    backgroundImage: DemonHunterBackground,
    classImage: DemonHunterIcon,
    classEmblem: DemonHunterEmblem,
    classDescription:
      'Forgoing heavy armor, Demon Hunters capitalize on speed, closing the distance quickly to strike enemies with one-handed weapons. However, Illidari must also use their agility defensively to ensure that battles end favorably.',
    textColor: '#71F021',
    width: 100,
    left: 50,
    top: 17,
    specializations: [
      {
        name: 'Havoc',
        text: 'A brooding master of warglaives and the destructive power of Fel magic. Preferred Weapons: Warglaives, Swords, Axes, Fist Weapons',
        icon: HavocIcon,
      },
      {
        name: 'Vengeance',
        text: 'Embraces the demon within to incinerate enemies and protect their allies. Preferred Weapons: Warglaives, Swords, Axes, Fist Weapons',
        icon: VengeanceIcon,
      },
    ],
  },
  death_knight: {
    backgroundImage: DeathKnightBackground,
    classImage: DeathKnightIcon,
    classEmblem: DeathKnightEmblem,
    classDescription:
      'Death Knights engage their foes up-close, supplementing swings of their weapons with dark magic that renders enemies vulnerable or damages them with unholy power. They drag foes into one-on-one conflicts, compelling them to focus their attacks away from weaker companions. To prevent their enemies from fleeing their grasp, death knights must remain mindful of the power they call forth from runes, and pace their attacks appropriately.',
    textColor: '#6DB7B0',
    width: 85,
    left: 55,
    top: 16,
    specializations: [
      {
        name: 'Blood',
        text: 'A dark guardian who manipulates and corrupts life energy to sustain themselves in the face of an enemy onslaught. Preferred Weapon: Two-Handed Axe, Mace, Sword',
        icon: BloodIcon,
      },
      {
        name: 'Frost',
        text: 'An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes. Preferred Weapons: Dual Axes, Maces, Swords',
        icon: FrostDKIcon,
      },
      {
        name: 'Unholy',
        text: 'A master of death and decay, spreading infection and controlling undead minions to do their bidding. Preferred Weapon: Two-Handed Axe, Mace, Sword',
        icon: UnholyIcon,
      },
    ],
  },
};
