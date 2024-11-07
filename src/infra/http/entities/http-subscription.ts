import type { RfPaymentMethodType } from '@/infra/http/entities/http-payment-methods';

enum SubscriptionStatusEnum {
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  CANCELED = 'canceled',
  EXPIRED = 'expired',
}

export type RfSubscriptionStatus = `${SubscriptionStatusEnum}`;

export interface RfSubscription {
  id: string;
  resource: 'subscription';
  providerId: string | null;
  marketplaceId: string;
  sellerId: string;
  planId: string;
  buyerId: string;
  cardId: string | null;
  description: string | null;
  paymentMethod: RfPaymentMethodType;
  dueDate: string;
  dueSinceDate: string | null;
  expirationDate: string | null;
  amount: number | null;
  currency: string;
  status: RfSubscriptionStatus;
  suspendedAt: string | null;
  internalMetadata: {
    checkoutId?: string;
  } | null;
  metadata: object | null;
  createdAt: string;
  updatedAt: string;
}
