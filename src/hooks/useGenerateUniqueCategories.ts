import type { Data, Category } from 'components/MainContainer';
import { useState, useEffect } from 'react';
import { removeDuplicateCategories } from 'utils/removeDuplicateCategories';

export const useGenerateUniqueCategories = ({ data }: { data: Data[] }) => {
  const [filterOption, setFilterOption] = useState<Category[]>([]);

  useEffect(() => {
    const allCategories = data.flatMap((post: Data) => post.categories);
    const uniqueCategories = removeDuplicateCategories(allCategories);
    setFilterOption(uniqueCategories as Category[]);
  }, [setFilterOption, data]);

  return { filterOption };
};
