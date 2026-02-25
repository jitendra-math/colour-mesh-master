<script>
    import { canvasState } from '$state/canvasState.svelte.js';
    import { cn } from '$utils/cn';

    // Bloom effect ke liye background color ka subtle version chahiye hota hai
    // Hum inline styles use karenge taaki reactivity fast rahe
</script>

<div class="absolute inset-0 overflow-hidden bg-background z-0">
    <div 
        class="absolute inset-[-10%] transition-all duration-700 ease-in-out"
        style="filter: blur({canvasState.glassBlur}px);"
    >
        {#each canvasState.blobs as blob (blob.id)}
            <div
                class="absolute rounded-full mix-blend-screen transition-all duration-1000 ease-in-out"
                style="
                    width: {blob.size}%; 
                    height: {blob.size}%; 
                    left: {blob.x}%; 
                    top: {blob.y}%; 
                    background: radial-gradient(circle at center, {blob.color} 0%, transparent 70%);
                    opacity: {blob.opacity};
                    transform: translate(-50%, -50%);
                "
            ></div>
        {/each}
    </div>

    <div 
        class="absolute inset-0 opacity-20 pointer-events-none"
        style="background: radial-gradient(circle at 50% 50%, {canvasState.blobs[0]?.color} 0%, transparent 100%);"
    ></div>
</div>

<style>
    /* Performance Trick: 
       Large blurs GPU par heavy hote hain. 
       'will-change' browser ko batata hai ki ye layer animate hogi.
    */
    div {
        will-change: filter, transform;
    }
</style>
