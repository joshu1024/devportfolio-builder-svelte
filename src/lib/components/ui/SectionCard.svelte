<script lang="ts">
import type {Snippet} from "svelte"
    interface Props {
        title:string;
        children:Snippet;
    }
    let{title,children}:Props = $props();
</script>

<div class="border border-zinc-800 bg-zinc-950 rounded-2xl shadow-sm px-5 py-4">
    <div class="border-b border-zinc-800 px-6 py-4"><h2 class="font-semibold text-lg tracking-tight">{title}</h2></div>
    <div class="p-6">{@render children()}</div>
</div>