import { Request, Response } from 'express';
import moment from 'moment';
import { CampaignData } from '../interfaces';
import Campaigns from '../assets/campaigns.json';

// 1. Get all campaigns with descending order of total amount
export const getAllCampaigns = async (
  request: Request,
  response: Response,
): Promise<void> => {
  const campaignsData = Campaigns.result as Array<CampaignData>;

  campaignsData.sort((prev, next) => next.totalAmount - prev.totalAmount);

  response.status(200).json({
    status: true,
    payload: campaignsData,
  });
};

// 2. Get all campaigns active since last month
export const getActiveCampaignsCreatedLastMonth = async (
  request: Request,
  response: Response,
): Promise<void> => {
  const campaignsData = Campaigns.result as Array<CampaignData>;

  // Filter all active campaigns
  const allActiveCampagns = campaignsData.filter(campaignData => {
    const { endDate } = campaignData;

    const endDateMoment = moment(endDate);
    const todayMoment = moment();

    return endDateMoment.isAfter(todayMoment);
  });

  // Filter all active campaigns created last month
  const activeCampaignsCreatedLastMonth = allActiveCampagns.filter(
    campaignData => {
      const { created } = campaignData;

      const createdDateMoment = moment(created);
      const todayMoment = moment();

      return createdDateMoment.isAfter(todayMoment.subtract(1, 'month'));
    },
  );

  response.status(200).json({
    status: true,
    payload: activeCampaignsCreatedLastMonth,
  });
};

// 3. Get all closed
export const getClosedCampaigns = async (
  request: Request,
  response: Response,
): Promise<void> => {
  const campaignsData = Campaigns.result as Array<CampaignData>;

  // Filter all closed campaigns
  const allClosedCampagns = campaignsData.filter(campaignData => {
    const { endDate } = campaignData;

    const endDateMoment = moment(endDate);
    const todayMoment = moment();

    return endDateMoment.isBefore(todayMoment);
  });

  response.status(200).json({
    status: true,
    payload: allClosedCampagns,
  });
};
