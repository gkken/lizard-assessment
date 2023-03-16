import { render, screen, fireEvent } from '@testing-library/react';
import MainContainer from 'components/MainContainer';
import { Server } from 'miragejs';
import { makeServer } from 'mock';

let server: Server;

beforeEach(() => {
  server = makeServer({ environment: 'test' });
});

afterEach(() => {
  server.shutdown();
});

describe('Main Container', () => {
  test('Should match snapshop', () => {
    expect(render(<MainContainer />)).toMatchSnapshot();
  });

  test('On render, 5 posts are loaded', async () => {
    render(<MainContainer />);

    const posts = await screen.findAllByRole('article');
    expect(posts.length).toBe(5);
  });
});
