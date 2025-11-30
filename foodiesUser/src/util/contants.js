// Use Vite environment variable for the public Razorpay key.
// Set `VITE_RAZORPAY_KEY` in your deployment environment (Vercel/Vite).
// For production, update to your rzp_live_* key.
export const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY || "rzp_test_RlwFruvz0Wuvuv";