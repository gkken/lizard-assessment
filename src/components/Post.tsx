import type { Category } from './MainContainer';
import dayjs from 'dayjs';
import CategoryFlag from './CategoryFlag';
import { removeDuplicateCategories } from 'utils/removeDuplicateCategories';

export interface PostProps {
  publishDate: string;
  summary: string;
  title: string;
  authorName: string;
  authorAvatar: string;
  categories: Category[];
}

const Post = ({
  authorName,
  authorAvatar,
  title,
  publishDate,
  summary,
  categories,
}: PostProps) => {
  return (
    <article className="mb-5 max-w-4xl space-y-2 border-b-2 p-3">
      <div className="flex flex-row space-x-2">
        <img src={authorAvatar} alt="" className="rounded-full" width={24} />
        <h1 className="flex self-center text-sm font-semibold">{authorName}</h1>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <section className="text-grey-subtext">{summary}</section>
      <footer className="flex flex-row flex-wrap gap-y-1">
        <time className="mr-2 whitespace-nowrap text-sm text-grey-subtext">
          {dayjs(publishDate).format('D MMMM YYYY')}
        </time>
        <div className="flex flex-row flex-wrap gap-y-1">
          {removeDuplicateCategories(categories).map((category) => {
            return (
              <CategoryFlag key={category.id} categoryLabel={category.name} />
            );
          })}
        </div>
      </footer>
    </article>
  );
};

export default Post;
