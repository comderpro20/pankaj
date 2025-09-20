import { Router } from 'express';
import { createCheckoutSession } from '../controllers/payment.controller';
import { protect } from '../middlewares/auth.middleware';

const router = Router();

// A user MUST be logged in to create a payment session.
// The 'protect' middleware runs first to verify the user.
router.post('/create-checkout-session', protect, createCheckoutSession);

export default router;