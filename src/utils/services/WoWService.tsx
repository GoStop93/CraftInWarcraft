import { useHttp } from "../hooks/http.hook";

const useWowService = () => {
    const {loading, request, error, clearError} = useHttp();

    const clientID = `eb3e58759211417094026bdc3fb20882`;
    const secret = `3rpM5ZCdAC1lQRa83k1rV790H4saNfE5`;
    let accessToken = '';


  const getToken = async () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', clientID);
    params.append('client_secret', secret);

    const response = await request('https://oauth.battle.net/token', 'POST', params.toString(), {
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    if (!response.access_token) {
      return;
    }

    accessToken = response.access_token;
  };

  const getRandomItemIcon = async () => {

    if (!accessToken) {
      await getToken();
    }

    const excludedNumbers = [19014, 19015, 19021, 19053, 19063, 19072, 19073, 19074, 19075, 19076, 19077, 19078, 19079, 19080, 19081, 19082, 19122, 19158, 19161];
    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * (19170 - 19002 + 1)) + 19002;
    } while (excludedNumbers.includes(randomNumber));
  
    const url = `https://us.api.blizzard.com/data/wow/media/item/${randomNumber}?namespace=static-us&locale=en_US&access_token=${accessToken}`;

    const itemIcon = await request(url, 'GET', null);

    return {
      url: itemIcon.assets.map(transformItem)[0].url,
    };

  };

  const getInstance = async (id: number) => {

    if (!accessToken) {
      await getToken();
    }
  
    const url = `https://us.api.blizzard.com/data/wow/journal-instance/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
    const instanceInformation = await request(url, 'GET', null);
    
    const IDs = instanceInformation.encounters.map((encounter: { id: number }) => encounter.id)

    const urlForImage = `${instanceInformation.media.key.href}&access_token=${accessToken}`;
    const instanceImage = await request(urlForImage, 'GET', null);


    return {
      name: instanceInformation.name ? instanceInformation.name : 'There is no name',
      description: instanceInformation.description,
      image: instanceImage.assets[0].value,
      level: instanceInformation.minimum_level,
      ids: IDs,
    };

  };

  const getInstanceByName = async (instanceName: string) => {

    if (!accessToken) {
      await getToken();
    }

    const lowercaseInstanceName = instanceName.toLowerCase();
    
    const urlAll =`https://us.api.blizzard.com/data/wow/journal-instance/index?namespace=static-us&locale=en_US&access_token=${accessToken}`;
    const allInstances = await request(urlAll, 'GET', null);

    let id: number | null = null;

    allInstances.instances.forEach((instance: any) => {
      const lowercaseName = instance.name.toLowerCase();

      if (lowercaseName.includes(lowercaseInstanceName)) {
        id = instance.id;
      }
    });

  
  if (id !== null) {
    const url = `https://us.api.blizzard.com/data/wow/journal-instance/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
    const instanceInformation = await request(url, 'GET', null);

    const urlForImage = `${instanceInformation.media.key.href}&access_token=${accessToken}`;
    const instanceImage = await request(urlForImage, 'GET', null);
    const IDs = instanceInformation.encounters.map((encounter: { id: number }) => encounter.id)

    return {
        name: instanceInformation.name,
        description: instanceInformation.description,
        image: instanceImage.assets[0].value,
        level: instanceInformation.minimum_level,
        ids: IDs,
    };
    
  }

};

const getEncounter = async (id: number) => {

  if (!accessToken) {
    await getToken();
  }

  const url = `https://us.api.blizzard.com/data/wow/journal-encounter/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
  const encounterInformation = await request(url, 'GET', null);

  return {
    name: encounterInformation.name,
    description: encounterInformation.description,
  };

};

const getPet = async (id: number) => {

  if (!accessToken) {
    await getToken();
  }

  const url = `https://us.api.blizzard.com/data/wow/pet/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
  const petInfo = await request(url, 'GET', null);

  const IDs = petInfo.abilities ? petInfo.abilities.map((abil: { ability: { id: number } }) => abil.ability.id) : [];

  return {
    name: petInfo.name,
    description: petInfo.description,
    icon: petInfo.icon,
    ids: IDs,
  };

};

const getPetAbility = async (id: number) => {

  if (!accessToken) {
    await getToken();
  }

  const url = `https://us.api.blizzard.com/data/wow/pet-ability/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
  const petAbilityInfo = await request(url, 'GET', null);

  const urlMedia = `${petAbilityInfo.media.key.href}&access_token=${accessToken}`;
  const petMedia = await request(urlMedia, 'GET', null);

  return {
    name: petAbilityInfo.name ? petAbilityInfo.name : null,
    icon: petMedia.assets[0].value ? petMedia.assets[0].value : null,
  };

};

const getPetByName = async (name: string) => {

  if (!accessToken) {
    await getToken();
  }

  const lowercasePetName = name.toLowerCase();

  const urlForAllPets = `https://us.api.blizzard.com/data/wow/pet/index?namespace=static-us&locale=en_US&access_token=${accessToken}`;
  const allPets = await request(urlForAllPets, 'GET', null);

  let id: number | null = null;

  allPets.pets.forEach((pet: any) => {
    const lowercaseName = pet.name.toLowerCase();

    if (lowercaseName.includes(lowercasePetName)) {
      id = pet.id;
    }
  });

  if (id !== null) {
    const url = `https://us.api.blizzard.com/data/wow/pet/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
    const petInfo = await request(url, 'GET', null);

    const IDs = petInfo.abilities ? petInfo.abilities.map((abil: { ability: { id: number } }) => abil.ability.id) : [];

    return {
      name: petInfo.name,
      description: petInfo.description,
      icon: petInfo.icon,
      ids: IDs,
    };
  }

};


const getRandomCreature = async (id: number) => {

  if (!accessToken) {
    await getToken();
  }

  const url = `https://us.api.blizzard.com/data/wow/creature/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
  const creatureInfo = await request(url, 'GET', null);

  const urlCreatureMedia = `https://us.api.blizzard.com/data/wow/media/creature-display/${creatureInfo.creature_displays[0].id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
  const creatureMedia = await request(urlCreatureMedia, 'GET', null);

  const urlFamilyMedia = `https://us.api.blizzard.com/data/wow/media/creature-family/${creatureInfo.family.id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
  const familyMedia = await request(urlFamilyMedia, 'GET', null);


  return {
    name: creatureInfo.name,
    family: creatureInfo.family.name,
    type: creatureInfo.type.name,
    creatureMedia: creatureMedia.assets[0].value,
    familyMedia: familyMedia.assets[0].value,
  }

}

const getCreature = async (name: string) => {

  const lowercaseCreatureName = name.toLowerCase();

  if (!accessToken) {
    await getToken();
  }

  
  const url = `https://us.api.blizzard.com/data/wow/search/creature?namespace=static-us&name.en_US=${name}&orderby=id&_page=1&access_token=${accessToken}`;

  const creatureInfo = await request(url, 'GET', null);

  let id: number | null = null;

  creatureInfo.results.forEach((creature: any) => {
    const creatureName = creature.data.name.en_US.toLowerCase()

    if (creatureName.includes(lowercaseCreatureName)) {
      id = creature.data.id;
    }
  });

  if (id !== null) {
    const url = `https://us.api.blizzard.com/data/wow/creature/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
    const creatureInfo = await request(url, 'GET', null);
  
    const urlCreatureMedia = `https://us.api.blizzard.com/data/wow/media/creature-display/${creatureInfo.creature_displays[0].id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
    const creatureMedia = await request(urlCreatureMedia, 'GET', null);
  
    const urlFamilyMedia = `https://us.api.blizzard.com/data/wow/media/creature-family/${creatureInfo.family.id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
    const familyMedia = await request(urlFamilyMedia, 'GET', null);
  
  
    return {
      name: creatureInfo.name,
      family: creatureInfo.family.name,
      type: creatureInfo.type.name,
      creatureMedia: creatureMedia.assets[0].value,
      familyMedia: familyMedia.assets[0].value,
    }
    
  }

};

const getItemClasses = async () => {

  if (!accessToken) {
    await getToken();
  }

  const ids = [];
  const maxId = 100000;
  
  for (let id = 50001; id <= maxId; id++) {
    const url = `https://us.api.blizzard.com/data/wow/item/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;

    try {
      const item = await request(url, 'GET', null);
      ids.push(id);
    } catch (error) {
      continue;
    }
  }

  return ids;
}

const getRandomItem = async (id: number) => {

  if (!accessToken) {
    await getToken();
  }

  const url = `https://us.api.blizzard.com/data/wow/item/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
  const itemInfo = await request(url, 'GET', null);

  const stats = itemInfo.preview_item.stats || [];
  const itemStats = stats.map((stat: any) => stat.display.display_string); 

  const spells = itemInfo.preview_item.spells || [];
  const itemSpells = spells.map((spell: any) => spell.description); 

  const setItems = itemInfo?.preview_item?.set?.items || [];
  const itemSetItems = setItems.map((item: any) => item.item.name);

  const setBonuses = itemInfo.preview_item?.set?.effects || [];
  const itemSetBonuses = setBonuses.map((bouns: any) => bouns.display_string);

  const sockets = itemInfo.preview_item.sockets || [];
  const itemSockets = sockets.map((socket: any) => socket.socket_type.name);

  const requiresLevel = itemInfo.preview_item.requirements?.level?.display_string || null;
  const requiresSkill = itemInfo.preview_item.requirements?.skill?.display_string || null;
  const itemLevel = itemInfo.preview_item?.level?.display_string || null;
  const itemBinding = itemInfo.preview_item?.binding?.name || null;
  const itemDescription = itemInfo.preview_item?.description || null;

  const sellPrice = itemInfo?.preview_item?.sell_price || null;
  const itemName = itemInfo?.preview_item?.name || null;
  const itemSubclass = itemInfo?.preview_item?.inventory_type?.name || null;
  const itemClass = itemInfo?.preview_item?.item_subclass?.name || null;
  const itemType = itemInfo?.preview_item?.item_class?.name || null;
  

  const weaponSpeed = itemInfo.preview_item?.weapon?.attack_speed?.display_string || null;
  const weaponDamage = itemInfo.preview_item?.weapon?.damage?.display_string || null;
  const weaponDps = itemInfo.preview_item?.weapon?.dps?.display_string || null;

  const armor = itemInfo.preview_item?.armor?.display?.display_string || null;

  const durability = itemInfo.preview_item?.durability?.display_string || null;
  const quality = itemInfo.preview_item?.quality?.name || null;

  const sellPriceHeader = sellPrice?.display_strings?.header || null;
  const sellPriceGold = sellPrice?.display_strings?.gold || null;
  const sellPriceSilver = sellPrice?.display_strings?.silver || null;
  const sellPriceCopper = sellPrice?.display_strings?.copper || null;

  const socketBonus = itemInfo.preview_item?.socket_bonus || null;

  const setName = itemInfo.preview_item?.set?.display_string || null;

  const itemStatsColor = stats.map((stat: any) => {
    if (stat.display.color.r === 0 && stat.display.color.g === 255 && stat.display.color.b === 0) {
      return '#1eff00';
    } else {
      return null;
    }
  });


  const urlMedia = `${itemInfo.preview_item.media.key.href}&access_token=${accessToken}`;
  const itemMedia = await request(urlMedia, 'GET', null);

  const icon = itemMedia?.assets[0]?.value || null;
  // console.log(id);
  console.log(itemInfo.preview_item);
  console.log(requiresSkill)

  return {
    icon,
    itemName,
    itemLevel,
    itemBinding,
    itemSubclass,
    itemClass,
    weaponSpeed,
    weaponDamage,
    weaponDps,
    durability,
    stats: itemStats,
    statColor: itemStatsColor,
    spells: itemSpells,
    requiresLevel,
    sellPriceHeader,
    sellPriceGold,
    sellPriceSilver,
    sellPriceCopper,
    quality,
    armor,
    sockets: itemSockets,
    socketBonus,
    setName,
    setItems: itemSetItems,
    setBonuses: itemSetBonuses,
    itemDescription,
    itemType,
    requiresSkills: requiresSkill,
  }
}


const transformItem = (item: any) => {
  return {
      url: item.value,
  }
};

  
  return { 
    loading, 
    error, 
    clearError, 
    getToken, 
    getRandomItemIcon, 
    getInstance, 
    getInstanceByName, 
    getEncounter, 
    getPet,
    getPetAbility,
    getPetByName,
    getCreature,
    getRandomCreature,
    getItemClasses,
    getRandomItem,
  };
};

export default useWowService;
