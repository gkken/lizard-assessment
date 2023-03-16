import type { IData, ICategories } from 'components/MainContainer';
import { useState, useEffect } from 'react';

export const useFilterData = ({ data }: { data: IData[] }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredData, setFilteredData] = useState<IData[]>([]);

  useEffect(() => {
    setFilteredData(
      data.filter((da: IData) =>
        da.categories.some((category: ICategories) => {
          if (!selectedCategory) return true;
          return category.name === selectedCategory;
        })
      )
    );
  }, [setFilteredData, data, selectedCategory]);

  return { filteredData, setFilteredData, setSelectedCategory };
};
