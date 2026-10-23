export const MIN_APPROACH_DISTANCE = 0.0001;
export const MAX_REFINEMENT = 80;

// Stop at an explicit finite endpoint, rather than a shared timer.
export function playbackStep(mode, initial, elapsed) {
  if (!Number.isFinite(initial) || !Number.isFinite(elapsed) || elapsed < 0)
    throw new RangeError('Playback requires finite values and nonnegative elapsed time.');
  if (mode === 'approach') {
    if (initial < MIN_APPROACH_DISTANCE || initial > 1.5) throw new RangeError('Invalid approach distance.');
    const value = Math.max(MIN_APPROACH_DISTANCE, initial * Math.exp(-0.8 * elapsed));
    return { value, done: value === MIN_APPROACH_DISTANCE };
  }
  if (mode === 'refine') {
    if (!Number.isInteger(initial) || initial < 1 || initial > MAX_REFINEMENT) throw new RangeError('Invalid refinement count.');
    const value = Math.min(MAX_REFINEMENT, initial + Math.floor(elapsed * 9));
    return { value, done: value === MAX_REFINEMENT };
  }
  if (mode === 'sweep') {
    if (initial < 0 || initial > 1) throw new RangeError('Invalid sweep position.');
    const value = Math.min(1, initial + elapsed * 0.25);
    return { value, done: value === 1 };
  }
  throw new RangeError('Unknown playback mode.');
}

// Map progress to the actual control domain; coordinates need not lie in [0, 1].
export function boundedSweep(initial, min, max, elapsed) {
  if (![initial, min, max].every(Number.isFinite) || min >= max || initial < min || initial > max)
    throw new RangeError('Sweep position must belong to its control domain.');
  const frame = playbackStep('sweep', (initial - min) / (max - min), elapsed);
  return { value: frame.done ? max : min + frame.value * (max - min), done: frame.done };
}
