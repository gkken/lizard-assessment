import type { ICategories } from 'components/MainContainer';

export const removeDuplicateCategories = (data: ICategories[]) => {
  let result = data.filter(
    (item, index) =>
      index === data.findIndex((other) => item.name === other.name)
  );
  return result;
};
