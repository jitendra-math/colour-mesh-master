<script>
    import { canvasState } from '$state/canvasState.svelte.js';
    import { generateCSS, generateTailwindConfig } from '$utils/cssGenerator';
    import { Button } from '$ui';
    import { X, Copy, Check, Terminal, FileCode } from 'lucide-svelte';
    import { cn } from '$utils/cn';

    let { open = $bindable(false) } = $props();
    
    let activeTab = $state('css'); // 'css' | 'tailwind'
    let copied = $state(false);

    // Computed code based on state
    let code = $derived(
        activeTab === 'css' 
            ? generateCSS(canvasState) 
            : generateTailwindConfig(canvasState)
    );

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(code);
            copied = true;
            setTimeout(() => copied = false, 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    }
</script>

{#if open}
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <div 
            class="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in" 
            onclick={() => open = false}
        ></div>

        <div class="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-scale-in">
            
            <div class="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900/20">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Terminal size={18} class="text-primary" />
                    </div>
                    <div>
                        <h3 class="text-sm font-bold text-white uppercase tracking-tight">Export Code</h3>
                        <p class="text-[10px] text-zinc-500 font-medium">Ready for production</p>
                    </div>
                </div>
                <button 
                    onclick={() => open = false}
                    class="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-500 hover:text-white"
                >
                    <X size={20} />
                </button>
            </div>

            <div class="flex p-1 bg-zinc-900/50 border-b border-white/5">
                <button 
                    onclick={() => activeTab = 'css'}
                    class={cn(
                        "flex-1 flex items-center justify-center gap-2 py-3 text-[11px] font-bold uppercase tracking-widest transition-all",
                        activeTab === 'css' ? "text-white bg-zinc-800 rounded-lg shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                    )}
                >
                    <FileCode size={14} /> Vanilla CSS
                </button>
                <button 
                    onclick={() => activeTab = 'tailwind'}
                    class={cn(
                        "flex-1 flex items-center justify-center gap-2 py-3 text-[11px] font-bold uppercase tracking-widest transition-all",
                        activeTab === 'tailwind' ? "text-white bg-zinc-800 rounded-lg shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                    )}
                >
                    <Terminal size={14} /> Tailwind Config
                </button>
            </div>

            <div class="relative flex-1 p-6 bg-black/40 group">
                <pre class="w-full h-[300px] overflow-auto custom-scrollbar text-[13px] font-mono leading-relaxed text-zinc-300 selection:bg-primary/40">
                    <code>{code}</code>
                </pre>

                <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                        variant={copied ? "primary" : "secondary"} 
                        size="sm" 
                        onclick={copyToClipboard}
                        class="gap-2 h-9 px-4 rounded-xl"
                    >
                        {#if copied}
                            <Check size={14} /> Copied!
                        {:else}
                            <Copy size={14} /> Copy Code
                        {/if}
                    </Button>
                </div>
            </div>

            <div class="p-6 bg-zinc-900/20 border-t border-white/5 flex items-center justify-between">
                <p class="text-[10px] text-zinc-500 font-mono">
                    // Optimized for React, Next.js, and Svelte
                </p>
                <Button variant="ghost" size="sm" onclick={() => open = false}>
                    Dismiss
                </Button>
            </div>
        </div>
    </div>
{/if}

<style>
    .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }
    
    @keyframes scale-in {
        from { opacity: 0; transform: scale(0.95) translateY(10px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .animate-scale-in {
        animation: scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
</style>
