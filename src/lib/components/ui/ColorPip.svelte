<script>
    import { cn } from '$utils/cn';

    let { 
        color, 
        active = false, 
        onclick, 
        class: className = "" 
    } = $props();
</script>

<button
    type="button"
    {onclick}
    class={cn(
        "relative group flex items-center justify-center rounded-full transition-all duration-300 active:scale-90",
        active ? "w-8 h-8" : "w-6 h-6 hover:w-8 hover:h-8",
        className
    )}
    aria-label="Select color {color}"
>
    <span 
        class="absolute inset-0 rounded-full border border-white/10 shadow-inner"
        style="background-color: {color};"
    ></span>

    <span 
        class={cn(
            "absolute -inset-1 rounded-full border-2 border-primary/40 opacity-0 transition-opacity duration-300",
            active ? "opacity-100 scale-100" : "group-hover:opacity-50 group-hover:scale-105"
        )}
    ></span>

    {#if active}
        <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="3" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            class="w-3 h-3 text-white z-10 drop-shadow-sm animate-fade-in"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    {/if}
</button>
