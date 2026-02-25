<script>
    import { canvasState } from '$state/canvasState.svelte.js';
    import { cn } from '$utils/cn';
</script>

<div 
    class="absolute inset-0 z-20 pointer-events-none transition-all duration-500"
    style="
        backdrop-filter: blur({canvasState.glassBlur * 0.5}px) saturate(150%);
        background: radial-gradient(
            circle at 50% 0%, 
            rgba(255, 255, 255, 0.05) 0%, 
            transparent 75%
        );
    "
>
    <div class="absolute inset-0 border border-white/10 rounded-[inherit] shadow-inner"></div>

    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div>

<style>
    /* Performance optimization for heavy backdrop blurs */
    div {
        will-change: backdrop-filter;
    }
</style>
