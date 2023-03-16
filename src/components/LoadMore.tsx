import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon';

const LoadMore = ({
  handleLoadMore,
}: {
  handleLoadMore: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="flex justify-center pb-10">
      <button onClick={handleLoadMore}>
        <div className="font-bold">Load More</div>
        <div className="flex justify-center">
          <ChevronDownIcon className="w-5 stroke-2" />
        </div>
      </button>
    </div>
  );
};

export default LoadMore;
