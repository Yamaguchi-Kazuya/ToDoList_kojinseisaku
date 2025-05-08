import { renderHook, act } from '@testing-library/react-hooks';
import { useInput } from '../useInput';

describe('useInput Hook', () => {
  test('should update value on change', () => {
    const { result } = renderHook(() => useInput(''));
    act(() => {
      result.current.onChange({ target: { value: 'テスト' } } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.value).toBe('テスト');
  });

  test('should clear value on reset', () => {
    const { result } = renderHook(() => useInput('初期値'));
    act(() => {
      result.current.reset();
    });
    expect(result.current.value).toBe('');
  });
});