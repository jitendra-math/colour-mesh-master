/**
 * Mesh-Master PNG Export Engine
 * Ye logic browser ke canvas API ka use karke mesh ko 4K quality mein export karta hai.
 */

export async function exportAsPNG(state, width = 1920, height = 1080) {
    const { blobs, backgroundColor, noiseOpacity, glassBlur } = state;

    // 1. Create a hidden canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // High DPI Scaling (4K quality)
    canvas.width = width;
    canvas.height = height;

    // 2. Draw Background Base
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // 3. Prepare Blur Filter
    // Canvas par blur apply karne ke liye hum use save/restore ke beech rakhenge
    ctx.save();
    ctx.filter = `blur(${glassBlur * (width / 1000)}px)`; // Scale blur based on resolution

    // 4. Draw Each Blob as a Radial Gradient
    blobs.forEach(blob => {
        const x = (blob.x / 100) * width;
        const y = (blob.y / 100) * height;
        const radius = (blob.size / 100) * Math.max(width, height);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, hexToRGBA(blob.color, blob.opacity));
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.globalCompositeOperation = 'screen'; // Mesh magic blend mode
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.restore();

    // 5. Add Noise Grain (Mathematical approach)
    if (noiseOpacity > 0) {
        addCanvasNoise(ctx, width, height, noiseOpacity);
    }

    // 6. Trigger Download
    const dataUrl = canvas.toDataURL('image/png', 1.0);
    const link = document.createElement('a');
    link.download = `mesh-master-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
}

// Helper: Hex to RGBA conversion
function hexToRGBA(hex, opacity) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// Helper: Fast Noise Generator for Canvas
function addCanvasNoise(ctx, w, h, opacity) {
    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * (opacity * 255);
        data[i] += noise;     // R
        data[i + 1] += noise; // G
        data[i + 2] += noise; // B
    }
    ctx.putImageData(imageData, 0, 0);
}
