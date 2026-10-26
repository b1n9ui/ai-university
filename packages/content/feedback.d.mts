export const feedbackTypes: string[];
export function feedbackPath(context?: {book?: string; lesson?: string; version?: string; view?: string}): string;
export function issueDraft(input: {kind: string; edition: string; book?: string; lesson?: string; version?: string; view?: string; description: string; evidence?: string}): string;
