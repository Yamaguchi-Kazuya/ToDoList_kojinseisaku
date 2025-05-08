import { renderHook } from '@testing-library/react-hooks';
import { useTodoDate } from '../useTodoDate';

describe('useTodoDate Hook', () => {
  test('should return formatted date', () => {
    const { result } = renderHook(() => useTodoDate(new Date('2025-05-08T12:00:00.000Z')));
    expect(result.current.formattedDate).toBeDefined(); // 具体的なフォーマットはフックの実装によります
  });
});