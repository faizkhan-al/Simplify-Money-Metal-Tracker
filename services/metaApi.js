const API_KEY = '837fda2b631f4d11e3f509b3a128ae2e';
const BASE_URL = 'https://www.goldapi.io/api';

export const fetchMetalPrices = async (symbol) => {
  try {
    const response = await fetch(`${BASE_URL}/${symbol}/INR`, {
      method: 'GET',
      headers: {
        'x-access-token': API_KEY,
        'Content-Type': 'application/json'
      }
    });
    
    const result = await response.json();

    if (!result || result.error || !result.price) {
      console.warn(`API issue for ${symbol}. Using fallback data.`);
      return getFallbackData(symbol);
    }

    const pricePerGram = result.price / 31.1035;
    const intlPriceInTola = pricePerGram * 11.66;
    const indianFinalPrice = intlPriceInTola * 1.15 * 1.03; // Duty + GST

    return {
      intlTolaPrice: intlPriceInTola.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
      indianPrice: indianFinalPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
      kgPrice: (pricePerGram * 1000 * 1.15 * 1.03).toLocaleString('en-IN', { maximumFractionDigits: 0 }),
      rawPrice: result.price.toLocaleString('en-IN'),
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      prevClose: ((result.prev_close_price / 31.1035) * 11.66).toLocaleString('en-IN', { maximumFractionDigits: 2 }),
    };
  } catch (error) {
    console.error("Fetch Error:", error);
    return getFallbackData(symbol);
  }
};

const getFallbackData = (symbol) => {
    const defaultRates = { XAU: 160000, XAG: 2400, XPT: 72000, XPD: 56000 };
    const price = defaultRates[symbol] || 50000;
    
    return {
      intlTolaPrice: (price / 1.18).toLocaleString('en-IN', { maximumFractionDigits: 2 }),
      indianPrice: price.toLocaleString('en-IN', { maximumFractionDigits: 2 }),
      kgPrice: (price * 85).toLocaleString('en-IN', { maximumFractionDigits: 0 }),
      rawPrice: (price * 2.8).toLocaleString('en-IN'),
      time: new Date().toLocaleTimeString() + " (Offline)",
      date: new Date().toLocaleDateString(),
      prevClose: (price - 1000).toLocaleString('en-IN'),
    };
};