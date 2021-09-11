export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export const createUid = () => {
  return Math.random().toString(36).slice(-12);
};
