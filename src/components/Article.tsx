import { useState } from 'react';
import Slideover from '@/common/Slideover';

interface Props {
  post: {
    id: number;
    title: string;
    href: string;
    description: string;
    imageUrl: string;
    date: string;
    datetime: string;
    category: { title: string; href: string };
    author: { name: string; imageUrl: string; href: string; role: string };
    images: string[];
  };
}

export default function Article({ post }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="flex flex-col items-start justify-between">
        <div className="relative w-full">
          <img src={post.imageUrl} alt="" className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime={post.datetime} className="text-gray-500">
              {post.date}
            </time>
            <a href={post.category.href} className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">
              {post.category.title}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <button onClick={() => setOpen(true)} className="relative z-10 text-left">
                <span className="absolute inset-0" />
                {post.title}
              </button>
            </h3>
            <p className="line-clamp-3 mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href={post.author.href}>
                  <span className="absolute inset-0" />
                  {post.author.name}
                </a>
              </p>
              <p className="text-gray-600">{post.author.role}</p>
            </div>
          </div>
        </div>
      </article>
      <Slideover open={open} setOpen={setOpen} title={post.title} description={post.description}>
        {post.images.map((image, idx) => (
          <>
            <h2 className="w-full text-center font-semibold">Imagen {idx + 1}</h2>
            <img key={image} src={image} alt="" className="w-full py-2" />
          </>
        ))}
      </Slideover>
    </>
  );
}
