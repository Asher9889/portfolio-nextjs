export default function Video({ src, poster }: { src?: string; poster?: string }) {
  if (!src) return null;
  
  return (
    <video
      className="h-full w-full object-cover shadow-lg rounded-lg"
      controls
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
    >
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}