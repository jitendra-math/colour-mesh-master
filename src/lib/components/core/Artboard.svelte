<script>
    import { canvasState } from '$state/canvasState.svelte.js';
    import LayerMesh from './LayerMesh.svelte';
    import LayerNoise from './LayerNoise.svelte';
    import { cn } from '$utils/cn';
</script>

<div class="relative w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden bg-zinc-950">
    
    <div 
        class="relative w-full h-full max-w-6xl aspect-video md:aspect-auto rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 bg-checkerboard"
    >
        <div class="absolute inset-0">
            <LayerMesh />

            <LayerNoise />

            {#if canvasState.showGrid}
                <div 
                    class="absolute inset-0 z-10 pointer-events-none opacity-20"
                    style="background-image: 
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
                        background-size: 40px 40px;"
                ></div>
                
                <div class="absolute inset-0 z-10 pointer-events-none flex items-center justify-center opacity-30">
                    <div class="w-px h-full bg-primary/40"></div>
                    <div class="h-px w-full bg-primary/40 absolute"></div>
                </div>
            {/if}
        </div>

        <div class="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-3">
            <div class="flex -space-x-2">
                {#each canvasState.blobs.slice(0, 3) as blob}
                    <div class="w-3 h-3 rounded-full border border-white/20" style="background-color: {blob.color}"></div>
                {/each}
            </div>
            <span class="text-[10px] font-mono text-white/50 uppercase tracking-tighter">
                {canvasState.blobs.length} Nodes Active
            </span>
        </div>
    </div>

    <div class="absolute -inset-[100px] z-[-1] opacity-30 blur-[120px] pointer-events-none">
        <div 
            class="w-full h-full"
            style="background: radial-gradient(circle at center, {canvasState.blobs[0]?.color || '#4f46e5'}, transparent 70%);"
        ></div>
    </div>
</div>
