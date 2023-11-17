import axios from 'axios';

(async () => {
  const delay = (seconds: number, message: string) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(message), seconds * 1000);
    });
  };

  const getProduts = () =>
    axios.get('https://api.escuelajs.co/api/v1/products?offset=1&limit=1');

  const getProdutsAsync = async () => {
    const response = await axios.get(
      'https://api.escuelajs.co/api/v1/products?offset=1&limit=1',
    );
    return response.data;
  };

  console.log('Waiting for delay() to finish...');
  console.log(await delay(2, 'delay() has finished after 2 seconds'));
  console.log('Products: ' + JSON.stringify((await getProduts()).data));
  console.log('Products (async): ' + JSON.stringify(await getProdutsAsync()));
})();
