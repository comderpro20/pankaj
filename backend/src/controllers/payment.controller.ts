// src/controllers/payment.controller.ts

import { Response } from 'express';
import Stripe from 'stripe'; // The import is still here
import { Cart } from '../models/cart.model';
import { AuthRequest } from '../middlewares/auth.middleware';

// We do NOT initialize Stripe here anymore.

export const createCheckoutSession = async (req: AuthRequest, res: Response) => {
  // THE FIX: We now initialize Stripe INSIDE the function.
  // By the time this function is called, we are 100% sure that dotenv.config() has run.
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const userId = req.user._id;

  try {
    const cart = await Cart.findOne({ userId }).populate({
      path: 'items.videoId',
      select: 'title monetization'
    });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Your cart is empty.' });
    }

    const line_items = cart.items.map((item: any) => {
      if (!item.videoId) return null;
      return {
        price_data: {
          currency: 'inr',
          product_data: { name: `${item.videoId.title} (${item.purchaseType})` },
          unit_amount: item.price * 100,
        },
        quantity: 1,
      };
    }).filter(item => item !== null);

    if (line_items.length === 0) {
        return res.status(400).json({ message: 'No valid items in the cart to checkout.' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/payment/cancel`,
      metadata: { cartId: cart._id.toString() }
    });

    res.status(200).json({ url: session.url });

  } catch (error) {
    console.error("Stripe session creation failed:", error);
    res.status(500).json({ message: 'Failed to create checkout session.' });
  }
};