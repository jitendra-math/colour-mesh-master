<script>
    import { cn } from '$utils/cn';
    import { X } from 'lucide-svelte';
    import ControlPanel from '../controls/ControlPanel.svelte';

    let { open = $bindable(false) } = $props();
</script>

{#if open}
    <div 
        class="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-fade-in"
        onclick={() => open = false}
    >
        <div 
            class="absolute bottom-0 left-0 right-0 h-[85vh] bg-zinc-950 border-t border-white/10 rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col animate-slide-up"
            onclick={(e) => e.stopPropagation()}
        >
            <div class="flex flex-col items-center pt-4 pb-2 border-b border-white/5">
                <div class="w-12 h-1.5 bg-zinc-800 rounded-full mb-4"></div>
                <div class="w-full px-6 flex items-center justify-between">
                    <h3 class="text-sm font-bold uppercase tracking-widest text-zinc-400">Settings</h3>
                    <button onclick={() => open = false} class="p-2 bg-zinc-900 rounded-full">
                        <X size={18} />
                    </button>
                </div>
            </div>
            
            <div class="flex-1 overflow-y-auto px-2 custom-scrollbar">
                <ControlPanel />
            </div>
        </div>
    </div>
{/if}

<style>
    @keyframes slide-up {
        from { transform: translateY(100%); }
        to { transform: translateY(0); }
    }
    .animate-slide-up {
        animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
</style>
