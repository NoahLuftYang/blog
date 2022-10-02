import Link from 'next/link';

interface Props {
  slug?: string;
  title: string;
  url: string;
}

export function CoverImage({ title, url, slug }: Props) {
  const imageUrl = `${url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''}${url}`;

  if (slug) {
    return (
      <Link href={`/story/${slug}`}>
        <a>
          <img alt={title} src={imageUrl} />
        </a>
      </Link>
    );
  }

  return <img alt={title} src={imageUrl} />;
}
