import { render, screen, fireEvent } from '@testing-library/react';
import LoadMore from 'components/LoadMore';
const mockedLoadMore = jest.fn();

describe('LoadMore', () => {
  test('Should match snapshot', () => {
    expect(
      render(<LoadMore handleLoadMore={mockedLoadMore} />)
    ).toMatchSnapshot();
  });

  test('Runs handleLoadMore function when clicked', () => {
    render(<LoadMore handleLoadMore={mockedLoadMore} />);

    const loadMore = screen.getByRole('button');
    fireEvent.click(loadMore);
    expect(mockedLoadMore).toHaveBeenCalled();
  });
});
