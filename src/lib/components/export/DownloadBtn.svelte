<script>
    import { canvasState } from '$state/canvasState.svelte.js';
    import { exportAsPNG } from '$utils/imageExporter';
    import { Button } from '$ui';
    import { Download, Loader2, CheckCircle2 } from 'lucide-svelte';

    let isExporting = $state(false);
    let isSuccess = $state(false);

    async function handleDownload() {
        if (isExporting) return;
        
        isExporting = true;
        try {
            // Hum 2K resolution (2560x1440) export kar rahe hain for premium quality
            await exportAsPNG(canvasState, 2560, 1440);
            
            // Success Feedback
            isSuccess = true;
            setTimeout(() => isSuccess = false, 3000);
        } catch (error) {
            console.error("Export Failed:", error);
            alert("Bhai, export mein kuch panga ho gaya. Console check kar!");
        } finally {
            isExporting = false;
        }
    }
</script>

<Button 
    variant={isSuccess ? "secondary" : "primary"} 
    size="sm" 
    onclick={handleDownload}
    disabled={isExporting}
    class="gap-2 shadow-xl shadow-primary/20 min-w-[140px] transition-all duration-500"
>
    {#if isExporting}
        <Loader2 size={16} class="animate-spin" />
        <span>Processing...</span>
    {:else if isSuccess}
        <CheckCircle2 size={16} class="text-emerald-500" />
        <span class="text-emerald-500">Saved!</span>
    {:else}
        <Download size={16} />
        <span class="hidden sm:inline">Export PNG</span>
    {/if}
</Button>
