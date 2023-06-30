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

    // const excludedNumbers = [19014, 19015, 19021, 19053, 19063, 19072, 19073, 19074, 19075, 19076, 19077, 19078, 19079, 19080, 19081, 19082, 19122, 19158, 19161];
    // let randomNumber;

    // do {
    //   randomNumber = Math.floor(Math.random() * (19170 - 19002 + 1)) + 19002;
    // } while (excludedNumbers.includes(randomNumber));
  
    const url = `https://us.api.blizzard.com/data/wow/journal-instance/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`;
    const instanceInformation = await request(url, 'GET', null);

    const urlForImage = `${instanceInformation.media.key.href}&access_token=${accessToken}`;
    const instanceImage = await request(urlForImage, 'GET', null);

    console.log(instanceInformation);

    return {
      name: instanceInformation.name,
      description: instanceInformation.description,
      image: instanceImage.assets[0].value
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

    console.log(allInstances);

    return {
        name: instanceInformation.name,
        description: instanceInformation.description,
        image: instanceImage.assets[0].value
    };
  } else {
    throw new Error(`Instance with name "${instanceName}" not found.`);
  }

};

  const transformItem = (item: any) => {
    return {
        url: item.value,
    }
};

  
  return { loading, error, clearError, getToken, getRandomItemIcon, getInstance, getInstanceByName };
};

export default useWowService;
