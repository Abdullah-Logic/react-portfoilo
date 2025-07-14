export const getBreakpointLabel = (width) => {
  if (width < 600) return 'sm';
  if (width < 767) return 'md';
  if (width < 1024) return 'lg';
  return 'xl';
};
