import AlianceBackground from '../../../assets/images/background/races/alliance.jpg';
import HordeBackground from '../../../assets/images/background/races/horde.jpg';

import AllianceLogo from '../../../assets/icons/races/alliance_logo.png';
import HordeLogo from '../../../assets/icons/races/horde_logo.png';

import AllianceSmallLogo from '../../../assets/icons/races/allicance_small.png';
import HordeSmallLogo from '../../../assets/icons/races/horde_small.png';

import HumanFull from '../../../assets/icons/races/races_icons/human_full.png';
import HumanPart from '../../../assets/icons/races/races_icons/human_part.png';
import DwarfFull from '../../../assets/icons/races/races_icons/dwarf_full.png';
import DwarfPart from '../../../assets/icons/races/races_icons/dwarf_part.png';
import NightElfFull from '../../../assets/icons/races/races_icons/night_elf_full.png';
import NightElfPart from '../../../assets/icons/races/races_icons/night_elf_part.png';
import GnomeFull from '../../../assets/icons/races/races_icons/gnome_full.png';
import GnomePart from '../../../assets/icons/races/races_icons/gnome_part.png';
import DraeneiFull from '../../../assets/icons/races/races_icons/draenei_full.png';
import DraeneiPart from '../../../assets/icons/races/races_icons/draenei_part.png';
import WorgenFull from '../../../assets/icons/races/races_icons/worgen_full.png';
import WorgenPart from '../../../assets/icons/races/races_icons/worgen_part.png';
import PandarenAllianceFull from '../../../assets/icons/races/races_icons/pandaren_alliance_full.png';
import PandarenAlliancePart from '../../../assets/icons/races/races_icons/pandaren_alliance_part.png';

import OrcFull from '../../../assets/icons/races/races_icons/orc_full.png';
import OrcPart from '../../../assets/icons/races/races_icons/orc_part.png';
import UndeadFull from '../../../assets/icons/races/races_icons/undead_full.png';
import UndeadPart from '../../../assets/icons/races/races_icons/undead_part.png';
import TaurenFull from '../../../assets/icons/races/races_icons/tauren_full.png';
import TaurenPart from '../../../assets/icons/races/races_icons/tauren_part.png';
import TrollFull from '../../../assets/icons/races/races_icons/troll_full.png';
import TrollPart from '../../../assets/icons/races/races_icons/troll_part.png';
import BloodElfFull from '../../../assets/icons/races/races_icons/blood_elf_full.png';
import BloodElfPart from '../../../assets/icons/races/races_icons/blood_elf_part.png';
import GoblinFull from '../../../assets/icons/races/races_icons/goblin_full.png';
import GoblinPart from '../../../assets/icons/races/races_icons/goblin_part.png';
import PandarenHordeFull from '../../../assets/icons/races/races_icons/pandaren_horde_full.png';
import PandarenHordePart from '../../../assets/icons/races/races_icons/pandaren_horde_part.png';

export const racesData = [
    {
        fraction: 'alliance',
        background: AlianceBackground,
        logo: AllianceLogo,
        smallLogo: AllianceSmallLogo,
        title: 'FOR THE ALLIANCE',
        subtitle: 'The steadfast Alliance is driven by tradition. They are staunch defenders of justice and duty who protect the realm of Azeroth against any aggressors, including the savage Horde',
        color: '#0078FF',
        races: [
            {
                name: 'Human',
                iconFull: HumanFull,
                iconPart: HumanPart,
            },
            {
                name: 'Dwarf',
                iconFull: DwarfFull,
                iconPart: DwarfPart,
            },
            {
                name: 'Night_Elf',
                iconFull: NightElfFull,
                iconPart: NightElfPart,
                text: 'Night Elf'
            },
            {
                name: 'Gnome',
                iconFull: GnomeFull,
                iconPart: GnomePart,
            },
            {
                name: 'Draenei',
                iconFull: DraeneiFull,
                iconPart: DraeneiPart,
            },
            {
                name: 'Worgen',
                iconFull: WorgenFull,
                iconPart: WorgenPart,
            },
            {
                name: 'Pandaren_alliance',
                iconFull: PandarenAllianceFull,
                iconPart: PandarenAlliancePart,
                text: 'Pandaren',
            },
        ]
    },
    {
        fraction: 'horde',
        background: HordeBackground,
        logo: HordeLogo,
        smallLogo: HordeSmallLogo,
        title: 'FOR THE HORDE',
        subtitle: 'The indomitable Horde is driven by unity. They are fervent keepers of freedom and hope, relentlessly opposed to any who threaten these ideals, including the stringent Alliance.',
        color: '#B30000',
        races: [
            {
                name: 'Orc',
                iconFull: OrcFull,
                iconPart: OrcPart,
            },
            {
                name: 'Undead',
                iconFull: UndeadFull,
                iconPart: UndeadPart,
            },
            {
                name: 'Tauren',
                iconFull: TaurenFull,
                iconPart: TaurenPart,
            },
            {
                name: 'Troll',
                iconFull: TrollFull,
                iconPart: TrollPart,
            },
            {
                name: 'Blood_Elf',
                iconFull: BloodElfFull,
                iconPart: BloodElfPart,
                text: 'Blood Elf'
            },
            {
                name: 'Goblin',
                iconFull: GoblinFull,
                iconPart: GoblinPart,
            },
            {
                name: 'Pandaren_horde',
                iconFull: PandarenHordeFull,
                iconPart: PandarenHordePart,
                text: 'Pandaren',
            },
        ]
    },
];
