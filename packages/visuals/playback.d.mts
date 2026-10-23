export const MIN_APPROACH_DISTANCE: number;
export const MAX_REFINEMENT: number;
export function playbackStep(mode: 'approach' | 'refine' | 'sweep', initial: number, elapsed: number): {value: number; done: boolean};
export function boundedSweep(initial: number, min: number, max: number, elapsed: number): {value: number; done: boolean};
