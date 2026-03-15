export interface PipelineStage {
  id: string;
  key: string;
  name: string;
  color: string;
  position: number;
  isSystem: boolean;
  isTerminal: boolean;
  terminalType: 'OPEN' | 'WON' | 'LOST' | string;
}

export const DEFAULT_PIPELINE_STAGE_KEY = 'NEW_LEAD';

export const PIPELINE_STAGE_COLOR_OPTIONS = [
  '#3B82F6',
  '#6366F1',
  '#8B5CF6',
  '#F97316',
  '#22C55E',
  '#EF4444',
  '#06B6D4',
  '#14B8A6',
  '#EAB308',
  '#EC4899',
];

export const sortPipelineStages = (stages: PipelineStage[]) =>
  [...stages].sort((a, b) => a.position - b.position || a.name.localeCompare(b.name));

const normalizeStageLookup = (value?: string | null) =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');

export const getPipelineStageLabel = (stages: PipelineStage[], key?: string | null) =>
  stages.find(
    (stage) =>
      stage.key === key ||
      normalizeStageLookup(stage.key) === normalizeStageLookup(key) ||
      normalizeStageLookup(stage.name) === normalizeStageLookup(key)
  )?.name ||
  key ||
  'Unknown Stage';

export const getPipelineStageColor = (stages: PipelineStage[], key?: string | null) =>
  stages.find(
    (stage) =>
      stage.key === key ||
      normalizeStageLookup(stage.key) === normalizeStageLookup(key) ||
      normalizeStageLookup(stage.name) === normalizeStageLookup(key)
  )?.color || '#25D366';

export const getFallbackPipelineStageKey = (stages: PipelineStage[]) =>
  stages.find((stage) => !stage.isTerminal && stage.terminalType === 'OPEN')?.key ||
  stages[0]?.key ||
  DEFAULT_PIPELINE_STAGE_KEY;
