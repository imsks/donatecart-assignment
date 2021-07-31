import axios from 'axios';
import * as fs from 'fs';
import path from 'path';
import { CampaignData } from '../interfaces';

export const fetchCampaignDataAndSave = async (): Promise<void> => {
  const campaignResponse = await axios.get(
    'https://testapi.donatekart.com/api/campaign',
  );

  const campaignData = campaignResponse.data as Array<CampaignData>;

  // Write teh JSON with cleaned up data
  fs.writeFile(
    path.resolve(__dirname, '../assets', 'campaigns.json'),
    JSON.stringify({ result: campaignData }),
    error => {
      if (error) throw error;
    },
  );
};
