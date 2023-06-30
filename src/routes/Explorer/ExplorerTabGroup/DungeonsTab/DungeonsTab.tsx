import { useEffect, useState } from "react";
import useWowService from "../../../../utils/services/WoWService";
import { 
    StyledContainer, 
    StyledTopContent,
    StyledBottomContent,
    StyledTitle, 
    StyledDungeonInformation,
} from "./DungeonsTab.styles"

export const DungeonsTab = () => {

    const { getInstance, getInstanceByName } = useWowService();
    const [dungeonName, setDungeonName] = useState("");
    const [dungeonDescription, setDungeonDescription] = useState("");
    const [dungeonImage, setDungeonImage] = useState("");

    const dungeonIds = [
        64, 67, 76, 66, 63, 69, 78, 77, 70, 72, 75, 68, 65, 184, 185, 186, 74, 73, 187, 71,
        256, 260, 322, 281, 311, 273, 247, 320, 285, 330, 230, 254, 249, 251, 283, 248, 271,
        317, 316, 279, 253, 255, 284, 261, 257, 321, 233, 246, 303, 277, 228, 312, 250, 259,
        252, 324, 278, 240, 236, 227, 238, 286, 258, 302, 241, 274, 272, 276, 231, 226, 237,
        234, 282, 232, 262, 275, 280, 239, 229, 313, 362, 369, 385, 721, 726, 477, 547, 556,
        557, 757, 758, 759, 760, 761, 767, 945, 1021, 1022, 946, 959, 536, 537, 558, 559, 707,
        762, 457, 669, 476, 768, 727, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751,
        752, 753, 754, 755, 756, 716, 740, 860, 777, 786, 800, 822, 861
    ];

    useEffect(() => {

        const fetchRandomInstance = async () => {
            const randomIndex = Math.floor(Math.random() * dungeonIds.length);
            const randomInstanceId = dungeonIds[randomIndex];
            
            const instance = await getInstance(randomInstanceId);

            setDungeonName(instance.name);
            setDungeonDescription(instance.description);
            setDungeonImage(instance.image);
        };
        // const fetchInstance = async () => {
        //     const instance = await getInstanceByName('Scarlet');
        //     setDungeonName(instance.name);
        //     setDungeonDescription(instance.description);
        //     setDungeonImage(instance.image);
        // };

        fetchRandomInstance();
    }, []);

    return (
        <StyledContainer>
            <StyledTopContent>
                <StyledTitle>Dangeons</StyledTitle>
            </StyledTopContent>
            <StyledBottomContent>
                <StyledDungeonInformation>
                <img src={dungeonImage} alt="123" />
                <span>{dungeonName}</span>
                <span>{dungeonDescription}</span>
                </StyledDungeonInformation>
            </StyledBottomContent>
        </StyledContainer>
    );
};
