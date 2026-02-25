<script>
    import { canvasState } from '$state/canvasState.svelte.js';
    import ColorPip from '../ui/ColorPip.svelte';
    import { Pipette } from 'lucide-svelte';

    // Premium Color Palette Presets (Modern UI Trends)
    const presets = [
        '#4f46e5', '#9333ea', '#06b6d4', '#e11d48', 
        '#f59e0b', '#10b981', '#6366f1', '#f43f5e',
        '#ffffff', '#000000'
    ];

    // Helper to update color
    function updateColor(newColor) {
        if (canvasState.selectedBlob) {
            canvasState.updateBlob(canvasState.selectedBlobId, { color: newColor });
        }
    }
</script>

<div class="space-y-4">
    <div class="flex items-center gap-2">
        <Pipette size={12} class="text-zinc-500" />
        <span class="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Color Palette</span>
    </div>

    <div class="flex flex-wrap gap-2.5">
        {#each presets as color}
            <ColorPip 
                {color} 
                active={canvasState.selectedBlob?.color === color}
                onclick={() => updateColor(color)}
            />
        {/each}
        
        <div class="relative w-8 h-8 rounded-full border border-white/10 overflow-hidden bg-zinc-800 hover:border-white/20 transition-all active:scale-90">
            <input 
                type="color" 
                value={canvasState.selectedBlob?.color} 
                oninput={(e) => updateColor(e.target.value)}
                class="absolute inset-0 w-[150%] h-[150%] -translate-x-[15%] -translate-y-[15%] cursor-pointer opacity-0"
            />
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="w-3 h-3 rounded-full border border-white/40" style="background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red)"></div>
            </div>
        </div>
    </div>

    <div class="flex items-center gap-2 mt-4 bg-zinc-900/50 border border-white/5 rounded-lg p-1 px-3 focus-within:border-primary/50 transition-all">
        <span class="text-xs font-mono text-zinc-600">#</span>
        <input 
            type="text" 
            maxlength="7"
            value={canvasState.selectedBlob?.color.replace('#', '')} 
            oninput={(e) => {
                let val = e.target.value;
                if(val.length === 6 || val.length === 3) updateColor('#' + val);
            }}
            class="flex-1 bg-transparent border-none text-xs font-mono text-zinc-200 outline-none uppercase placeholder:text-zinc-700"
            placeholder="FFFFFF"
        />
        <div class="w-4 h-4 rounded border border-white/10" style="background-color: {canvasState.selectedBlob?.color}"></div>
    </div>
</div>
