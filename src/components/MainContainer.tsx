import Post from './Post';
import FilterSelect from './FilterSelect';
import { useFetchData } from 'hooks/useFetchData';
import { useFilterData } from 'hooks/useFilterData';
import { usePagination } from 'hooks/usePagination';
import { useGenerateUniqueCategories } from 'hooks/useGenerateUniqueCategories';
import LoadMore from './LoadMore';

export interface IData {
  id: string;
  publishDate: string;
  summary: string;
  title: string;
  author: {
    avatar: string;
    name: string;
  };
  categories: ICategories[];
}

export interface ICategories {
  id: string;
  name: string;
}

const MainContainer = () => {
  const { data } = useFetchData('/api/posts');
  const { filterOption } = useGenerateUniqueCategories({ data });
  const { filteredData, setFilteredData, setSelectedCategory } = useFilterData({
    data,
  });
  const { setPageData, setPostOffset, pageData } = usePagination({
    filteredData,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setFilteredData([]);
    setPageData([]);
    setPostOffset(0);
  };

  const handleLoadMore = () => {
    setPostOffset((previousState) => previousState + 5);
  };

  return (
    <>
      <div className="relative flex max-w-max flex-col self-center">
        <FilterSelect
          filterOptions={filterOption}
          handleChange={handleChange}
        />
        {!!pageData &&
          pageData.map((obj: IData) => {
            return (
              <Post
                key={obj.id}
                authorName={obj.author.name}
                authorAvatar={obj.author.avatar}
                title={obj.title}
                summary={obj.summary}
                publishDate={obj.publishDate}
                categories={obj.categories}
              />
            );
          })}
      </div>
      {!(pageData.length === filteredData.length) && (
        <LoadMore handleLoadMore={handleLoadMore} />
      )}
    </>
  );
};

export default MainContainer;
