<script>
    import { canvasState } from '$state/canvasState.svelte.js';
</script>

<div 
    class="absolute inset-0 pointer-events-none z-[5] mix-blend-overlay"
    style="opacity: {canvasState.noiseOpacity};"
>
    <svg width="100%" height="100%" class="opacity-100" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
            <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.65" 
                numOctaves="3" 
                stitchTiles="stitch" 
            />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
</div>

<style>
    /* SVG filters can sometimes be heavy, but feTurbulence on a rect is very efficient */
    div {
        /* contrast badhane ke liye overlay use karte hain */
        filter: contrast(150%) brightness(100%);
    }
</style>
