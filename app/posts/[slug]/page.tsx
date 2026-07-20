import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getPost, posts } from "../../lib/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${protocol}://${host}` : "";
  const pageUrl = `${origin}/posts/${post.slug}`;
  const image = `${origin}${post.socialImage}`;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: pageUrl,
      publishedTime: post.publishedAt,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="article-page">
      <nav className="article-nav" aria-label="Article navigation">
        <a className="wordmark" href="/" aria-label="Notes home">Notes<span>.</span></a>
        <a className="back-link" href="/#recent">&larr; Back to writing</a>
      </nav>

      <article className="article">
        <header className="article-header">
          <p className="eyebrow"><span /> {post.category} &middot; {post.date} &middot; {post.readMinutes} min read</p>
          <h1>{post.title}</h1>
          <p className="article-dek">{post.excerpt}</p>
        </header>

        <div className="article-body">
          {post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <footer className="article-footer">
          <p>Thanks for reading.</p>
          <a href="/#recent">More writing <span>&rarr;</span></a>
        </footer>
      </article>
    </main>
  );
}
