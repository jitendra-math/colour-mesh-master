/**
 * Mesh-Master Color Utilities (JSS Originals)
 * Helping you manipulate colors like a pro designer.
 */

/**
 * Validates if a string is a proper HEX color.
 */
export const isValidHex = (hex) => {
	return /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(hex);
};

/**
 * Converts Hex to RGBA. Useful for Canvas and CSS opacity.
 */
export const hexToRgba = (hex, alpha = 1) => {
	let r = 0, g = 0, b = 0;

	// Remove # if present
	hex = hex.replace('#', '');

	if (hex.length === 3) {
		r = parseInt(hex[0] + hex[0], 16);
		g = parseInt(hex[1] + hex[1], 16);
		b = parseInt(hex[2] + hex[2], 16);
	} else {
		r = parseInt(hex.slice(0, 2), 16);
		g = parseInt(hex.slice(2, 4), 16);
		b = parseInt(hex.slice(4, 6), 16);
	}

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Determines if a color is "Dark". 
 * Used to decide if text on top should be White or Black.
 */
export const isDarkColor = (hex) => {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	
	// YIQ formula: standard way to check perceived brightness
	const yiq = (r * 299 + g * 587 + b * 114) / 1000;
	return yiq < 128;
};

/**
 * Generates a random vibrant Hex color for new blobs.
 */
export const generateRandomHex = () => {
	const chars = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += chars[Math.floor(Math.random() * 16)];
	}
	return color;
};
