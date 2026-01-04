# StayUpdated - Real-time Metal Price Tracker

A React Native application that fetches live prices for Gold, Silver, Platinum, and Palladium using global APIs and converts them for the Indian market.

## Key Features

- **Live Data:** Fetches real-time spot prices from GoldAPI/MetalPriceAPI.
- **Indian Market Logic:** - Converts International Ounce (oz) prices to Indian Tola (**11.66 Grams**).
  - Includes **15% Import Duty** and **3% GST** in the India Market Price.
- **Individual Loaders:** Each metal tile has its own loading state for an emulate purchase flow.
- **Error Handling:** Implemented fallback data to ensure the UI never breaks during API failures.

## Technical Math Applied

1. **Conversion:** `(Global Price / 31.1035) * 11.66`
2. **Tax Layer:** `Converted Price * 1.15 (Duty) * 1.03 (GST)`

## Tech Stack

- React Native (Expo)
- React Navigation (Stack)
- Axios/Fetch for API Integration
