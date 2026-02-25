// Master State for Mesh-Master Pro
// Using Svelte 5 Runes for ultra-reactive updates

export class CanvasState {
    // 1. Background Base Color
    backgroundColor = $state('#09090b');

    // 2. The Blobs (The Mesh Gradient Core)
    // Har blob ki apni position, color aur size hai
    blobs = $state([
        { id: 1, color: '#4f46e5', x: 20, y: 30, size: 60, opacity: 0.6 },
        { id: 2, color: '#9333ea', x: 80, y: 20, size: 50, opacity: 0.5 },
        { id: 3, color: '#06b6d4', x: 50, y: 70, size: 70, opacity: 0.4 },
        { id: 4, color: '#e11d48', x: 10, y: 80, size: 40, opacity: 0.3 }
    ]);

    // 3. Effects Layer
    noiseOpacity = $state(0.05); // Grain texture intensity
    glassBlur = $state(40);      // Backdrop blur amount
    showGrid = $state(true);     // For developer precision

    // 4. Selection State
    selectedBlobId = $state(1);

    constructor() {}

    // --- Actions ---

    addBlob() {
        const id = Math.max(0, ...this.blobs.map(b => b.id)) + 1;
        this.blobs.push({
            id,
            color: '#ffffff',
            x: 50,
            y: 50,
            size: 50,
            opacity: 0.5
        });
        this.selectedBlobId = id;
    }

    removeBlob(id) {
        if (this.blobs.length <= 1) return; // At least one blob needed
        this.blobs = this.blobs.filter(b => b.id !== id);
        this.selectedBlobId = this.blobs[0].id;
    }

    updateBlob(id, updates) {
        const index = this.blobs.findIndex(b => b.id === id);
        if (index !== -1) {
            this.blobs[index] = { ...this.blobs[index], ...updates };
        }
    }

    get selectedBlob() {
        return this.blobs.find(b => b.id === this.selectedBlobId);
    }
}

// Global Singleton Instance
export const canvasState = new CanvasState();
