enum EPaymentMethodType {
  CREDIT = 'credit',
  BOLETO = 'boleto',
  PIX = 'pix',
}

export type RfPaymentMethodType = `${EPaymentMethodType}`;
