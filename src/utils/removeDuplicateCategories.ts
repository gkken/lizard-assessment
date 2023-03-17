import type { Category } from 'components/MainContainer';

export const removeDuplicateCategories = (data: Category[]) => {
  let result = data.filter(
    (item, index) =>
      index === data.findIndex((other) => item.name === other.name)
  );
  return result;
};
