import * as fs from 'fs';
import path from 'path';
import app from './app';
import configEnv from './config';
import { fetchCampaignDataAndSave } from './utils';

const PORT = configEnv.PORT || 8000;

// If campaign data already exists
try {
  if (!fs.existsSync(path.resolve(__dirname, '../assets', 'campaigns.json'))) {
    fetchCampaignDataAndSave();
  }
} catch (error) {
  console.error(error);
}

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
