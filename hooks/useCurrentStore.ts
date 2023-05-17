import { useCallback } from 'react';
import { mutate } from 'swr';
import type { Store } from '../types/store';

export const CURRENT_STORE_KEY = '/current-store';

const useCurrentStore = () => {
  const setCurrentStore = useCallback((store: Store) => {
    mutate(CURRENT_STORE_KEY, store);
  }, []);

  const clearCurrentStore = useCallback(() => {
    mutate(CURRENT_STORE_KEY, null);
  }, []);

  return {
    setCurrentStore,
    clearCurrentStore,
  };
};
export default useCurrentStore;

// currentstore 전역으로 상태 관리
// 훅을 반환

// 1함수 setCurrentStore
// 새로운 store을 인자로 받아 SWR > mutate 를 이용해
// 현재 선택된 store의 정보를 저장한다.

// 2함수 clearCurrentStore
// current store 초기화

// 그리고 이 두 함수를 반환한다.
