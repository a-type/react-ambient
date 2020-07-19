export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate: boolean = false
) {
  let timeout: NodeJS.Timeout | null;
  return function (...args: Parameters<T>) {
    let later = function () {
      timeout = null;
      if (!immediate) func(...args);
    };
    let callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}
