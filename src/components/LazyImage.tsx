import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholderClassName?: string;
}

/**
 * LazyImage component with Intersection Observer API
 * - Only loads images when they're about to enter the viewport
 * - Shows a blur placeholder while loading
 * - Smooth fade-in transition when loaded
 */
export const LazyImage = ({
  src,
  alt,
  className = "",
  style,
  placeholderClassName = "",
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    // Create intersection observer to detect when image enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Stop observing once in view
          }
        });
      },
      {
        // Load images 200px before they enter viewport
        rootMargin: "200px",
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative overflow-hidden" style={style}>
      {/* Placeholder - shows while loading */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 bg-muted animate-pulse ${placeholderClassName}`}
        />
      )}

      {/* Actual image - only loads when in view */}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        loading="lazy"
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        style={style}
      />
    </div>
  );
};

export default LazyImage;
