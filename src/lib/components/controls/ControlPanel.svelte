<script>
    import { canvasState } from '$state/canvasState.svelte.js';
    import { Button } from '$ui';
    import { Plus, Trash2, Layers, Sliders, Palette } from 'lucide-svelte';
    import { cn } from '$utils/cn';

    // Sub-components
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
            <Button 
                variant="ghost" 
                size="sm" 
                class="h-7 px-2 text-[10px] gap-1 hover:bg-zinc-800 text-zinc-400 hover:text-white" 
                onclick={() => canvasState.addBlob()}
            >
                <Plus size={12} /> Add Node
            </Button>
        </div>

        <div class="grid grid-cols-1 gap-2">
            {#each canvasState.blobs as blob, i (blob.id)}
                <div 
                    role="button"
                    tabindex="0"
                    onclick={() => canvasState.selectedBlobId = blob.id}
                    onkeydown={(e) => e.key === 'Enter' && (canvasState.selectedBlobId = blob.id)}
                    class={cn(
                        "group flex items-center justify-between p-3 rounded-xl border transition-all duration-200 cursor-pointer outline-none select-none",
                        canvasState.selectedBlobId === blob.id 
                            ? "bg-zinc-800/80 border-primary/50 ring-1 ring-primary/20 shadow-[0_0_20px_-5px_rgba(79,70,229,0.15)]" 
                            : "bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/80"
                    )}
                >
                    <div class="flex items-center gap-3">
                        <div class="w-4 h-4 rounded-full border border-white/20 shadow-inner" style="background-color: {blob.color}"></div>
                        
                        <span class={cn(
                            "text-xs font-medium transition-colors",
                            canvasState.selectedBlobId === blob.id ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                        )}>
                            Node #{i + 1}
                        </span>
                    </div>
                    
                    {#if canvasState.blobs.length > 1}
                        <button 
                            onclick={(e) => { 
                                e.stopPropagation(); // Parent click rokne ke liye
                                canvasState.removeBlob(blob.id); 
                            }}
                            class="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/10 hover:text-red-500 text-zinc-600 rounded-md transition-all focus:opacity-100"
                            aria-label="Delete layer"
                        >
                            <Trash2 size={12} />
                        </button>
                    {/if}
                </div>
            {/each}
        </div>
    </section>

    <div class="h-px bg-white/5 w-full"></div>

    {#if canvasState.selectedBlob}
        <section class="space-y-6 animate-fade-in">
            <div class="flex items-center gap-2 text-zinc-400">
                <Sliders size={14} />
                <span class="text-[11px] font-bold uppercase tracking-widest">Node Appearance</span>
            </div>

            <ColorSection />

            <SizeSlider />
        </section>
    {:else}
        <div class="p-4 rounded-xl border border-dashed border-white/10 text-center">
            <p class="text-xs text-zinc-500">Select a node to edit</p>
        </div>
    {/if}

    <div class="h-px bg-white/5 w-full"></div>

    <section class="space-y-6">
        <div class="flex items-center gap-2 text-zinc-400">
            <Palette size={14} />
            <span class="text-[11px] font-bold uppercase tracking-widest">Scene Effects</span>
        </div>

        <NoiseToggle />
    </section>

</div>
