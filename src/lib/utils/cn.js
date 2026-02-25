import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to merge Tailwind CSS classes safely.
 * It handles conditional classes and prevents style conflicts.
 */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
