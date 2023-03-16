import { render, screen } from '@testing-library/react';
import CategoryFlag from 'components/CategoryFlag';

describe('CategoryFlag', () => {
  test('Should match snapshot', () => {
    expect(render(<CategoryFlag categoryLabel={'test'} />)).toMatchSnapshot();
  });

  test('Passing in "test" as categoryLabel, should render component with "test" as label', () => {
    render(<CategoryFlag categoryLabel={'test'} />);

    const categoryLabel = screen.getByText('test');
    expect(categoryLabel).toBeInTheDocument();
  });
});
