/**
 * A simple, drop-in Next.js Image loader.
 *
 * This loader returns a URL string for the Image component. It is intentionally
 * small and predictable:
 * - data: URIs are returned unchanged
 * - absolute URLs (http(s) or //) get width and quality query params appended
 * - root-relative paths ("/images/foo.png") also get width/quality appended
 *
 * This works as a replacement for the default dynamic loader when you want a
 * predictable, passthrough behavior for external CDNs or simple query-based
 * resizing backends.
 */

type LoaderProps = {
	src: string;
	width?: number;
	quality?: number | string;
};

function isAbsolute(src: string) {
	return /^(https?:)?\/\//.test(src);
}

export default function imageLoader({ src, width, quality }: LoaderProps): string {
	if (!src) return '';

	// Return inline data URIs unchanged
	if (src.startsWith('data:')) return src;

	if(src.startsWith('/')){
		src = `/scamazon${src}`;
	} else {
		src = `/scamazon/${src}`;
	}

	// Normalize quality and width
	const q = typeof quality === 'string' ? parseInt(quality, 10) || 75 : quality ?? 75;
	const w = typeof width === 'number' ? width : 0;

	// If it's an absolute URL or a root-relative path, append params.
	// Preserve existing querystring if present.
	const separator = src.includes('?') ? '&' : '?';

	// If user passed a protocol-relative URL (//example.com) keep it as-is.
	if (isAbsolute(src) || src.startsWith('/')) {
		return `{src}${separator}w=${w}&q=${q}`;
	}

	// Fallback: return src unchanged
	return `{src}`;
}

// Also provide a named export for convenience
export const defaultImageLoader = imageLoader;
