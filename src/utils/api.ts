const apiKey = "your_api_key-here"; // Update with your actual API key

export const fetchCoinData = async (symbol: string) => {
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
