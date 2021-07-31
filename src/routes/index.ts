import { Router } from 'express';
import {
  getAllCampaigns,
  getActiveCampaignsCreatedLastMonth,
  getClosedCampaigns,
} from '../controllers';

const indexRouter = Router();
indexRouter.route('/').get(getAllCampaigns);
indexRouter.route('/active').get(getActiveCampaignsCreatedLastMonth);
indexRouter.route('/closed').get(getClosedCampaigns);

export default indexRouter;
