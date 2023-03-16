const CategoryFlag = ({ categoryLabel }: { categoryLabel: string }) => {
  return (
    <div className="mr-2 max-w-max cursor-default whitespace-nowrap rounded-xl bg-grey-light px-2 text-sm text-grey-subtext transition-all duration-300 ease-in hover:bg-grey-dark">
      {categoryLabel}
    </div>
  );
};

export default CategoryFlag;
