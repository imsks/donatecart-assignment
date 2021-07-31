export interface CampaignData {
  code: string;
  title: string;
  featured: boolean;
  priority: number;
  shortDesc: string | null;
  imageSrc: string;
  created: string;
  endDate: string;
  totalAmount: number;
  procuredAmount: number;
  totalProcured: number;
  backersCount: number;
  categoryId: number;
  ngoCode: string;
  ngoName: string;
  daysLeft: number;
  percentage: number;
}
