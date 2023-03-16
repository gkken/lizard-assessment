import type { IData, ICategories } from 'components/MainContainer';
import { useState, useEffect } from 'react';
import { removeDuplicateCategories } from 'utils/removeDuplicateCategories';

export const useGenerateUniqueCategories = ({ data }: { data: IData[] }) => {
  const [filterOption, setFilterOption] = useState<ICategories[]>([]);

  useEffect(() => {
    const allCategories = data.flatMap((post: IData) => post.categories);
    const uniqueCategories = removeDuplicateCategories(allCategories);
    setFilterOption(uniqueCategories as ICategories[]);
  }, [setFilterOption, data]);

  return { filterOption };
};
