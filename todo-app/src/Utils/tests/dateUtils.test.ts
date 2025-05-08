import { formatDate } from '../dateUtils';

describe('dateUtils', () => {
  test('should format date correctly', () => {
    const date = new Date('2025-05-08T12:00:00.000Z');
    expect(formatDate(date)).toBe('2025/05/08'); // <- 期待される出力に合わせて修正
  });
});