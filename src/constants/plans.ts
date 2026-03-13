export type PlanType = 'STARTER' | 'GROWTH' | 'PRO';
export type WorkspacePlan = PlanType | 'NONE';
export type BillingCycle = 'monthly' | 'annual';

export type ComparisonValue = boolean | number | string;

export interface PlanConfig {
  name: string;
  shortLabel: string;
  audience: string;
  description: string;
  price: number;
  annualPrice: number;
  annualBilledPrice: number;
  stripePriceId: string;
  annualStripePriceId?: string | null;
  whatsappLimit: number;
  instagramLimit: number;
  chatbotLimit: number;
  userLimit: number;
  contactsLimit: number;
  broadcastLimit: number;
  automationLimit: number;
  historyMonths: number;
  pipelineLimit: number;
  pipelineStageLimit: number;
  customFieldLimit: number;
  fileStorageGb: number;
  supportLabel: string;
  analyticsLabel: string;
  highlight?: boolean;
  cardHighlights: string[];
  billingHighlights: string[];
  valueProps: string[];
  comparison: {
    teamRoles: ComparisonValue;
    autoAssignment: ComparisonValue;
    agentWorkload: ComparisonValue;
    leadScoring: ComparisonValue;
    dealValueTracking: ComparisonValue;
    broadcastScheduling: ComparisonValue;
    quickReplyTemplates: ComparisonValue;
    multiLanguageAi: ComparisonValue;
    revenueReports: ComparisonValue;
    customDateRanges: ComparisonValue;
    exportReports: ComparisonValue;
    contactImportExport: ComparisonValue;
    apiAccess: ComparisonValue;
    webhooks: ComparisonValue;
    whiteLabel: ComparisonValue;
  };
}

export interface EnterprisePlan {
  name: string;
  shortLabel: string;
  audience: string;
  description: string;
  ctaLabel: string;
  cardHighlights: string[];
}

export interface ComparisonGroup {
  title: string;
  rows: Array<{
    label: string;
    values: Record<PlanType | 'ENTERPRISE', ComparisonValue>;
  }>;
}

export const PLAN_ORDER: PlanType[] = ['STARTER', 'GROWTH', 'PRO'];

export const PLANS: Record<PlanType, PlanConfig> = {
  STARTER: {
    name: 'Starter',
    shortLabel: 'For solo operators',
    audience: 'Ideal for solo founders, freelancers, and small shops that need to look professional on WhatsApp fast.',
    description: 'Professionalize your customer messaging, stop missing leads, and keep every inquiry in one place.',
    price: 99,
    annualPrice: 79,
    annualBilledPrice: 948,
    stripePriceId: 'price_1T9Wo7I1cBVPBGguaxTuXskN',
    annualStripePriceId: null,
    whatsappLimit: 1,
    instagramLimit: 1,
    chatbotLimit: 1,
    userLimit: 1,
    contactsLimit: 1000,
    broadcastLimit: 500,
    automationLimit: 3,
    historyMonths: 6,
    pipelineLimit: 1,
    pipelineStageLimit: 5,
    customFieldLimit: 0,
    fileStorageGb: 1,
    supportLabel: 'Email support (48-hour response)',
    analyticsLabel: 'Basic dashboard',
    cardHighlights: [
      '1 WhatsApp number and 1 Instagram inbox',
      'Up to 1,000 contacts in your CRM',
      '500 broadcast messages per month',
      '1 AI assistant for after-hours replies',
      'Basic sales pipeline and performance dashboard',
      '6 months of conversation history',
    ],
    billingHighlights: [
      '1 user',
      '1 WhatsApp number + 1 Instagram account',
      '1,000 contacts',
      '500 broadcasts per month',
      '3 automations',
      'Basic analytics and 6-month history',
    ],
    valueProps: [
      'Shared inbox for WhatsApp and Instagram',
      'Basic CRM pipeline to track deals',
      'After-hours AI auto-replies',
      'Essential visibility on leads and response time',
    ],
    comparison: {
      teamRoles: false,
      autoAssignment: false,
      agentWorkload: false,
      leadScoring: false,
      dealValueTracking: false,
      broadcastScheduling: false,
      quickReplyTemplates: 10,
      multiLanguageAi: false,
      revenueReports: false,
      customDateRanges: false,
      exportReports: false,
      contactImportExport: false,
      apiAccess: false,
      webhooks: false,
      whiteLabel: false,
    },
  },
  GROWTH: {
    name: 'Growth',
    shortLabel: 'For small teams ready to scale',
    audience: 'Best for clinics, schools, salons, agencies, and sales teams that need collaboration and automation.',
    description: 'Give your whole team one inbox, automate follow-ups, and track revenue with a stronger CRM workflow.',
    price: 279,
    annualPrice: 219,
    annualBilledPrice: 2628,
    stripePriceId: 'price_1T9WoUI1cBVPBGgu1kSpUzUa',
    annualStripePriceId: null,
    whatsappLimit: 2,
    instagramLimit: 1,
    chatbotLimit: 3,
    userLimit: 5,
    contactsLimit: 5000,
    broadcastLimit: 3000,
    automationLimit: 15,
    historyMonths: 12,
    pipelineLimit: 1,
    pipelineStageLimit: 999,
    customFieldLimit: 5,
    fileStorageGb: 5,
    supportLabel: 'Priority email and WhatsApp support (12-hour response)',
    analyticsLabel: 'Full dashboard',
    highlight: true,
    cardHighlights: [
      'Up to 5 users for one shared team inbox',
      '2 WhatsApp numbers for branches or departments',
      '5,000 contacts with full CRM profiles',
      '3,000 scheduled broadcast messages per month',
      '3 AI assistants for sales, support, and after-hours',
      '15 workflow automations with lead routing and reminders',
    ],
    billingHighlights: [
      'Up to 5 users',
      '2 WhatsApp numbers + 1 Instagram account',
      '5,000 contacts',
      '3,000 broadcasts per month',
      '15 automations',
      'Full analytics, team roles, and 12-month history',
    ],
    valueProps: [
      'Conversation assignment and priority tags',
      'Lead scoring, notes, and custom date filters',
      'Campaign reporting and team workload visibility',
      'Import/export contacts and schedule broadcasts',
    ],
    comparison: {
      teamRoles: true,
      autoAssignment: true,
      agentWorkload: true,
      leadScoring: true,
      dealValueTracking: true,
      broadcastScheduling: true,
      quickReplyTemplates: 50,
      multiLanguageAi: false,
      revenueReports: false,
      customDateRanges: true,
      exportReports: false,
      contactImportExport: true,
      apiAccess: false,
      webhooks: false,
      whiteLabel: false,
    },
  },
  PRO: {
    name: 'Pro',
    shortLabel: 'For established multi-branch teams',
    audience: 'Built for larger SMEs that need advanced analytics, multiple pipelines, stronger support, and deeper integrations.',
    description: 'Run high-volume operations with advanced reporting, more channels, more automation, and dedicated account support.',
    price: 549,
    annualPrice: 439,
    annualBilledPrice: 5268,
    stripePriceId: 'price_1T9WorI1cBVPBGguvOq6RbCO',
    annualStripePriceId: null,
    whatsappLimit: 5,
    instagramLimit: 2,
    chatbotLimit: 10,
    userLimit: 10,
    contactsLimit: 25000,
    broadcastLimit: 10000,
    automationLimit: 999999,
    historyMonths: 24,
    pipelineLimit: 3,
    pipelineStageLimit: 999,
    customFieldLimit: 999999,
    fileStorageGb: 20,
    supportLabel: 'Dedicated account manager plus WhatsApp support (4-hour response)',
    analyticsLabel: 'Advanced analytics and revenue reporting',
    cardHighlights: [
      'Up to 10 users across multiple teams or branches',
      '5 WhatsApp numbers and 2 Instagram accounts',
      '25,000 contacts with deal tracking and forecasting',
      '10,000 broadcast messages per month',
      '10 AI assistants with advanced routing',
      'Unlimited automations, API access, and 24-month history',
    ],
    billingHighlights: [
      'Up to 10 users',
      '5 WhatsApp numbers + 2 Instagram accounts',
      '25,000 contacts',
      '10,000 broadcasts per month',
      'Unlimited automations and custom fields',
      'Advanced analytics, API access, and 24-month history',
    ],
    valueProps: [
      'Multiple sales pipelines with forecasting',
      'Revenue reports, conversion funnels, and exports',
      'API and webhook access for integrations',
      'Dedicated account management for serious operations',
    ],
    comparison: {
      teamRoles: true,
      autoAssignment: true,
      agentWorkload: true,
      leadScoring: true,
      dealValueTracking: true,
      broadcastScheduling: true,
      quickReplyTemplates: 'Unlimited',
      multiLanguageAi: true,
      revenueReports: true,
      customDateRanges: true,
      exportReports: true,
      contactImportExport: true,
      apiAccess: true,
      webhooks: true,
      whiteLabel: 'Add-on',
    },
  },
};

export const ENTERPRISE_PLAN: EnterprisePlan = {
  name: 'Enterprise',
  shortLabel: 'For 10+ users with custom needs',
  audience: 'For multi-brand companies, agencies, or operations that need custom onboarding, SLA guarantees, and deeper security.',
  description: 'Custom onboarding, custom integrations, and a dedicated success path for teams that need more than an off-the-shelf plan.',
  ctaLabel: 'Contact Sales',
  cardHighlights: [
    'Unlimited users and contacts',
    'Custom API integrations and SLA-backed support',
    'Dedicated onboarding and success manager',
    'Advanced security, custom reporting, and multi-brand setups',
  ],
};

export const PRICING_VALUE_STATEMENT =
  'Tawasel helps teams reply faster, convert more leads, and save hours every week on manual follow-ups.';

export const PRICING_TRUST_SIGNALS = [
  'No hidden fees',
  'Cancel anytime',
  'Arabic and English ready',
  'UAE-focused support',
];

export const PRICING_FAQ = [
  {
    question: 'Can I switch plans anytime?',
    answer:
      'Yes. Upgrade or downgrade from billing whenever you need to. Upgrades can apply immediately, while downgrades can follow your billing cycle.',
  },
  {
    question: 'What happens if I reach a contact or broadcast limit?',
    answer:
      'You will get warned before the limit is reached. You can upgrade the workspace or add more capacity later without interrupting active conversations.',
  },
  {
    question: 'Can I keep my current WhatsApp number?',
    answer:
      'Yes. The platform is designed to connect your existing WhatsApp Business setup, so you keep the customer-facing number you already use.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most teams can connect channels, import contacts, and start replying in less than 30 minutes once the hosted deployment is ready.',
  },
  {
    question: 'Do you support Arabic?',
    answer:
      'Yes. The app supports Arabic and English, including RTL interfaces and bilingual team workflows.',
  },
  {
    question: 'Will annual billing be available?',
    answer:
      'Yes. The pricing model already includes annual discounts, and those checkout options can be enabled when deployment billing is finalized.',
  },
];

export const PRICING_ADD_ONS = [
  { name: 'Extra user', price: 'AED 39/user/month', description: 'Add seats beyond your included team limit.' },
  { name: 'Extra WhatsApp number', price: 'AED 49/number/month', description: 'Connect another branch or department line.' },
  { name: 'Broadcast pack', price: 'AED 79 / 2,000 messages', description: 'Top up campaign capacity without changing plans.' },
  { name: 'Onboarding session', price: 'AED 499 one-time', description: 'Get hands-on help with setup, CRM stages, and automation.' },
];

export const PRICING_COMPARISON_GROUPS: ComparisonGroup[] = [
  {
    title: 'Channels and Team',
    rows: [
      {
        label: 'WhatsApp numbers',
        values: { STARTER: 1, GROWTH: 2, PRO: 5, ENTERPRISE: 'Unlimited' },
      },
      {
        label: 'Instagram accounts',
        values: { STARTER: 1, GROWTH: 1, PRO: 2, ENTERPRISE: 'Unlimited' },
      },
      {
        label: 'Users included',
        values: { STARTER: 1, GROWTH: 5, PRO: 10, ENTERPRISE: 'Unlimited' },
      },
      {
        label: 'Team roles and permissions',
        values: { STARTER: false, GROWTH: true, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'Auto-assignment rules',
        values: { STARTER: false, GROWTH: true, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'Agent workload view',
        values: { STARTER: false, GROWTH: true, PRO: true, ENTERPRISE: true },
      },
    ],
  },
  {
    title: 'CRM and Messaging',
    rows: [
      {
        label: 'Contacts',
        values: { STARTER: '1,000', GROWTH: '5,000', PRO: '25,000', ENTERPRISE: 'Unlimited' },
      },
      {
        label: 'Sales pipelines',
        values: { STARTER: 1, GROWTH: 1, PRO: 3, ENTERPRISE: 'Unlimited' },
      },
      {
        label: 'Pipeline stages',
        values: { STARTER: 5, GROWTH: 'Unlimited', PRO: 'Unlimited', ENTERPRISE: 'Unlimited' },
      },
      {
        label: 'Lead scoring',
        values: { STARTER: false, GROWTH: true, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'Deal value tracking',
        values: { STARTER: false, GROWTH: true, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'Broadcast messages / month',
        values: { STARTER: '500', GROWTH: '3,000', PRO: '10,000', ENTERPRISE: 'Custom' },
      },
      {
        label: 'Broadcast scheduling',
        values: { STARTER: false, GROWTH: true, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'Quick-reply templates',
        values: { STARTER: 10, GROWTH: 50, PRO: 'Unlimited', ENTERPRISE: 'Unlimited' },
      },
    ],
  },
  {
    title: 'AI, Analytics, and Support',
    rows: [
      {
        label: 'AI assistants',
        values: { STARTER: 1, GROWTH: 3, PRO: 10, ENTERPRISE: 'Unlimited' },
      },
      {
        label: 'Workflow automations',
        values: { STARTER: 3, GROWTH: 15, PRO: 'Unlimited', ENTERPRISE: 'Unlimited' },
      },
      {
        label: 'Multi-language AI',
        values: { STARTER: false, GROWTH: false, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'Conversation history',
        values: { STARTER: '6 months', GROWTH: '12 months', PRO: '24 months', ENTERPRISE: 'Unlimited' },
      },
      {
        label: 'Revenue and conversion reports',
        values: { STARTER: false, GROWTH: false, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'Custom date ranges',
        values: { STARTER: false, GROWTH: true, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'Report exports',
        values: { STARTER: false, GROWTH: false, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'Contact import/export',
        values: { STARTER: false, GROWTH: true, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'API access',
        values: { STARTER: false, GROWTH: false, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'Webhooks',
        values: { STARTER: false, GROWTH: false, PRO: true, ENTERPRISE: true },
      },
      {
        label: 'White-label widget',
        values: { STARTER: false, GROWTH: false, PRO: 'Add-on', ENTERPRISE: true },
      },
    ],
  },
];

export function isPaidPlan(plan?: string | null): plan is PlanType {
  return !!plan && plan in PLANS;
}

export function getPlanConfig(plan?: string | null) {
  return isPaidPlan(plan) ? PLANS[plan] : null;
}

export function getPlanPrice(plan: PlanConfig, cycle: BillingCycle) {
  return cycle === 'annual' ? plan.annualPrice : plan.price;
}

export function getPlanCycleLabel(plan: PlanConfig, cycle: BillingCycle) {
  if (cycle === 'annual') {
    return `AED ${plan.annualPrice}/mo billed AED ${plan.annualBilledPrice}/year`;
  }

  return `AED ${plan.price}/month`;
}

export function formatLimitValue(value: number) {
  return value >= 999999 ? 'Unlimited' : value.toLocaleString();
}

export function formatComparisonValue(value: ComparisonValue) {
  if (typeof value === 'boolean') {
    return value ? 'Included' : '-';
  }
  if (typeof value === 'number') {
    return value.toLocaleString();
  }
  return value;
}
