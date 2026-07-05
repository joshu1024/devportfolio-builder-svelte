<script lang="ts">
    interface Props{
        label:string;
        placeholder?:string;
        value?:string;
    }
    let{label, placeholder = "",value=$bindable("")}:Props = $props()
</script>
<div class="space-y-2">
    <label  class="text-sm font-medium text-zinc-300">{label}</label>
    <input bind:value type="text" class="w-full rounded bg-zinc-900 border border-zinc-700 transition focus:border-blue-500 text-white" placeholder={placeholder}/>
</div>