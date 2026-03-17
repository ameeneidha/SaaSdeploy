# Meta Reviewer Script for Tawasel

Use this as the written reviewer guide and as the script for the Meta review video.

## Product summary

Tawasel is a business WhatsApp CRM platform. Businesses use it to connect their own WhatsApp Business assets, receive customer conversations in a shared inbox, reply as a team, and manage those leads inside CRM workflows.

## Reviewer access

Fill these before submission:

- App URL: `https://app.tawasel.io`
- Reviewer login email: `REPLACE_ME`
- Reviewer login password: `REPLACE_ME`
- Optional test workspace name: `REPLACE_ME`
- Test WhatsApp number / asset notes: `REPLACE_ME`
- Support contact: `REPLACE_ME`

## Reviewer steps

### Step 1. Open the app

Go to `https://app.tawasel.io`.

Expected result:

- The Tawasel login or sign-up entry screen loads successfully over HTTPS.

### Step 2. Sign in

Sign in using the reviewer credentials provided above.

Expected result:

- The reviewer enters the Tawasel application successfully.
- The main workspace dashboard loads.

### Step 3. Open the WhatsApp channel setup

In the app navigation, open `Channels`.

Expected result:

- The page title shows `WhatsApp Channels`.
- The page shows the `Connect WhatsApp` action.

### Step 4. Start Embedded Signup

Click `Connect WhatsApp`.

Expected result:

- A Meta popup opens.
- Tawasel starts the WhatsApp Embedded Signup flow for the current workspace.

### Step 5. Complete Meta onboarding

Inside the popup, continue through the Meta Embedded Signup flow and connect the test business asset and WhatsApp number.

Expected result:

- The popup completes successfully.
- Tawasel receives the embedded signup callback.
- The connected number is saved to the same workspace.

### Step 6. Confirm the number was connected

Return to the `Channels` page.

Expected result:

- The connected WhatsApp number appears in the list.
- Its status shows `CONNECTED`.
- Its connection source shows `Embedded Signup`.

### Step 7. Send a real inbound WhatsApp message

From the prepared test phone, send a WhatsApp message to the connected business number.

Expected result:

- Tawasel receives the Meta webhook event.
- A contact is created automatically if the sender does not already exist.
- A WhatsApp conversation is created automatically if one does not already exist.

### Step 8. Verify the message in the shared inbox

Open `Inbox`.

Expected result:

- The new WhatsApp conversation is visible.
- The customer's incoming message appears in the thread.

### Step 9. Reply from Tawasel

Send a text reply from inside the conversation in `Inbox`.

Expected result:

- Tawasel sends the reply through the connected WhatsApp business number.
- The customer receives the reply on WhatsApp.

### Step 10. Confirm CRM/contact creation

Open `Contacts` or `CRM`.

Expected result:

- The customer exists as a contact in the workspace.
- The lead is now available for CRM follow-up inside Tawasel.

## Suggested review video outline

Record in this order:

1. Show the Tawasel landing/login page on the live domain.
2. Sign in with the reviewer account.
3. Open `Channels`.
4. Click `Connect WhatsApp`.
5. Show the Meta popup and complete Embedded Signup.
6. Return to Tawasel and show the new connected number with `CONNECTED` status.
7. Send a message from the test phone to the connected number.
8. Open `Inbox` and show the inbound conversation.
9. Reply from `Inbox`.
10. Show the reply received on the test phone.
11. Open `Contacts` or `CRM` and show the created lead/contact.

## Important notes for the reviewer description

Include these points in the submission text:

- Tawasel is for businesses connecting their own WhatsApp Business assets.
- The app uses Meta Embedded Signup to onboard those assets.
- The connected number is used to receive and send customer messages inside a shared team inbox.
- Inbound WhatsApp messages are used to create or update CRM records for business follow-up.
- The app does not require personal consumer messaging use.

## Internal prep notes before submission

Replace every `REPLACE_ME` value above.

Before recording, confirm:

- the reviewer account has access to an active workspace
- billing does not block the channel connection flow
- the test asset is clean and ready
- webhook delivery is working on production
- the public Privacy, Terms, and data deletion URLs are all live
