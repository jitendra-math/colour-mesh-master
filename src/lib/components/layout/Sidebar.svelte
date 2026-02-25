<script>
    import { canvasState } from '$state/canvasState.svelte.js';
    import { cn } from '$utils/cn';
    import ControlPanel from '../controls/ControlPanel.svelte'; // Hum next file mein banayenge
</script>

<aside class="hidden md:flex flex-col w-[380px] h-full border-l border-white/5 bg-zinc-950/80 backdrop-blur-2xl z-30 shadow-[-20px_0_50px_rgba(0,0,0,0.3)]">
    
    <div class="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900/20">
        <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span class="text-white font-black text-sm">M</span>
            </div>
            <div>
                <h2 class="text-sm font-bold text-white tracking-tight uppercase">Mesh Master</h2>
                <p class="text-[10px] text-zinc-500 font-medium tracking-widest">PRO STUDIO v1.0</p>
            </div>
        </div>
        
        <div class="flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-[10px] font-bold text-emerald-500 uppercase">Live</span>
        </div>
    </div>

    <div class="flex-1 overflow-y-auto custom-scrollbar overflow-x-hidden">
        <ControlPanel />
    </div>

    <div class="p-6 border-t border-white/5 bg-zinc-900/20 space-y-4">
        <div class="flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>Project: Untiltled_Mesh</span>
            <span>2026_EDITION</span>
        </div>
    </div>
</aside>

<style>
    /* Sidebar specific scrollbar styling */
    .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.2);
    }
</style>
