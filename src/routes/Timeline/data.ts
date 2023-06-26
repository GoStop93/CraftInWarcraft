import BackGround1 from '../../assets/images/background/timeLine/orcs_and_humans.jpg';
import BackGround2 from '../../assets/images/background/timeLine/tides_of_darkness.jpg';
import BackGround3 from '../../assets/images/background/timeLine/beyond_the_dark_portal.jpg';
import BackGround4 from '../../assets/images/background/timeLine/reign_of_chaos.jpg';
import BackGround5 from '../../assets/images/background/timeLine/the_frozen_throne.jpg';
import BackGround6 from '../../assets/images/background/timeLine/world_of_warcraft.jpg';
import BackGround7 from '../../assets/images/background/timeLine/burning_crusade.jpg';
import BackGround8 from '../../assets/images/background/timeLine/wrath_of_the_lichking.jpg';
import BackGround9 from '../../assets/images/background/timeLine/cataclysm.jpg';
import BackGround10 from '../../assets/images/background/timeLine/mists_of_pandaria.jpg';
import BackGround11 from '../../assets/images/background/timeLine/warlords_of_draenor.jpg';
import BackGround12 from '../../assets/images/background/timeLine/legion.jpg';
import BackGround13 from '../../assets/images/background/timeLine/battle_for_azeroth.jpg';
import BackGround14 from '../../assets/images/background/timeLine/shadowlands.jpg';

import VideoBackground4 from '../../assets/images/background/timeLine/video_backgrounds/reign_of_chaos.jpg';
import VideoBackground5 from '../../assets/images/background/timeLine/video_backgrounds/the_frozen_throne.jpg';
import VideoBackground6 from '../../assets/images/background/timeLine/video_backgrounds/world_of_warcraft.jpg';
import VideoBackground7 from '../../assets/images/background/timeLine/video_backgrounds/burning_crusade.jpg';
import VideoBackground8 from '../../assets/images/background/timeLine/video_backgrounds/wrath_of_the_lichking.jpg';
import VideoBackground9 from '../../assets/images/background/timeLine/video_backgrounds/cataclysm.jpg';
import VideoBackground10 from '../../assets/images/background/timeLine/video_backgrounds/mists_of_pandaria.jpg';
import VideoBackground11 from '../../assets/images/background/timeLine/video_backgrounds/warlords_of_draenor.jpg';
import VideoBackground12 from '../../assets/images/background/timeLine/video_backgrounds/legion.jpg';
import VideoBackground13 from '../../assets/images/background/timeLine/video_backgrounds/battle_for_azeroth.jpg';
import VideoBackground14 from '../../assets/images/background/timeLine/video_backgrounds/shadowlands.jpg';

import Icon1 from '../../assets/icons/timeline/orcs_and_humans.png';
import Icon2 from '../../assets/icons/timeline/tides_of_darkness.png';
import Icon3 from '../../assets/icons/timeline/beyond_the_dark_portal.png';
import Icon4 from '../../assets/icons/timeline/reign_of_chaos.png';
import Icon5 from '../../assets/icons/timeline/the_frozen_throne.png';
import Icon6 from '../../assets/icons/timeline/world_of_warcraft.png';
import Icon7 from '../../assets/icons/timeline/burning_crusade.png';
import Icon8 from '../../assets/icons/timeline/wrath_of_the_lichking.png';
import Icon9 from '../../assets/icons/timeline/cataclysm.png';
import Icon10 from '../../assets/icons/timeline/mists_of_pandaria.png';
import Icon11 from '../../assets/icons/timeline/warlords_of_draenor.png';
import Icon12 from '../../assets/icons/timeline/legion.png';
import Icon13 from '../../assets/icons/timeline/battle_for_azeroth.png';
import Icon14 from '../../assets/icons/timeline/shadowlands.png';

import Image1 from '../../assets/images/timeline/orcs_and_humans.jpg';
import Image2 from '../../assets/images/timeline/tides_of_darkness.jpg';
import Image3 from '../../assets/images/timeline/beyond_the_dark_portal.jpg';
import Image4 from '../../assets/images/timeline/reign_of_chaos.jpg';
import Image5 from '../../assets/images/timeline/the_frozen_throne.jpg';
import Image6 from '../../assets/images/timeline/world_of_warcraft.jpg';
import Image7 from '../../assets/images/timeline/burning_crusade.jpg';
import Image8 from '../../assets/images/timeline/wrath_of_the_lichking.jpg';
import Image9 from '../../assets/images/timeline/cataclysm.jpg';
import Image10 from '../../assets/images/timeline/mists_of_pandaria.jpg';
import Image11 from '../../assets/images/timeline/warlords_of_draenor.jpg';
import Image12 from '../../assets/images/timeline/legion.jpg';
import Image13 from '../../assets/images/timeline/battle_for_azeroth.jpg';
import Image14 from '../../assets/images/timeline/shadowlands.jpg';

export interface IDataSlides {
    id: number;
    background: string;
    videoBackground?: string;
    icon: string;
    image: string;
    title: string;
    text: string;
    url?: string;
  }

export const dataSlides: IDataSlides[] = [
    {
        id: 1,
        background: BackGround1,
        icon: Icon1,
        image: Image1,
        title:'Warcraft: Orcs & Humans',
        text: "For ages, the fallen titan Sargeras plotted to scour all life from Azeroth. To this end, Sargeras possessed the human sorcerer Medivh and compelled him to contact Gul'dan, an orc warlock on the world of Draenor. There, Sargeras' demonic servants among the Burning Legion worked to corrupt the once - peaceful orcs and forge them into a bloodthirsty army known as the Horde. This cursed force invaded Azeroth through the Dark Portal, a dimensional gateway created by Medivh and Gul'dan, and clashed with the human nation of Stormwind. Aided by the half-orc Garona, human champions like Anduin Lothar fought valiantly to protect their kingdom. Yet, in the end, the mighty Horde shattered Stormwind's defenses. Amid the city's tragic fall, Garona betrayed her allies and assassinated King Llane Wrynn, sealing the nation's defeat.",
    },
    {
        id: 2,
        background:BackGround2,
        icon: Icon2,
        image: Image2,
        title:'Warcraft II: Tides of Darkness',
        text: "The human nation of Stormwind had fallen before the Horde. Knight Champion Anduin Lothar gathered the scattered remnants of the human army and led the refugees north across the Great Sea to the kingdom of Lordaeron. By enlisting the aid of other nations - humans, gnomes, elves, and dwarves - Lothar helped form a great Alliance to stand against the orcs and their ruthless new leader, Orgrim Doomhammer. The seemingly unstoppable Horde continued its rampage, reinforcing its growing army with savage trolls and brutish ogres. But, on the eve of victory, Gul'dan and his followers selfishly abandoned their allies to seek out powerful artifacts, forcing the weakened Horde to retreat. Doomhammer momentarily rallied the orcs when he slew Lothar in a harrowing battle, but the hero's death did not break the Alliance's resolve. Turalyon, Lothar's loyal lieutenant, quickly took up leadership of Azeroth's defenders and finally defeated the Horde.",
    },
    {
        id: 3,
        background: BackGround3,
        icon: Icon3,
        image: Image3,
        title:'Warcraft II: Beyond the Dark Portal',
        text: "Following the destruction of Azeroth's Dark Portal by the victorious Alliance, the orc shaman Ner'zhul took command of the remaining Horde on Draenor. There, he plotted to create portals to other unspoiled worlds and invade each in turn. To enable the rituals for his dimensional conquest, Ner'zhul sent orcish forces through his world's intact Dark Portal in search of powerful relics on Azeroth. Wary of the Horde's plans, the heroes of the Alliance invaded Draenor to end the orcish threat forever. Facing certain defeat at the hands of his enemies, Ner'zhul succeeded in opening numerous portals to new worlds. The resulting magical stress shattered Draenor, trapping many of Azeroth's greatest heroes on Outland, the damaged remains of the planet.",
    },
    {
        id: 4,
        background: BackGround4,
        icon: Icon4,
        image: Image4,
        title:'Warcraft III: Reign of Chaos',
        text: "After years of languishing in captivity, the remaining orcs on Azeroth were liberated by a former slave named Thrall. This young shaman and his reformed Horde fled to the continent of Kalimdor to escape the invasion of the Burning Legion, a demonic army that sought to ravage all of Azeroth. To weaken the world's defenses, the Legion unleashed a horrifying new weapon: the undead Scourge. Prince Arthas Menethil of Lordaeron fought bravely to protect his lands from this dreaded enemy, but his fear and desperation led him to join forces with the Scourge's mysterious leader, the Lich King. On Kalimdor, Thrall's Horde set aside old hatreds and united with other races to thwart a massive Legion assault helmed by the demon lord Archimonde. At great cost, the unlikely union of humans, night elves and orcs defeated their enemies atop sacred Mount Hyjal.",
        url: 'https://www.youtube.com/watch?v=c2vm-QjK2xQ',
        videoBackground: VideoBackground4,
    },
    {
        id: 5,
        background: BackGround5,
        icon: Icon5,
        image: Image5,
        title:'Warcraft III: The Frozen Throne',
        text: "While the armies of humans, orcs, and their allies recovered from their battle against the Burning Legion, Arthas Menethil - now a Death Knight - slaughtered the living denizens of Azeroth's Eastern Kingdoms in the name of the Scourge. But new forces emerged that threatened to destroy Arthas and his minions: the banshee Sylvanas Windrunner rebelled, creating a splinter faction of undead known as the Forsaken, and the demon-tainted night elf Illidan Stormrage sent his armies to the icy continent of Northrend to strike at the Lich King. Arthas rushed to his master's defense and defeated Illidan, who fled to Outland in shame. At last close to the seat of the Scourge's power, Arthas did the unthinkable, and willingly merged his own spirit with that of the Lich King.",
        url: 'https://www.youtube.com/watch?v=iqB3KeiBLuw',
        videoBackground: VideoBackground5,
    },
    {
        id: 6,
        background: BackGround6,
        icon: Icon6,
        image: Image6,
        title:'World of Warcraft',
        text: "Intent on settling the arid region of Durotar, Thrall's new Horde expanded its ranks, inviting the undead Forsaken to join orcs, tauren, and trolls. Meanwhile, dwarves, gnomes and the ancient night elves pledged their loyalties to a reinvigorated Alliance, guided by the human kingdom of Stormwind. After Stormwind's king, Varian Wrynn, mysteriously disappeared, Highlord Bolvar Fordragon served as Regent but his service was marred by the manipulations and mind control of the black dragon Onyxia, who ruled in disguise as a human noblewoman. As heroes investigated Onyxia's manipulations, ancient foes surfaced in lands throughout the world to menace Horde and Alliance alike.",
        url: 'https://www.youtube.com/watch?v=vlVSJ0AvZe0&t=12s',
        videoBackground: VideoBackground6,
    },
    {
        id: 7,
        background: BackGround7,
        icon: Icon7,
        image: Image7,
        title:'The Burning Crusade',
        text: "The Doom Lord Kazzak reopened the Dark Portal to Outland, flooding Azeroth with the ravenous demons of the Burning Legion. Expeditions from the Horde and Alliance, reinforced by their new blood elf and draenei allies, passed through the gateway to stop the invasion at its source. On Outland's desiccated Hellfire Peninsula, the Alliance discovered several of their heroes who had crossed through the portal many years before, while the Horde made contact with the Mag'har - 'uncorrupted' orcs who had not participated in their race's original invasion of Azeroth. The expedition into Outland dragged Horde and Alliance armies further into conflict with the agents of the Legion and the lieutenants of Illidan Stormrage, who had claimed the shattered realm for his own.",
        url: 'https://www.youtube.com/watch?v=IBHL_-biMrQ&t=58s',
        videoBackground: VideoBackground7,
    },
    {
        id: 8,
        background: BackGround8,
        icon: Icon8,
        image: Image8,
        title:'Wrath of the Lich King',
        text: "In the wake of the Sunwell's purification, a period of suspicious quiet had swept over the world. As if on cue, the undead Scourge launched a massive assault against the cities and towns of Azeroth, this time extending its reach far beyond the Eastern Kingdoms. Under pressure to respond with a full army, Warchief Thrall deployed an expedition force to Northrend led by Overlord Garrosh Hellscream. Meanwhile, the missing human king Varian Wrynn at last returned to Stormwind City and reclaimed his crown. He sent an equally powerful Alliance army, commanded by Bolvar Fordragon, to defeat the Lich King—and any Horde forces who would stand in their way.",
        url: 'https://www.youtube.com/watch?v=HInmEcbFyF0',
        videoBackground: VideoBackground8,
    },
    {
        id: 9,
        background: BackGround9,
        icon: Icon9,
        image: Image9,
        title:'Cataclysm',
        text: "The victorious Northrend expeditions returned home to find all of Azeroth shaken by erratic elemental forces. This unrest preceded the return of the maddened Dragon Aspect Deathwing the Destroyer, who erupted from his lair in the bowels of the Elemental Plane, shattering Azeroth in the process. With the elemental realms now open to the world, chaotic elemental spirits and their tyrannical lords emerged to help the Destroyer and the nihilistic Twilight's Hammer cult bring about the Hour of Twilight: the end of all life on Azeroth.",
        url: 'https://www.youtube.com/watch?v=Wq4Y7ztznKc',
        videoBackground: VideoBackground9,
    },
    {
        id: 10,
        background: BackGround10,
        icon: Icon10,
        image: Image10,
        title:'Mists of Pandaria',
        text: "With Deathwing's menace ended, Warchief Garrosh Hellscream seized the opportunity to strike at the Alliance and expand the Horde's territory on Kalimdor. His assault completely obliterated the human city of Theramore, causing world-wide violence between the factions to erupt anew. A destructive naval skirmish left Alliance and Horde forces washed ashore on the fog-shrouded island of Pandaria, which had appeared in the open sea, defying modern maps and charts. As both warring factions established footholds on the resource-rich continent, they made contact with the noble pandaren, one of its most prolific peoples. This ancient race worked with the Alliance and Horde in the hopes of dispersing the Sha: dark, ephemeral beings roused from beneath Pandaria by the bloody conflict.",
        url: 'https://www.youtube.com/watch?v=wvYXoyxLv64',
        videoBackground: VideoBackground10,
    },
    {
        id: 11,
        background: BackGround11,
        icon: Icon11,
        image: Image11,
        title:'Warlords of Draenor',
        text: "Garrosh Hellscream escaped justice with the assistance of the bronze dragon Kairozdormu, eventually finding himself in an alternate Draenor in the time before the original Horde had come to Azeroth. Hungry for vengeance, Garrosh provided his father, Grommash Hellscream, with the technology to assemble his ideal army—the conquering force called the Iron Horde. Grommash was quick to unite Draenor's orcish clans under his banner, and the clan leaders became the Iron Horde's warlords. Among them were the bloodthirsty Kargath Bladefist, the cunning Blackhand, the elder shaman Ner'zhul, and the fearless Kilrogg Deadeye. The Iron Horde took command of several vital locations on Draenor, subjugated the ogre city of Highmaul, and built massive fortifications like Blackrock Foundry to outfit the warlords' armies. Once the Iron Horde had Draenor in its grasp, the orcs invaded Azeroth through the Dark Portal, razed Nethergarde Keep, and seized control of Dreadmaul Hold. In retaliation, Khadgar assembled the champions of the Alliance and the Horde, leading them through the portal to stop the Iron Horde on Draenor once and for all. Garrosh ultimately met his end at Thrall's hands, and after an exhausting campaign, the heroes of Azeroth were able to defeat most of the Iron Horde's warlords. Khadgar's offensive dealt a crushing blow to the Iron Horde. Grommash's failure to give his warriors the victory he had promised bred dissent within the ranks, affording the warlock Gul'dan the opportunity to usurp the Iron Horde and summon the demonic Burning Legion to Draenor...",
        url: 'https://www.youtube.com/watch?v=TLzhlsEFcVQ',
        videoBackground: VideoBackground11,
    },
    {
        id: 12,
        background: BackGround12,
        icon: Icon12,
        image: Image12,
        title:'Legion',
        text: "Following the battle for Draenor, the deceitful Gul’dan found himself on Azeroth. Gul’dan, tormented by whispers of Kil’jaeden the Deceiver, opened the Tomb of Sargeras and with it a gateway for the Burning Legion to invade Azeroth. The warlock bent the denizens of the Broken Isles to his will, including the ancient nightborne city of Suramar and their leader, Grand Magistrix Elisande. The Alliance and the Horde assaulted the Broken Shore, hoping to preemptively stop Gul’dan and the Legion’s forces. Their efforts ultimately failed, costing High King Varian Wrynn and Warchief Vol’jin their lives. A desperate effort by Archmage Khadgar to unite the shattered factions ultimately resulted in the recovery of the Pillars of Creation, the only instruments capable of sealing the Tomb once more. As the dwellers of the Broken Isles are rescued from the Legion’s grasp, the forces of the Alliance and the Horde close in on The Nighthold—Gul’dan’s base of operations, poised to end the warlock’s menace once and for all…",
        url: 'https://www.youtube.com/watch?v=eYNCCu0y-Is',
        videoBackground: VideoBackground12,
    },
    {
        id: 13,
        background: BackGround13,
        icon: Icon13,
        image: Image13,
        title:'Battle for Azeroth',
        text: "The wounds inflicted by Sargeras the Dark Titan on Azeroth brought forth a volatile substance known as Azerite—the blood of Azeroth herself. Tensions escalated between the Alliance and the Horde as both factions came to realize the true power of Azerite, igniting a full-scale war leading to the fall of Teldrassil and the Undercity.Weakened and in need of new allies, the Alliance and the Horde called upon their greatest heroes to bolster their ranks. Jaina Proudmoore traveled to her home kingdom of Kul Tiras, hoping to bring them once more into the Alliance. She found squabbling nobles and a resentful people, united only in their contempt for Jaina’s past actions. Meanwhile, the Horde rescued the Zandalari princess Talanji from the Stormwind Stockade. Talanji worked to convince the Zandalari trolls to aid the Horde, though her father—King Rastakhan—initially refused to listen. Both factions’ diplomatic efforts were successful in building trust, however, and their war campaigns alongside new allies led to new footholds being established in Zandalar and Kul Tiras. United in arms with new allies, the Alliance and the Horde stand once more upon the shores of war, as the tides of vengeance loom on the horizon... ",
        url: 'https://www.youtube.com/watch?v=jSJr3dXZfcg&t=133s',
        videoBackground: VideoBackground13,
    },
    {
        id: 14,
        background: BackGround14,
        icon: Icon14,
        image: Image14,
        title:'Shadowlands',
        text: "Leaving Orgrimmar and the Horde behind, Sylvanas Windrunner journeyed to Icecrown Citadel. There she defeated the Lich King, Bolvar Fordragon, and claimed possession of the Helm of Domination. With a single act of destruction, Sylvanas ripped open the way to the Shadowlands—a realm of infinite afterlives never before seen by the living.In a further act of treachery, the Banshee Queen sent her agents to kidnap Anduin, Baine, Jaina, and Thrall. The heroes of Azeroth pursued Sylvanas into the Shadowlands only to find themselves trapped in the Maw, a prison for the vilest, most irredeemable souls in existence ruled by Sylvanas's ally, the Jailer. Escaping was no easy feat, but the heroes made their way to Oribos, the Eternal City—the arrival point for all souls who enter the Shadowlands. There they discovered that the impassive Arbiter, responsible for judging souls and sending them to their final destination, had gone dormant, unable to discharge her duties. Furthermore, the four Shadowlands covenants were in disarray, deprived of souls and starving for a crucial resource vital to their existence: anima.The heroes of Azeroth fought to rebuild the strength of the covenants as they attempted to thwart Sylvanas's plan and rescue their allies from the Jailer's stronghold: Torghast, Tower of the Damned. A traitor was revealed among the covenants—Denathrius, the Sire of Revendreth, home of the venthyr covenant. Denathrius had been hoarding anima to empower his true ally, the Jailer. Though the Sire was defeated atop his seat of power, Castle Nathria, Sylvanas and the Jailer had already set their plan in motion: to dominate Anduin Wrynn and use him as a weapon to further their nefarious plans.",
        url: 'https://www.youtube.com/watch?v=s4gBChg6AII',
        videoBackground: VideoBackground14,
    },
];
