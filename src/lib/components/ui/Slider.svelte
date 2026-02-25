<script>
    import { cn } from '$utils/cn';

    let { 
        label, 
        value = $bindable(), 
        min = 0, 
        max = 100, 
        step = 1, 
        suffix = "", 
        class: className = "" 
    } = $props();
</script>

<div class={cn("space-y-3 w-full", className)}>
    {#if label}
        <div class="flex justify-between items-center px-0.5">
            <label class="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                {label}
            </label>
            <span class="text-xs font-mono font-medium text-zinc-400 bg-zinc-900/50 px-1.5 py-0.5 rounded border border-zinc-800/50">
                {value}{suffix}
            </span>
        </div>
    {/if}

    <div class="relative flex items-center group">
        <input 
            type="range" 
            {min} 
            {max} 
            {step} 
            bind:value={value}
            class="slider-input w-full h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer outline-none transition-all group-hover:bg-zinc-700 focus:ring-1 focus:ring-primary/40"
        />
    </div>
</div>

<style>
    /* Custom Slider Thumb - Chrome/Safari/Edge */
    .slider-input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        background: #fafafa; /* foreground variable */
        border-radius: 50%;
        cursor: pointer;
        border: 4px solid #18181b; /* zinc-900 */
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        transition: transform 0.1s ease-in-out, background 0.2s;
    }

    .slider-input::-webkit-slider-thumb:hover {
        transform: scale(1.1);
        background: #ffffff;
    }

    .slider-input::-webkit-slider-thumb:active {
        transform: scale(0.95);
        background: #a855f7; /* Primary color hint on press */
    }

    /* Firefox Support */
    .slider-input::-moz-range-thumb {
        width: 14px;
        height: 14px;
        background: #fafafa;
        border-radius: 50%;
        cursor: pointer;
        border: 4px solid #18181b;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }
</style>
