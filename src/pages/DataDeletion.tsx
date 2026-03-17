import PublicPageLayout from '../components/PublicPageLayout';

export default function DataDeletion() {
  return (
    <PublicPageLayout
      eyebrow="Data Access"
      title="Data Deletion Instructions"
      description="This page explains how Tawasel workspace owners can request access to, correction of, or deletion of account and workspace data connected to the platform."
      sections={[
        {
          title: 'Who can request deletion',
          paragraphs: [
            'Data deletion and access requests must be submitted by the workspace owner, an authorized business administrator, or a verified representative of the business account that uses Tawasel.',
            'To protect customer and workspace data, we may ask for identity and business authorization details before processing any deletion or access request.',
          ],
          bullets: [
            'Workspace owners and admins may request deletion of their workspace data',
            'End users may request deletion of their own account data',
            'Authorized business representatives may request data access or export support',
          ],
        },
        {
          title: 'How to request deletion',
          paragraphs: [
            'Send your request from the email address associated with your Tawasel account or business administrator profile to info@quantops.ae with the subject line "Tawasel Data Deletion Request".',
            'Include your workspace name, account email, business name, and a short description of the data you want deleted or exported. If the request relates to a WhatsApp business asset, include the connected business phone number or WABA details when possible.',
          ],
          bullets: [
            'Email: info@quantops.ae',
            'Subject: Tawasel Data Deletion Request',
            'Include workspace name, account email, and business identity details',
          ],
        },
        {
          title: 'What happens next',
          paragraphs: [
            'After verification, we will review the request and confirm the data categories affected, any legal or billing records that must be retained, and the expected completion timeline.',
            'Where deletion is approved, Tawasel will remove or anonymize applicable account and workspace records from active systems. Some limited records may be retained for fraud prevention, billing, audit, or legal compliance where required.',
          ],
          bullets: [
            'Verification is required before deletion or export',
            'Approved deletions are processed against active platform records',
            'Some records may be retained where legally required',
          ],
        },
      ]}
      ctaLabel="Contact support"
      ctaHref="/login"
    />
  );
}
