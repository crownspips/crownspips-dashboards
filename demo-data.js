const CROWNSPIPS_DATA_KEY = "crownspips_demo_data";

function getCrownspipsData() {
  const saved = localStorage.getItem(CROWNSPIPS_DATA_KEY);

  if (saved) {
    return JSON.parse(saved);
  }

  const data = {
    balance: 10000,
    invested: 0,
    profit: 0,
    positions: [],
    history: []
  };

  localStorage.setItem(
    CROWNSPIPS_DATA_KEY
    JSON.stringify(data)
  );

  return data;
}

function saveCrownspipsData(data) {
  localStorage.setItem(
    CROWNSPIPS_DATA_KEY,
    JSON.stringify(data)
  );
}
