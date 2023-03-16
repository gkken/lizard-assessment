import { removeDuplicateCategories } from 'utils/removeDuplicateCategories';

describe('removeDuplicateCategories', () => {
  test('Passing in array with object with duplicate category names, should remove duplicates', () => {
    const dummyData = [
      {
        id: 'id1',
        name: 'name1',
      },
      {
        id: 'id1',
        name: 'name1',
      },
      {
        id: 'id2',
        name: 'name2',
      },
    ];

    const expectedOutput = [
      {
        id: 'id1',
        name: 'name1',
      },
      {
        id: 'id2',
        name: 'name2',
      },
    ];

    expect(removeDuplicateCategories(dummyData)).toStrictEqual(expectedOutput);
  });

  test('Passing in array with no duplicates, should return array as is', () => {
    const dummyData = [
      {
        id: 'id1',
        name: 'name1',
      },
      {
        id: 'id2',
        name: 'name2',
      },
    ];

    expect(removeDuplicateCategories(dummyData)).toStrictEqual(dummyData);
  });
});
