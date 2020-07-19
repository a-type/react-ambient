export function getVisibleElementHeight(
  element: Element,
  viewportHeight: number
) {
  if (typeof window === 'undefined') return 0;

  const rect = element.getBoundingClientRect();
  const height = rect.height;
  const visibleTop = rect.top >= 0 && rect.top < viewportHeight;
  const visibleBottom = rect.bottom > 0 && rect.bottom < viewportHeight;
  let visiblePx = 0;
  if (visibleTop && visibleBottom) {
    visiblePx = height;
  } else if (visibleTop) {
    visiblePx = viewportHeight - rect.top;
  } else if (visibleBottom) {
    visiblePx = rect.bottom;
  } else if (height > viewportHeight && rect.top < 0) {
    const absTop = Math.abs(rect.top);
    if (absTop < height) {
      visiblePx = height - absTop;
    }
  }

  return visiblePx / height;
}
