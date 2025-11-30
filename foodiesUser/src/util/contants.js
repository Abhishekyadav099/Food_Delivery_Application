// Use Vite environment variable for the public Razorpay key.
// Set `VITE_RAZORPAY_KEY` in your deployment environment (Vercel/Vite).
// Example: VITE_RAZORPAY_KEY=rzp_test_XXXXXXXXXXXXXXXX
export const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY || "razor_pay_key";