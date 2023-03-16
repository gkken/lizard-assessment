import { useState, useEffect } from 'react';
import type { IData } from 'components/MainContainer';

export const usePagination = ({ filteredData }: { filteredData: IData[] }) => {
  const [postOffset, setPostOffset] = useState(0);
  const [pageData, setPageData] = useState<IData[]>([]);

  useEffect(() => {
    const postsPerPage = 5;
    const endOffset = postOffset + postsPerPage;
    setPageData((previousState) => {
      return [...previousState, ...filteredData.slice(postOffset, endOffset)];
    });
  }, [setPageData, filteredData, postOffset]);

  return { pageData, setPostOffset, setPageData };
};
