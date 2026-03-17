# Meta App Review Checklist for Tawasel

This checklist is based on the current Tawasel codebase as of March 16, 2026.

## 1. Business approval track

- [ ] Complete Meta business verification in Business Manager with the legal Tawasel entity.
- [ ] Complete domain verification for `tawasel.io`.
- [ ] Make sure the legal business name shown in Meta matches the company identity shown on `tawasel.io`.

## 2. Public website requirements

These items should be publicly reachable on the live site before submission.

- [x] Privacy Policy page exists at `/privacy`.
- [x] Terms of Service page exists at `/terms`.
- [ ] Public data deletion / data access instructions page.
- [ ] Public support contact details on `tawasel.io`.
- [ ] Clear legal business identity on `tawasel.io` home/footer/about pages.
- [ ] Clear explanation of the WhatsApp CRM / inbox / onboarding use case on `tawasel.io`.

## 3. App configuration in Meta

Fill these in inside the Meta App Dashboard:

- [ ] App icon
- [ ] App category
- [ ] App purpose / use case description
- [ ] Privacy Policy URL
- [ ] Terms of Service URL
- [ ] Data deletion instructions URL
- [ ] App domains
- [ ] Website platform URLs
- [ ] Valid OAuth redirect URI for the embedded signup callback
- [ ] Webhook callback URL
- [ ] Verify token

## 4. Production URLs to confirm

These should be live and tested end to end.

- [ ] `https://app.tawasel.io`
- [ ] `https://api.tawasel.io`
- [ ] Meta webhook verification on `/webhook/meta`
- [ ] Meta webhook event handling on `/webhook/meta`
- [ ] Embedded Signup callback on `/api/meta/embedded-signup/callback`
- [ ] Embedded Signup finalize on `/api/meta/embedded-signup/finalize`
- [ ] Stripe webhook on `/api/webhooks/stripe`
- [ ] Resend email delivery for verification and reset flows

## 5. Current Tawasel functionality already present

The current codebase already includes these Meta-relevant pieces:

- [x] WhatsApp Embedded Signup start endpoint
- [x] Embedded Signup callback handler
- [x] Embedded Signup finalization into workspace WhatsApp channels
- [x] Meta webhook verification route
- [x] Meta webhook signature verification
- [x] Incoming WhatsApp message ingestion
- [x] Contact auto-creation from inbound WhatsApp messages
- [x] Conversation auto-creation from inbound WhatsApp messages
- [x] Inbox reply sending back through Meta
- [x] Stripe billing flow
- [x] Resend-based verification and password reset email flow

## 6. Product flow to test before recording review video

Use one clean test workspace and one clean WhatsApp business asset.

- [ ] Sign up from the public app
- [ ] Verify email successfully
- [ ] Enter the app and confirm workspace access
- [ ] Subscribe or use an active paid workspace
- [ ] Open `Channels`
- [ ] Click `Connect WhatsApp`
- [ ] Complete Meta popup flow successfully
- [ ] Confirm the connected number appears as `CONNECTED`
- [ ] Send a test inbound WhatsApp message to the connected number
- [ ] Confirm a contact is created automatically
- [ ] Confirm a conversation appears in `Inbox`
- [ ] Reply from `Inbox`
- [ ] Confirm the reply is delivered to WhatsApp
- [ ] Open `Contacts` or `CRM` and confirm the lead exists there

## 7. Permissions to request

Request only the permissions used by the current onboarding flow.

- [ ] `business_management`
- [ ] `whatsapp_business_management`
- [ ] `whatsapp_business_messaging`

Notes:

- The current embedded signup start route explicitly requests those three scopes.
- Do not request extra permissions unless the live flow truly depends on them.

## 8. Evidence package to prepare for Meta reviewer

- [ ] Reviewer test login email
- [ ] Reviewer test password
- [ ] Exact starting URL
- [ ] Exact app navigation steps
- [ ] WhatsApp number or business asset prepared for testing
- [ ] Review video showing the full flow without cuts where possible
- [ ] Short written explanation of expected success state after each step
- [ ] Note that Tawasel is a WhatsApp-first shared inbox + CRM product for businesses

## 9. What the review video should prove

The video should clearly prove:

- [ ] A real business user can log in to Tawasel
- [ ] The user can connect their own WhatsApp business asset through Meta Embedded Signup
- [ ] Tawasel stores that connection inside the correct workspace
- [ ] Incoming WhatsApp messages create or update contacts and conversations
- [ ] Team members can reply from the shared inbox
- [ ] The app is used for business messaging operations, not personal messaging

## 10. Likely blockers still visible from the codebase

These are the biggest review-readiness gaps still apparent from the repo:

- Missing public data deletion / data access page
- Support contact details are not obviously public on the app landing pages
- Legal business identity may need to be made more explicit on `tawasel.io`
- Reviewer credentials and reviewer-safe test assets still need to be prepared

## 11. Recommended submission order

1. Finish public website trust pages and support identity.
2. Verify business and domain in Meta.
3. Double-check all Meta app settings and redirect/webhook URLs.
4. Run one full live onboarding test on production.
5. Record the review video.
6. Submit only the exact WhatsApp/business permissions used by Tawasel.
