import type { Artwork } from "../lib/posts";

type PostArtworkProps = {
  artwork: Artwork;
  className: string;
};

export function PostArtwork({ artwork, className }: PostArtworkProps) {
  return (
    <div className={`${className} post-art ${artwork}`} aria-hidden="true">
      <div className="shape-block" />
      <div className="shape-arch" />
    </div>
  );
}
