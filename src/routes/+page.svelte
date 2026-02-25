<script>
	// 1. Global State & Logic Imports
	import { uiState } from '$state/uiState.svelte.js';
	
	// 2. Modular Layout Components
	import Header from '$lib/components/layout/Header.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import MobileDrawer from '$lib/components/layout/MobileDrawer.svelte';
	import Artboard from '$lib/components/core/Artboard.svelte';
	
	// 3. Export & Modals
	import CodeModal from '$lib/components/export/CodeModal.svelte';
	
	// 4. Icons for the Mobile FAB (Floating Action Button)
	import { Settings, Share2 } from 'lucide-svelte';
	import { Button } from '$ui';
</script>

<main class="relative flex h-screen w-screen overflow-hidden bg-zinc-950 font-sans antialiased text-white selection:bg-primary/30">
	
	<section class="relative flex-1 h-full flex flex-col overflow-hidden">
		
		<Header onOpenCode={() => uiState.isCodeModalOpen = true} />

		<div class="flex-1 w-full h-full">
			<Artboard />
		</div>

		<div class="md:hidden absolute bottom-8 left-0 right-0 z-40 flex justify-center px-6">
			<div class="flex items-center gap-2 p-2 bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
				<Button 
					variant={uiState.isDrawerOpen ? "primary" : "ghost"} 
					size="icon" 
					onclick={() => uiState.toggleDrawer()}
					class="rounded-xl"
				>
					<Settings size={20} />
				</Button>
				<div class="w-px h-6 bg-white/10 mx-1"></div>
				<Button variant="ghost" size="icon" class="rounded-xl">
					<Share2 size={20} />
				</Button>
			</div>
		</div>
	</section>

	<Sidebar />

	<MobileDrawer bind:open={uiState.isDrawerOpen} />
	<CodeModal bind:open={uiState.isCodeModalOpen} />

</main>

<style>
	/* Isse +layout.svelte mein bhi daal sakte ho, par yahan rehne dena bhi safe hai */
	:global(body) {
		overflow: hidden;
		overscroll-behavior: none;
	}
</style>
