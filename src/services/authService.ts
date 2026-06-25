/**
 * Auth Service — Mock OTP Implementation
 *
 * Provides sendOtp() and verifyOtp() for any identifier (email or mobile).
 * Currently uses mock logic (random OTP stored in sessionStorage).
 *
 * To integrate a real backend:
 *   1. Replace sendOtp() body with a fetch/axios call to your OTP endpoint
 *   2. Replace verifyOtp() body with a fetch/axios call to your verify endpoint
 *   3. The function signatures stay the same — no UI changes needed
 */

const OTP_STORAGE_PREFIX = 'wavygo_otp_';

/**
 * Send OTP to an identifier (email or mobile number).
 * Mock: generates a random 6-digit code, stores in sessionStorage, logs to console.
 *
 * @param identifier - Email address or mobile number
 * @returns Promise resolving to true on success
 */
export async function sendOtp(identifier: string): Promise<boolean> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Generate random 6-digit OTP
  const otp = String(Math.floor(100000 + Math.random() * 900000));

  // Store for verification (replace with backend call later)
  sessionStorage.setItem(`${OTP_STORAGE_PREFIX}${identifier}`, otp);
  sessionStorage.setItem(`${OTP_STORAGE_PREFIX}${identifier}_time`, String(Date.now()));

  // Log to console for testing (remove in production)
  console.log(`[WavyGo Mock OTP] Code for ${identifier}: ${otp}`);

  return true;
}

/**
 * Verify an OTP entered by the user.
 * Mock: compares against the value stored in sessionStorage.
 *
 * @param identifier - Email address or mobile number
 * @param otp - 6-digit OTP entered by the user
 * @returns Promise resolving to true if OTP matches, false otherwise
 */
export async function verifyOtp(identifier: string, otp: string): Promise<boolean> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const storedOtp = sessionStorage.getItem(`${OTP_STORAGE_PREFIX}${identifier}`);
  const storedTime = sessionStorage.getItem(`${OTP_STORAGE_PREFIX}${identifier}_time`);

  if (!storedOtp || !storedTime) {
    return false;
  }

  // Check expiry (5 minutes)
  const elapsed = Date.now() - Number(storedTime);
  if (elapsed > 5 * 60 * 1000) {
    sessionStorage.removeItem(`${OTP_STORAGE_PREFIX}${identifier}`);
    sessionStorage.removeItem(`${OTP_STORAGE_PREFIX}${identifier}_time`);
    return false;
  }

  if (otp !== storedOtp) {
    return false;
  }

  // Clean up on success
  sessionStorage.removeItem(`${OTP_STORAGE_PREFIX}${identifier}`);
  sessionStorage.removeItem(`${OTP_STORAGE_PREFIX}${identifier}_time`);

  return true;
}
