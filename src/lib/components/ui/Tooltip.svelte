<script>
    import { cn } from '$utils/cn';

    let { 
        children, 
        text, 
        position = 'top',
        class: className = "" 
    } = $props();

    let visible = $state(false);

    const positions = {
        top: "-top-10 left-1/2 -translate-x-1/2",
        bottom: "-bottom-10 left-1/2 -translate-x-1/2",
        left: "top-1/2 -right-2 translate-x-full -translate-y-1/2",
        right: "top-1/2 -left-2 -translate-x-full -translate-y-1/2"
    };
</script>

<div 
    class="relative inline-block group"
    onmouseenter={() => visible = true}
    onmouseleave={() => visible = false}
    role="tooltip"
>
    {@render children()}

    {#if visible && text}
        <div 
            class={cn(
                "absolute z-[100] px-2 py-1 bg-zinc-800 text-white text-[10px] font-bold uppercase tracking-widest rounded border border-white/10 shadow-2xl whitespace-nowrap pointer-events-none animate-fade-in",
                positions[position],
                className
            )}
        >
            {text}
            <div class={cn(
                "absolute w-1.5 h-1.5 bg-zinc-800 border-white/10 rotate-45",
                position === 'top' ? "bottom-[-4px] left-1/2 -translate-x-1/2 border-r border-b" : "",
                position === 'bottom' ? "top-[-4px] left-1/2 -translate-x-1/2 border-l border-t" : ""
            )}></div>
        </div>
    {/if}
</div>

<style>
    @keyframes fade-in {
        from { opacity: 0; transform: scale(0.95) translateY(4px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
    }
    :global(.animate-fade-in) {
        animation: fade-in 0.15s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
</style>
