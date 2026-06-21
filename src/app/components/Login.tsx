import React, { useState } from 'react';
import { Facebook, Linkedin } from 'lucide-react';
import OtpVerification from './OtpVerification';
import '../../styles/Login.css';

const GoogleIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12s3.36-7.27 7.19-7.27c3.47 0 5.49 2.07 5.49 2.07L19.5 4.7S16.87 2 12.19 2C6.42 2 2.03 6.8 2.03 12s4.39 10 10.16 10c5.5 0 9.55-3.62 9.55-9.94 0-1.31-.16-1.96-.39-2.96z" />
  </svg>
);

type InputMode = 'email' | 'mobile';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^\d{10}$/;

const validateIdentifier = (value: string, mode: InputMode): string | null => {
  if (!value.trim()) return null;
  if (mode === 'email') {
    return EMAIL_REGEX.test(value) ? null : 'Please enter a valid email address';
  }
  return MOBILE_REGEX.test(value) ? null : 'Please enter a valid 10-digit mobile number';
};

const AuthPage: React.FC = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  // Sign Up state
  const [signUpName, setSignUpName] = useState('');
  const [signUpIdentifier, setSignUpIdentifier] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpInputMode, setSignUpInputMode] = useState<InputMode>('email');
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const [signUpOtpMobile, setSignUpOtpMobile] = useState<string | null>(null);

  // Sign In state
  const [signInIdentifier, setSignInIdentifier] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInInputMode, setSignInInputMode] = useState<InputMode>('email');
  const [signInError, setSignInError] = useState<string | null>(null);
  const [signInOtpMobile, setSignInOtpMobile] = useState<string | null>(null);

  const handleSignUpClick = () => setIsSignUpActive(true);
  const handleSignInClick = () => setIsSignUpActive(false);

  const handleSignUpModeSwitch = (mode: InputMode) => {
    setSignUpInputMode(mode);
    setSignUpIdentifier('');
    setSignUpError(null);
    setSignUpOtpMobile(null);
  };

  const handleSignInModeSwitch = (mode: InputMode) => {
    setSignInInputMode(mode);
    setSignInIdentifier('');
    setSignInError(null);
    setSignInOtpMobile(null);
  };

  // ── Sign Up Submit ──
  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateIdentifier(signUpIdentifier, signUpInputMode);
    if (error) {
      setSignUpError(error);
      return;
    }
    setSignUpError(null);

    if (signUpInputMode === 'mobile') {
      setSignUpOtpMobile(signUpIdentifier);
      return;
    }

    // Email flow — same as before
    localStorage.setItem('name', signUpName);
    localStorage.setItem('email', signUpIdentifier);
    alert('Account Created Successfully');
    setIsSignUpActive(false);
  };

  const handleSignUpOtpVerified = () => {
    localStorage.setItem('name', signUpName);
    localStorage.setItem('mobile', signUpOtpMobile!);
    alert('Account Created Successfully');
    setSignUpOtpMobile(null);
    setIsSignUpActive(false);
  };

  // ── Sign In Submit ──
  const handleSignInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateIdentifier(signInIdentifier, signInInputMode);
    if (error) {
      setSignInError(error);
      return;
    }
    setSignInError(null);

    if (signInInputMode === 'mobile') {
      setSignInOtpMobile(signInIdentifier);
      return;
    }

    // Email flow — same as before
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', signInIdentifier);
    // Replace with your WavyGo route (e.g. navigate('/dashboard') if using react-router)
    window.location.href = 'http://localhost:5173/';
  };

  const handleSignInOtpVerified = () => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userMobile', signInOtpMobile!);
    window.location.href = 'http://localhost:5173/';
  };

  // ── Render ──
  return (
    <div className="auth-page">
      <div
        className={`container${isSignUpActive ? ' right-panel-active' : ''}`}
        id="container"
      >
        {/* ━━━ SIGN UP PANEL ━━━ */}
        <div className="form-container sign-up-container">
          {signUpOtpMobile ? (
            <div className="otp-wrapper">
              <OtpVerification
                identifier={signUpOtpMobile}
                onVerified={handleSignUpOtpVerified}
                onBack={() => setSignUpOtpMobile(null)}
              />
            </div>
          ) : (
            <form onSubmit={handleSignUpSubmit}>
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" target="_blank" className="social">
                  <Facebook size={16} />
                </a>
                <a href="#" target="_blank" className="social">
                  <GoogleIcon />
                </a>
                <a href="#" target="_blank" className="social">
                  <Linkedin size={16} />
                </a>
              </div>
              <span>Or use your email or mobile number</span>
              <div className="auth-toggle">
                <button
                  type="button"
                  className={`auth-toggle-btn${signUpInputMode === 'email' ? ' active' : ''}`}
                  onClick={() => handleSignUpModeSwitch('email')}
                >
                  Email
                </button>
                <button
                  type="button"
                  className={`auth-toggle-btn${signUpInputMode === 'mobile' ? ' active' : ''}`}
                  onClick={() => handleSignUpModeSwitch('mobile')}
                >
                  Mobile
                </button>
              </div>
              <input
                type="text"
                placeholder="Name"
                required
                value={signUpName}
                onChange={(e) => setSignUpName(e.target.value)}
              />
              <input
                type={signUpInputMode === 'email' ? 'email' : 'tel'}
                placeholder={signUpInputMode === 'email' ? 'Email' : 'Mobile Number (10 digits)'}
                required
                value={signUpIdentifier}
                onChange={(e) => {
                  setSignUpIdentifier(e.target.value);
                  if (signUpError) setSignUpError(null);
                }}
                inputMode={signUpInputMode === 'mobile' ? 'numeric' : undefined}
                pattern={signUpInputMode === 'mobile' ? '\\d{10}' : undefined}
                maxLength={signUpInputMode === 'mobile' ? 10 : undefined}
              />
              {signUpError && <span className="auth-error">{signUpError}</span>}
              {signUpInputMode === 'email' && (
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                />
              )}
              <button type="submit">
                {signUpInputMode === 'mobile' ? 'Send OTP' : 'Sign Up'}
              </button>
            </form>
          )}
        </div>

        {/* ━━━ SIGN IN PANEL ━━━ */}
        <div className="form-container sign-in-container">
          {signInOtpMobile ? (
            <div className="otp-wrapper">
              <OtpVerification
                identifier={signInOtpMobile}
                onVerified={handleSignInOtpVerified}
                onBack={() => setSignInOtpMobile(null)}
              />
            </div>
          ) : (
            <form onSubmit={handleSignInSubmit}>
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <Facebook size={16} />
                </a>
                <a href="#" className="social">
                  <GoogleIcon />
                </a>
                <a href="#" className="social">
                  <Linkedin size={16} />
                </a>
              </div>
              <span>Or use your account</span>
              <div className="auth-toggle">
                <button
                  type="button"
                  className={`auth-toggle-btn${signInInputMode === 'email' ? ' active' : ''}`}
                  onClick={() => handleSignInModeSwitch('email')}
                >
                  Email
                </button>
                <button
                  type="button"
                  className={`auth-toggle-btn${signInInputMode === 'mobile' ? ' active' : ''}`}
                  onClick={() => handleSignInModeSwitch('mobile')}
                >
                  Mobile
                </button>
              </div>
              <input
                type={signInInputMode === 'email' ? 'email' : 'tel'}
                placeholder={signInInputMode === 'email' ? 'Email' : 'Mobile Number (10 digits)'}
                required
                value={signInIdentifier}
                onChange={(e) => {
                  setSignInIdentifier(e.target.value);
                  if (signInError) setSignInError(null);
                }}
                inputMode={signInInputMode === 'mobile' ? 'numeric' : undefined}
                pattern={signInInputMode === 'mobile' ? '\\d{10}' : undefined}
                maxLength={signInInputMode === 'mobile' ? 10 : undefined}
              />
              {signInError && <span className="auth-error">{signInError}</span>}
              {signInInputMode === 'email' && (
                <>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                  />
                  <a href="#">Forgot your password?</a>
                </>
              )}
              <button type="submit">
                {signInInputMode === 'mobile' ? 'Send OTP' : 'Sign In'}
              </button>
            </form>
          )}
        </div>

        {/* ━━━ OVERLAY ━━━ */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;