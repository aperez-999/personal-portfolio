import { useEffect, useState } from 'react';

function useImageReady(src) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!src) {
      setReady(false);
      return undefined;
    }
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (!cancelled) setReady(true);
    };
    img.onerror = () => {
      if (!cancelled) setReady(false);
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  return ready;
}

/**
 * One thumbnail: the web screenshot, with the iOS snapshot overlaid
 * once that file is actually present.
 */
export default function ProjectPreview({ web, ios, fallback, alt }) {
  const webReady = useImageReady(web);
  const iosReady = useImageReady(ios);
  const webSrc = webReady ? web : fallback;
  const showIos = Boolean(ios) && iosReady;

  if (!webSrc) return null;

  return (
    <div className="absolute inset-0 bg-espresso-900">
      <img
        src={webSrc}
        alt={alt}
        className={`h-full w-full object-cover ${showIos ? 'object-left' : ''}`}
      />
      {showIos && (
        <div className="absolute top-[9%] bottom-[9%] right-[4%] w-[26%] min-w-[4.5rem] max-w-[15rem] overflow-hidden rounded-[1.05rem] border border-brass/40 bg-espresso-950 shadow-[0_16px_36px_-16px_rgba(26,18,11,0.9)]">
          <img src={ios} alt="" className="h-full w-full object-cover object-top" />
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 rounded-full bg-espresso-950/85 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-brass-light">
            iOS
          </span>
        </div>
      )}
    </div>
  );
}
