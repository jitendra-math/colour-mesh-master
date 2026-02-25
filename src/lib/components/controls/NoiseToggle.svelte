<script>
    import { canvasState } from '$state/canvasState.svelte.js';
    import { Slider, Switch } from '$ui';
    import { Waves, Grid3X3, Sun } from 'lucide-svelte';
</script>

<div class="space-y-8 animate-fade-in">
    
    <div class="space-y-4">
        <div class="flex items-center gap-2 text-zinc-500">
            <Waves size={12} />
            <span class="text-[10px] font-bold uppercase tracking-widest">Global Diffusion</span>
        </div>
        
        <div class="p-4 bg-zinc-900/30 rounded-2xl border border-white/5">
            <Slider 
                label="Mesh Diffusion (Blur)" 
                bind:value={canvasState.glassBlur} 
                min={0} 
                max={120} 
                suffix="px" 
            />
        </div>
    </div>

    <div class="space-y-4">
        <div class="flex items-center gap-2 text-zinc-500">
            <Sun size={12} />
            <span class="text-[10px] font-bold uppercase tracking-widest">Texture Engine</span>
        </div>

        <div class="p-4 bg-zinc-900/30 rounded-2xl border border-white/5 space-y-6">
            <Slider 
                label="Grain Intensity" 
                bind:value={canvasState.noiseOpacity} 
                min={0} 
                max={0.2} 
                step={0.005} 
                suffix="" 
            />
            
            <div class="h-px bg-white/5"></div>
            
            <Switch 
                label="Enable Developer Grid" 
                bind:checked={canvasState.showGrid} 
            />
        </div>
    </div>

</div>
