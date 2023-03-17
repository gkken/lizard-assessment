import { useState, useEffect } from 'react';
import type { Data } from 'components/MainContainer';

export const usePagination = ({ filteredData }: { filteredData: Data[] }) => {
  const [postOffset, setPostOffset] = useState(0);
  const [pageData, setPageData] = useState<Data[]>([]);

  useEffect(() => {
    const POSTS_PER_PAGE = 5;
    const endOffset = postOffset + POSTS_PER_PAGE;
    setPageData((previousState) => {
      return [...previousState, ...filteredData.slice(postOffset, endOffset)];
    });
  }, [setPageData, filteredData, postOffset]);

  return { pageData, setPostOffset, setPageData };
};
