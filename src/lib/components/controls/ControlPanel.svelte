<script>
    import { canvasState } from '$state/canvasState.svelte.js';
    import { Button } from '$ui';
    import { Plus, Trash2, Layers, Sliders, Palette, Move } from 'lucide-svelte';
    import { cn } from '$utils/cn';

    // Sub-components (Hum next files mein banayenge)
    import ColorSection from './ColorSection.svelte';
    import NoiseToggle from './NoiseToggle.svelte';
    import SizeSlider from './SizeSlider.svelte';
</script>

<div class="p-6 space-y-10 pb-32">
    
    <section class="space-y-4">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-zinc-400">
                <Layers size={14} />
                <span class="text-[11px] font-bold uppercase tracking-widest">Active Layers</span>
            </div>
            <Button variant="ghost" size="sm" class="h-7 px-2 text-[10px] gap-1" onclick={() => canvasState.addBlob()}>
                <Plus size={12} /> Add Node
            </Button>
        </div>

        <div class="grid grid-cols-1 gap-2">
            {#each canvasState.blobs as blob (blob.id)}
                <button 
                    onclick={() => canvasState.selectedBlobId = blob.id}
                    class={cn(
                        "group flex items-center justify-between p-3 rounded-xl border transition-all duration-200",
                        canvasState.selectedBlobId === blob.id 
                            ? "bg-primary/10 border-primary/30 ring-1 ring-primary/20" 
                            : "bg-zinc-900/40 border-white/5 hover:border-white/10"
                    )}
                >
                    <div class="flex items-center gap-3">
                        <div class="w-4 h-4 rounded-full border border-white/20" style="background-color: {blob.color}"></div>
                        <span class="text-xs font-medium {canvasState.selectedBlobId === blob.id ? 'text-white' : 'text-zinc-500'}">
                            Node #{blob.id}
                        </span>
                    </div>
                    
                    {#if canvasState.blobs.length > 1}
                        <button 
                            onclick={(e) => { e.stopPropagation(); canvasState.removeBlob(blob.id); }}
                            class="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-destructive/10 hover:text-destructive rounded-md transition-all"
                        >
                            <Trash2 size={12} />
                        </button>
                    {/if}
                </button>
            {/each}
        </div>
    </section>

    <div class="h-px bg-white/5"></div>

    {#if canvasState.selectedBlob}
        <section class="space-y-6 animate-fade-in">
            <div class="flex items-center gap-2 text-zinc-400">
                <Sliders size={14} />
                <span class="text-[11px] font-bold uppercase tracking-widest">Node Appearance</span>
            </div>

            <ColorSection />

            <SizeSlider />
        </section>
    {/if}

    <div class="h-px bg-white/5"></div>

    <section class="space-y-6">
        <div class="flex items-center gap-2 text-zinc-400">
            <Palette size={14} />
            <span class="text-[11px] font-bold uppercase tracking-widest">Scene Effects</span>
        </div>

        <NoiseToggle />
    </section>

</div>
