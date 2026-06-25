/**
 * External app store links.
 * Swap PLAY_STORE_URL once WavyGo has a direct package-ID listing.
 */
export const PLAY_STORE_URL =
  "https://play.google.com/store/search?q=wavygo&c=apps&hl=en_IN";

/** WavyGo Partner (dealer) app — direct Play Store listing. */
export const DEALER_APP_URL =
  "https://play.google.com/store/apps/details?id=com.wavygo.partner&hl=en_IN";

/** Helper: opens a URL in a new tab without leaking the opener reference. */
export function openInNewTab(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}
