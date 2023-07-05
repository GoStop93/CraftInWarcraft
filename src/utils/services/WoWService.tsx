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

const getCreature = async () => {

  if (!accessToken) {
    await getToken();
  }
  
  const url = `https://us.api.blizzard.com/data/wow/creature/42722?namespace=static-us&locale=en_US&access_token=${accessToken}`;
  const creatures = await request(url, 'GET', null);

  // console.log(creatures);

  return {
  };

};

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
  };
};

export default useWowService;
