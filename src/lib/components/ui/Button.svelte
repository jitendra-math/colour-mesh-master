<script>
    import { cn } from '$utils/cn';
    
    // Props using Svelte 5 syntax
    let { 
        children, 
        onclick, 
        type = 'button', 
        variant = 'primary', 
        size = 'md', 
        class: className = '',
        disabled = false,
        href = null,
        ...rest 
    } = $props();

    // Tailwind variants logic
    const variants = {
        primary: "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-[0.98]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]",
        outline: "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
        ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground active:bg-accent/50",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-[0.98]"
    };

    const sizes = {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10" // Square button for icons
    };

    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    // Computed class
    const buttonClass = cn(baseStyles, variants[variant], sizes[size], className);
</script>

{#if href}
    <a {href} class={buttonClass} {...rest}>
        {@render children()}
    </a>
{:else}
    <button {type} {onclick} class={buttonClass} {disabled} {...rest}>
        {@render children()}
    </button>
{/if}
