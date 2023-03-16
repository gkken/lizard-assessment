import { fireEvent, render, screen } from '@testing-library/react';
import FilterSelect from 'components/FilterSelect';

const dummyCategories = [
  {
    id: '0b4ca801-0534-4313-ad58-5198ab1a4ce8',
    name: 'Landing Pages',
  },
  {
    id: 'c17d8c07-f0cb-4e65-ac69-54da9f3935a5',
    name: 'Marketing Analytics',
  },
  {
    id: 'd939e6c4-1a1c-4b9f-bc20-05b9fa8c29a6',
    name: 'Ecommerce',
  },
];

const mockedHandleChange = jest.fn();

describe('FilterSelect', () => {
  test('Should match snapshop', () => {
    expect(
      render(
        <FilterSelect
          filterOptions={dummyCategories}
          handleChange={mockedHandleChange}
        />
      )
    ).toMatchSnapshot();
  });

  test('Passing in 3 filter options, should render 4 options (including default option)', () => {
    render(
      <FilterSelect
        filterOptions={dummyCategories}
        handleChange={mockedHandleChange}
      />
    );

    const options = screen.getAllByRole('option');

    expect(options.length).toBe(dummyCategories.length + 1);
  });

  test('Changing select option causes handleChange to fire', () => {
    render(
      <FilterSelect
        filterOptions={dummyCategories}
        handleChange={mockedHandleChange}
      />
    );
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Ecommerce' } });
    expect(mockedHandleChange).toHaveBeenCalled();
  });
});
