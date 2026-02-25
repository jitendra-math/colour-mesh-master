/**
 * UI State Manager (JSS Originals)
 * Iska kaam hai poore app ki visibility aur toggles ko manage karna.
 */
class UIState {
    // Mobile Drawer visibility
    isDrawerOpen = $state(false);
    
    // Export Modal visibility
    isCodeModalOpen = $state(false);
    
    // App Theme / UI Overlays
    showGrid = $state(true);
    
    // Help users with a 'Success' message after copy/download
    notification = $state({
        show: false,
        message: "",
        type: "info" // 'info' | 'success' | 'error'
    });

    // Actions
    toggleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
    }

    toggleCodeModal() {
        this.isCodeModalOpen = !this.isCodeModalOpen;
    }

    notify(message, type = "success") {
        this.notification = { show: true, message, type };
        setTimeout(() => {
            this.notification.show = false;
        }, 3000);
    }
}

export const uiState = new UIState();
