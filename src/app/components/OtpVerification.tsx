import React, { useState, useEffect, useRef, useCallback } from 'react';
import { sendOtp, verifyOtp } from '../../services/authService';
import '../../styles/OtpVerification.css';

const RESEND_COOLDOWN = 30; // seconds

// ── Props ────────────────────────────────────────────────────
export interface OtpVerificationProps {
  /** The identifier to verify (email or mobile number) */
  identifier: string;
  /** Called after the OTP is successfully verified */
  onVerified: () => void;
  /** Optional: called when user clicks "Change number" / back link */
  onBack?: () => void;
  /** Optional: label shown above the identifier (default: "Enter the 6-digit code sent to") */
  subtitle?: string;
}

// ── Component ────────────────────────────────────────────────
const OtpVerification: React.FC<OtpVerificationProps> = ({
  identifier,
  onVerified,
  onBack,
  subtitle = 'Enter the 6-digit code sent to',
}) => {
  const [digits, setDigits] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorFlash, setErrorFlash] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const otpString = digits.join('');
  const isBusy = isSending || isVerifying;

  // ── Cooldown timer ──
  const startCooldown = useCallback(() => {
    setCooldown(RESEND_COOLDOWN);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // ── Send OTP on mount ──
  useEffect(() => {
    (async () => {
      setIsSending(true);
      await sendOtp(identifier);
      setIsSending(false);
      startCooldown();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identifier]);

  // ── Clear red flash after animation ──
  useEffect(() => {
    if (!errorFlash) return;
    const timeout = setTimeout(() => setErrorFlash(false), 600);
    return () => clearTimeout(timeout);
  }, [errorFlash]);

  // ── Input handlers ──
  const focusBox = (idx: number) => {
    inputsRef.current[idx]?.focus();
  };

  const clearAndRefocus = () => {
    setDigits(Array(6).fill(''));
    setTimeout(() => focusBox(0), 50);
  };

  const handleChange = (idx: number, char: string) => {
    if (!/^\d?$/.test(char)) return;
    const next = [...digits];
    next[idx] = char;
    setDigits(next);
    setError(null);
    if (char && idx < 5) {
      focusBox(idx + 1);
    }
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[idx] && idx > 0) {
      focusBox(idx - 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;
    const next = Array(6).fill('');
    pasted.split('').forEach((ch, i) => { next[i] = ch; });
    setDigits(next);
    setError(null);
    focusBox(Math.min(pasted.length, 5));
  };

  // ── Verify ──
  const handleVerify = async () => {
    if (otpString.length !== 6) {
      setError('Please enter all 6 digits.');
      return;
    }

    setIsVerifying(true);
    setError(null);

    const success = await verifyOtp(identifier, otpString);

    if (success) {
      setVerified(true);
      // Brief delay to show success state before calling parent
      setTimeout(() => onVerified(), 800);
    } else {
      setError('Incorrect code, please try again.');
      setErrorFlash(true);
      clearAndRefocus();
    }

    setIsVerifying(false);
  };

  // ── Resend ──
  const handleResend = async () => {
    if (cooldown > 0) return;
    setIsSending(true);
    setError(null);
    setVerified(false);
    clearAndRefocus();
    await sendOtp(identifier);
    setIsSending(false);
    startCooldown();
  };

  // ── Box CSS class ──
  const boxClass = (idx: number) => {
    let cls = 'otp-verification__box';
    if (verified) cls += ' otp-verification__box--success';
    else if (errorFlash) cls += ' otp-verification__box--error';
    return cls;
  };

  return (
    <div className="otp-verification">
      <h2 className="otp-verification__title">Verify OTP</h2>
      <p className="otp-verification__subtitle">{subtitle}</p>
      <span className="otp-verification__identifier">{identifier}</span>

      {/* ── Success message ── */}
      {verified && (
        <div className="otp-verification__success">
          <span className="otp-verification__checkmark">✓</span>
          Verified successfully
        </div>
      )}

      {/* ── 6 digit boxes ── */}
      <div className="otp-verification__boxes">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => { inputsRef.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={d}
            disabled={isBusy || verified}
            className={boxClass(i)}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={i === 0 ? handlePaste : undefined}
            autoFocus={i === 0}
          />
        ))}
      </div>

      {/* ── Error message ── */}
      {error && <p className="otp-verification__error">{error}</p>}

      {/* ── Verify button ── */}
      {!verified && (
        <button
          type="button"
          className="otp-verification__btn"
          onClick={handleVerify}
          disabled={isBusy || otpString.length !== 6}
        >
          {isVerifying ? 'Verifying...' : 'Verify'}
        </button>
      )}

      {/* ── Resend row ── */}
      {!verified && (
        <div className="otp-verification__resend">
          {cooldown > 0 ? (
            <span className="otp-verification__resend-text">
              Resend code in <strong>{cooldown}s</strong>
            </span>
          ) : (
            <button
              type="button"
              className="otp-verification__resend-link"
              onClick={handleResend}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Resend code'}
            </button>
          )}
        </div>
      )}

      {/* ── Back link ── */}
      {onBack && !verified && (
        <button
          type="button"
          className="otp-verification__back"
          onClick={onBack}
        >
          ← Change number
        </button>
      )}
    </div>
  );
};

export default OtpVerification;
