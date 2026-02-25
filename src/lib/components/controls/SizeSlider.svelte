<script>
    import { canvasState } from '$state/canvasState.svelte.js';
    import { Slider } from '$ui';
    import { Move, Maximize, Droplets } from 'lucide-svelte';

    // Helper logic to ensure we are editing the right blob
    // Svelte 5 will automatically re-run this when selectedBlobId changes
</script>

{#if canvasState.selectedBlob}
    <div class="space-y-8 animate-fade-in">
        
        <div class="space-y-4">
            <div class="flex items-center gap-2 text-zinc-500">
                <Move size={12} />
                <span class="text-[10px] font-bold uppercase tracking-widest">Positioning</span>
            </div>
            
            <div class="grid grid-cols-1 gap-6 p-4 bg-zinc-900/30 rounded-2xl border border-white/5">
                <Slider 
                    label="Horizontal (X)" 
                    bind:value={canvasState.selectedBlob.x} 
                    min={-20} 
                    max={120} 
                    suffix="%" 
                />
                <Slider 
                    label="Vertical (Y)" 
                    bind:value={canvasState.selectedBlob.y} 
                    min={-20} 
                    max={120} 
                    suffix="%" 
                />
            </div>
        </div>

        <div class="space-y-4">
            <div class="flex items-center gap-2 text-zinc-500">
                <Maximize size={12} />
                <span class="text-[10px] font-bold uppercase tracking-widest">Scale & Alpha</span>
            </div>

            <div class="grid grid-cols-1 gap-6 p-4 bg-zinc-900/30 rounded-2xl border border-white/5">
                <Slider 
                    label="Blob Size" 
                    bind:value={canvasState.selectedBlob.size} 
                    min={10} 
                    max={150} 
                    suffix="%" 
                />
                
                <div class="space-y-2">
                    <div class="flex items-center gap-2 mb-1">
                        <Droplets size={12} class="text-zinc-500" />
                        <span class="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Opacity</span>
                    </div>
                    <Slider 
                        bind:value={canvasState.selectedBlob.opacity} 
                        min={0} 
                        max={1} 
                        step={0.01} 
                        suffix="" 
                    />
                </div>
            </div>
        </div>

    </div>
{/if}
