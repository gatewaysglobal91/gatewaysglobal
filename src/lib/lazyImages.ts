/**
 * Image Lazy Loading Utility
 *
 * Instead of importing all images upfront (which causes ALL images to be bundled immediately),
 * this utility creates URLs that Vite will handle dynamically.
 *
 * Benefits:
 * - Images are only loaded when actually needed
 * - Reduces initial bundle size dramatically
 * - Faster page load times
 */

/**
 * Creates a lazy-loaded image URL from a path relative to src/assets/
 * @param path - Path relative to assets folder (e.g., "dairy/d1.webp")
 * @returns Full URL to the image
 */
export const lazyImg = (path: string): string => {
  return new URL(`../assets/${path}`, import.meta.url).href;
};

/**
 * Batch create multiple image paths
 * @param paths - Array of paths relative to assets folder
 * @returns Array of full URLs
 */
export const lazyImgs = (paths: string[]): string[] => {
  return paths.map((path) => lazyImg(path));
};

export default lazyImg;
