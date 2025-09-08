import Stripe from 'stripe';

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY !== undefined
    ? process.env.STRIPE_SECRET_KEY
    : (() => {
        throw new Error('Missing STRIPE_SECRET_KEY');
      })(),
  {
    apiVersion: '2023-10-16',
    maxNetworkRetries: 2,
  },
);
