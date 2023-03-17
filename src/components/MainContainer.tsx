import Post from './Post';
import FilterSelect from './FilterSelect';
import { useFetchData } from 'hooks/useFetchData';
import { useFilterData } from 'hooks/useFilterData';
import { usePagination } from 'hooks/usePagination';
import { useGenerateUniqueCategories } from 'hooks/useGenerateUniqueCategories';
import LoadMore from './LoadMore';

export interface Data {
  id: string;
  publishDate: string;
  summary: string;
  title: string;
  author: {
    avatar: string;
    name: string;
  };
  categories: Category[];
}

export interface Category {
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
    const POST_PER_PAGE = 5;
    setPostOffset((previousState) => previousState + POST_PER_PAGE);
  };

  return (
    <>
      <div className="relative flex max-w-max flex-col self-center">
        <FilterSelect
          filterOptions={filterOption}
          handleChange={handleChange}
        />
        {!!pageData &&
          pageData.map((data: Data) => {
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
