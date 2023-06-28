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
      console.error('Access token not found in response');
      return;
    }

    accessToken = response.access_token;
    console.log('Токен получен:', response.access_token);
  };

  const getWowTokenPrice = async () => {
    if (!accessToken) {
      console.error('Access token is missing');
      return;
    }

    const url = `https://us.api.blizzard.com/data/wow/token/?namespace=dynamic-us`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const tokenPrice = await request(url, 'GET', null, headers);

    console.log('Текущая цена WoW Token:', tokenPrice);
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
      url: itemIcon.assets.map(transformCoin)[0].url,
    };

  };

  const transformCoin = (item: any) => {
    return {
        url: item.value,
    }
};

  
  return { loading, error, clearError, getToken, getWowTokenPrice, getRandomItemIcon };
};

export default useWowService;
