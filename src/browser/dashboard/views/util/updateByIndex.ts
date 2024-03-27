export const updateByIndex = <T extends unknown>(
  array: T[],
  updateTarget: number,
  updateItem: T,
): T[] => {
  const prev = array.slice(0, updateTarget);
  const rest = array.slice(updateTarget + 1);

  return [...prev, updateItem, ...rest];
};
