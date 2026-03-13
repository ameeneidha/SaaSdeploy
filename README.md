<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/bfe01df4-5a52-4e7e-8924-d38a589f329a

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Update Log

### March 14, 2026

- Hardened core backend security:
  - removed weak JWT default usage from the expected env flow
  - added auth rate limiting
  - tightened workspace authorization on protected routes
  - enforced plan limits on key creation endpoints
  - protected superadmin routes on the server
  - enforced Meta webhook signature verification
- Reworked owner access:
  - `ameeneidha@gmail.com` now behaves as the SaaS owner/superadmin
  - superadmin is redirected into an owner-only admin experience
  - normal subscriber navigation is hidden from the owner account
- Built a stronger superadmin dashboard:
  - overview metrics
  - workspace directory with search
  - users directory with search and pagination
  - workspace detail drawer with members, billing, usage, feature requests, and issue reports
- Improved demo/test data:
  - added seeded superadmin login
  - added seeded `STARTER`, `GROWTH`, and `PRO` demo accounts for package testing
- Improved CRM workflow:
  - added deal value support
  - added inline deal value editing on CRM cards
  - fixed CRM search and filter behavior

### Demo Accounts

- Superadmin: `ameeneidha@gmail.com` / `password123`
- Starter: `starter@wabahub.local` / `password123`
- Growth: `growth@wabahub.local` / `password123`
- Pro: `pro@wabahub.local` / `password123`
