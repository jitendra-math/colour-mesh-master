<script>
    import { Button } from '$ui';
    import { Code, Share2, Crown } from 'lucide-svelte';
    import DownloadBtn from '../export/DownloadBtn.svelte';

    let { onOpenCode } = $props(); // Parent se function aayega modal kholne ke liye
</script>

<header class="absolute top-0 left-0 right-0 z-40 p-4 md:p-6 flex items-center justify-between pointer-events-none">
    <div class="flex items-center gap-3 pointer-events-auto group">
        <div class="w-10 h-10 rounded-xl bg-zinc-900/50 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
            <span class="text-primary font-black text-xl">M</span>
        </div>
        <div class="hidden sm:block">
            <h1 class="text-[10px] font-black tracking-[0.3em] uppercase text-white/40 leading-none mb-1">Studio</h1>
            <h2 class="text-sm font-bold text-white tracking-tight leading-none">MESH MASTER</h2>
        </div>
    </div>

    <div class="flex items-center gap-2 pointer-events-auto">
        <Button 
            variant="outline" 
            size="sm" 
            onclick={onOpenCode}
            class="hidden md:flex gap-2 backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10"
        >
            <Code size={14} /> <span>Get Code</span>
        </Button>

        <DownloadBtn />
        
        <div class="hidden lg:flex items-center ml-2 pl-4 border-l border-white/10">
            <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Crown size={14} class="text-amber-900" />
            </div>
        </div>
    </div>
</header>
