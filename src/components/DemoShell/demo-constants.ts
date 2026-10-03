/** Sample contact details used across all sales demos. Clearly placeholders. */

export const DEMO_PHONE_DISPLAY = "+91 90000 00000";
export const DEMO_PHONE_LINK = "https://wa.me/919000000000";

export function demoWhatsAppLink(message: string) {
  return `https://wa.me/919000000000?text=${encodeURIComponent(message)}`;
}
