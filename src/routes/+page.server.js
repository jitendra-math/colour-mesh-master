/**
 * Mesh Master Pro - Server Engine (JSS Originals)
 * Handles initial data loading and SEO metadata.
 */

export async function load() {
    // 1. Imagine these coming from your Appwrite database or a CMS
    const trendingPresets = [
        {
            id: 'aurora-1',
            name: 'Arctic Aurora',
            colors: ['#00d2ff', '#3a7bd5', '#92fe9d'],
            author: 'Jitu Nimod'
        },
        {
            id: 'sunset-pro',
            name: 'Desert Mirage',
            colors: ['#f83600', '#f9d423', '#ff0076'],
            author: 'JS Nimod'
        },
        {
            id: 'royal-glass',
            name: 'Midnight Glass',
            colors: ['#0f0c29', '#302b63', '#24243e'],
            author: 'JSS Originals'
        }
    ];

    return {
        // Initial data for the page
        presets: trendingPresets,
        
        // SEO Metadata for Social Sharing (Open Graph)
        meta: {
            title: "Mesh Master Pro | High-End Gradient Engine",
            description: "Create premium, Apple-style mesh gradients for your next web project. Built by JSS Originals.",
            image: "https://jitendrasingh.online/og-image.png", // Tera personal domain
            url: "https://jitendrasingh.online/mesh-master"
        }
    };
}

/**
 * Form Actions: Agar tujhe 'Save to Gallery' ya 'Feedback'
 * feature chahiye toh yahan actions likhenge.
 */
export const actions = {
    savePreset: async ({ request }) => {
        const data = await request.formData();
        const meshState = data.get('state');
        
        // Yahan Appwrite ya database save logic aayega
        console.log("Saving Masterpiece to Database:", meshState);
        
        return { success: true };
    }
};
