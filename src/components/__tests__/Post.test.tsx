import Post from 'components/Post';
import { render, screen } from '@testing-library/react';

const dummyCategory = [
  {
    id: '5ee1187a-26f3-4819-b710-ccd99efc94df',
    name: 'category1',
  },
  {
    id: 'dc431d44-e26e-4bec-a2bd-a8ba1cd8b95d',
    name: 'category2',
  },
];

const AUTHOR_AVATAR_URL =
  'https://robohash.org/quamnonet.jpg?size=50x50&set=set1';

describe('Post', () => {
  test('Should match snapshot', () => {
    expect(
      render(
        <Post
          authorName={'test authorName'}
          authorAvatar={AUTHOR_AVATAR_URL}
          publishDate={'2020-09-28T15:59:05Z'}
          summary={'test summary'}
          title={'test title'}
          categories={dummyCategory}
        />
      )
    ).toMatchSnapshot();
  });

  test('Passing in all props, should render with appropriate props', () => {
    render(
      <Post
        authorName={'test authorName'}
        authorAvatar={AUTHOR_AVATAR_URL}
        publishDate={'2020-09-28T15:59:05Z'}
        summary={'test summary'}
        title={'test title'}
        categories={dummyCategory}
      />
    );

    const authorName = screen.getByText('test authorName', { selector: 'h1' });
    const title = screen.getByText('test title', { selector: 'h1' });
    const summary = screen.getByText('test summary', { selector: 'section' });
    const authorAvatar = screen.getByRole('img');
    const publishedDate = screen.getByText('28 September 2020', {
      selector: 'time',
    });
    const category1 = screen.getByText('category1');
    const category2 = screen.getByText('category2');

    expect(authorName).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(authorAvatar).toBeInTheDocument();
    expect(authorAvatar).toHaveAttribute('src', AUTHOR_AVATAR_URL);
    expect(publishedDate).toBeInTheDocument();
    expect(category1).toBeInTheDocument();
    expect(category2).toBeInTheDocument();
  });
});
