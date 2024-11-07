enum RfEventTypeEnum {
  ALL = 'all',

  // Bank Account
  BANK_ACCOUNT_ASSOCIATED = 'bank_account.associated',
  BANK_ACCOUNT_DELETED = 'bank_account.deleted',

  // Buyer
  BUYER_TRANSACTION_CANCELED = 'buyer.transaction.canceled',
  BUYER_TRANSACTION_CHARGED_BACK = 'buyer.transaction.charged_back',
  BUYER_TRANSACTION_DISPUTED = 'buyer.transaction.disputed',
  BUYER_TRANSACTION_FAILED = 'buyer.transaction.failed',
  BUYER_TRANSACTION_PRE_AUTHORIZED = 'buyer.transaction.pre_authorized',
  BUYER_TRANSACTION_REVERSED = 'buyer.transaction.reversed',
  BUYER_TRANSACTION_SUCCEEDED = 'buyer.transaction.succeeded',
  BUYER_TRANSACTION_UPDATED = 'buyer.transaction.updated',
  BUYER_CARD_ASSOCIATED = 'buyer.card.associated',

  // Document
  DOCUMENT_CREATED = 'document.created',
  DOCUMENT_UPDATED = 'document.updated',

  // Invoice
  INVOICE_CREATED = 'invoice.created',
  INVOICE_CANCELED = 'invoice.canceled',
  INVOICE_OVERDUE = 'invoice.overdue',
  INVOICE_PAID = 'invoice.paid',
  INVOICE_REFUNDED = 'invoice.refunded',

  // Plan
  PLAN_CREATED = 'plan.created',
  PLAN_DELETED = 'plan.deleted',
  PLAN_UPDATED = 'plan.updated',

  // Product
  PRODUCT_REDEEMED = 'product.redeemed',

  // Receivable
  RECEIVABLE_CANCELED = 'receivable.canceled',
  RECEIVABLE_CREATED = 'receivable.created',
  RECEIVABLE_DELETED = 'receivable.deleted',
  RECEIVABLE_PAID = 'receivable.paid',
  RECEIVABLE_REFUNDED = 'receivable.refunded',
  RECEIVABLE_SCHEDULED = 'receivable.scheduled',

  // Seller
  SELLER_ACTIVED = 'seller.actived',
  SELLER_CREATED = 'seller.created',
  SELLER_DELETED = 'seller.deleted',
  SELLER_DENIED = 'seller.denied',
  SELLER_ENABLED = 'seller.enabled',
  SELLER_UPDATED = 'seller.updated',

  // Subscription
  SUBSCRIPTION_ACTIVE = 'subscription.active',
  SUBSCRIPTION_CANCELED = 'subscription.canceled',
  SUBSCRIPTION_CREATED = 'subscription.created',
  SUBSCRIPTION_DELETED = 'subscription.deleted',
  SUBSCRIPTION_EXPIRED = 'subscription.expired',
  SUBSCRIPTION_OVERDUE = 'subscription.overdue',
  SUBSCRIPTION_PAID = 'subscription.paid',
  SUBSCRIPTION_SUSPENDED = 'subscription.suspended',
  SUBSCRIPTION_UPDATED = 'subscription.updated',

  // Transaction
  TRANSACTION_CANCELED = 'transaction.canceled',
  TRANSACTION_CAPTURE_FAILED = 'transaction.capture.failed',
  TRANSACTION_CAPTURE_SUCCEEDED = 'transaction.capture.succeeded',
  TRANSACTION_CHARGED_BACK = 'transaction.charged_back',
  TRANSACTION_COMMISSION_SUCCEEDED = 'transaction.commission.succeeded',
  TRANSACTION_CREATED = 'transaction.created',
  TRANSACTION_DISPUTE_SUCCEEDED = 'transaction.dispute.succeeded',
  TRANSACTION_DISPUTED = 'transaction.disputed',
  TRANSACTION_FAILED = 'transaction.failed',
  TRANSACTION_PRE_AUTHORIZATION_SUCCEEDED = 'transaction.pre_authorization.succeeded',
  TRANSACTION_PRE_AUTHORIZED = 'transaction.pre_authorized',
  TRANSACTION_REVERSED = 'transaction.reversed',
  TRANSACTION_SUCCEEDED = 'transaction.succeeded',
  TRANSACTION_UPDATED = 'transaction.updated',
  TRANSACTION_VOID_FAILED = 'transaction.void.failed',
  TRANSACTION_VOID_SUCCEEDED = 'transaction.void.succeeded',

  // Transfer
  TRANSFER_CANCELED = 'transfer.canceled',
  TRANSFER_CONFIRMED = 'transfer.confirmed',
  TRANSFER_CREATED = 'transfer.created',
  TRANSFER_FAILED = 'transfer.failed',
  TRANSFER_SUCCEEDED = 'transfer.succeeded',

  // Tax invoices
  TAX_INVOICE_CREATED = 'tax-invoice.created',
  TAX_INVOICE_SUCCEEDED = 'tax-invoice.succeeded',
  TAX_INVOICE_CANCELED = 'tax-invoice.canceled',
  TAX_INVOICE_FAILED = 'tax-invoice.failed',

  // Tax invoice configs
  TAX_INVOICE_CONFIG_CREATED = 'tax-invoice-config.created',
  TAX_INVOICE_CONFIG_UPDATED = 'tax-invoice-config.updated',
}

export type RfEventType = `${RfEventTypeEnum}`;

export interface RfEvent {
  id: string;
  resource: 'event';
  marketplaceId: string;
  type: RfEventType;
  payload: object;
  name: string | null;
  createdAt: string;
  updatedAt: string;
}
