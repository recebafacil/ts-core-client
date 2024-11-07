import type { RfPaymentMethodType } from '@/infra/http/entities/http-payment-methods';

enum RfPlanFrequencyEnum {
  DAILY = 'daily',
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
  ANNUALLY = 'annually',
}

export type RfPlanFrequency = `${RfPlanFrequencyEnum}`;

export interface RfPlan {
  id: string;
  resource: 'plan';
  providerId: string | null;
  marketplaceId: string;
  name: string;
  frequency: RfPlanFrequency;
  interval: number;
  paymentMethods: RfPaymentMethodType[];
  amount: number;
  setupAmount: number;
  currency: string;
  description: string | null;
  duration: number;
  metadata: object | null;
  modified: boolean;
  createdAt: string;
  updatedAt: string;
}
