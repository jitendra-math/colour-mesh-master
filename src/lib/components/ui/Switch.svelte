<script>
    import { cn } from '$utils/cn';

    let { 
        checked = $bindable(false), 
        label, 
        onclick, 
        disabled = false,
        class: className = "" 
    } = $props();
</script>

<div class={cn("flex items-center justify-between gap-4 py-1", className)}>
    {#if label}
        <span class="text-sm font-medium text-zinc-300 select-none">
            {label}
        </span>
    {/if}

    <button
        type="button"
        role="switch"
        aria-checked={checked}
        {disabled}
        onclick={() => {
            if (!disabled) {
                checked = !checked;
                onclick?.(checked);
            }
        }}
        class={cn(
            "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
            checked ? "bg-primary" : "bg-zinc-700"
        )}
    >
        <span
            class={cn(
                "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out",
                checked ? "translate-x-5" : "translate-x-1"
            )}
        ></span>
    </button>
</div>
