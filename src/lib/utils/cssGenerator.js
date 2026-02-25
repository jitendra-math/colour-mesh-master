/**
 * Mesh-Master CSS Engine
 * Ye function hamare state ko production-ready CSS mein badalta hai.
 */

export function generateCSS(state) {
    const { blobs, backgroundColor, noiseOpacity, glassBlur } = state;

    // 1. Base Layer (Background Color)
    const baseStyle = `background-color: ${backgroundColor};`;

    // 2. Mesh Gradients Layer
    // Har blob ko ek radial-gradient mein convert karte hain
    const gradients = blobs.map(blob => {
        return `radial-gradient(circle at ${blob.x}% ${blob.y}%, ${blob.color} 0%, transparent ${blob.size}%)`;
    }).join(', ');

    const meshStyle = `background-image: ${gradients};`;

    // 3. Blur & Effects
    const effectStyle = `filter: blur(${glassBlur}px);`;

    // 4. Full Combined Code for Developer
    // Hum ek clean version return karenge jo Tailwind ya Vanilla CSS dono mein kaam kare
    return `
/* Mesh Master Pro Generated Styles */
.mesh-gradient {
    ${baseStyle}
    ${meshStyle}
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.mesh-gradient::before {
    content: "";
    position: absolute;
    inset: 0;
    ${effectStyle}
    z-index: 0;
}
    `.trim();
}

/**
 * Tailwind Class Generator
 * Developer ko agar Tailwind config chahiye toh wo yahan se milega
 */
export function generateTailwindConfig(state) {
    const { blobs } = state;
    const colors = blobs.map((b, i) => `'mesh-color-${i+1}': '${b.color}'`).join(',\n        ');
    
    return `
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        ${colors}
      }
    }
  }
}
    `.trim();
}
