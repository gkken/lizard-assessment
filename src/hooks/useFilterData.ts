import type { Data, Category } from 'components/MainContainer';
import { useState, useEffect } from 'react';

export const useFilterData = ({ data }: { data: Data[] }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  useEffect(() => {
    setFilteredData(
      data.filter((da: Data) =>
        da.categories.some((category: Category) => {
          if (!selectedCategory) return true;
          return category.name === selectedCategory;
        })
      )
    );
  }, [setFilteredData, data, selectedCategory]);

  return { filteredData, setFilteredData, setSelectedCategory };
};
