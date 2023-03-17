import type { Category } from './MainContainer';
export interface FilterSelectProps {
  filterOptions: Category[];
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}
const FilterSelect = ({ filterOptions, handleChange }: FilterSelectProps) => {
  return (
    <header className="flex flex-row space-x-2 self-end">
      <label htmlFor="category-filter" className="font-bold">
        Filter By:
      </label>
      <select
        name="category"
        id="category-filter"
        defaultValue={''}
        onChange={(e) => handleChange(e)}
      >
        <option value={''}>All Categories</option>
        {filterOptions.map((option, idx) => {
          return (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </header>
  );
};

export default FilterSelect;
