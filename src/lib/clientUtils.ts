/**
 * クライアント側でのみ実行される関数を定義するファイル
 */

/**
 * ローカルストレージが利用可能かどうかを確認する
 */
export const isLocalStorageAvailable = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    const testKey = '__storage_test__';
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};
