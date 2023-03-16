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
  // fetch data
  const { data } = useFetchData('/api/posts');
  // dynamically generate categories to be used for filtering
  const { filterOption } = useGenerateUniqueCategories({ data });
  // filtering data based on whether filter is applied
  const { filteredData, setFilteredData, setSelectedCategory } = useFilterData({
    data,
  });
  // split filtered data into pages
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
          pageData.map((data: IData) => {
            return (
              <Post
                key={data.id}
                authorName={data.author.name}
                authorAvatar={data.author.avatar}
                title={data.title}
                summary={data.summary}
                publishDate={data.publishDate}
                categories={data.categories}
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
