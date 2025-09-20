import type { Photo } from '@/types/gallery';

export const DEFAULT_PATTERN = [2, 1];

export function buildPatternRows(images: Photo[], pattern: number[]) {
    const rows: Photo[][] = [];
    let index = 0;
    let patternIndex = 0;

    while (index < images.length) {
        const desiredCount = pattern[patternIndex % pattern.length] ?? 2;
        const remaining = images.length - index;
        const count = Math.min(desiredCount, remaining);

        rows.push(images.slice(index, index + count));
        index += count;
        patternIndex += 1;
    }

    return rows;
}
