<script>
    import "../app.css";
    import { onMount } from 'svelte';

    let { children } = $props();

    // Prevent body scrolling globally for that "App Feel"
    onMount(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        
        // Anti-Right Click (Optional: For that Pro Software vibe)
        const handleContextMenu = (e) => {
            // e.preventDefault(); 
        };

        window.addEventListener('contextmenu', handleContextMenu);
        return () => window.removeEventListener('contextmenu', handleContextMenu);
    });
</script>

<div class="relative min-h-screen w-full bg-zinc-950 selection:bg-primary/20 selection:text-primary-foreground">
    
    <div class="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

    {@render children()}

</div>

<style>
    :global(html) {
        /* Smooth scrolling behavior if needed */
        scroll-behavior: smooth;
        /* Disable long-press context menu on mobile for better touch experience */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
    }

    /* Target inputs and text specifically to allow selection */
    :global(input, textarea, [contenteditable="true"]) {
        -webkit-user-select: text;
        user-select: text;
    }
</style>
