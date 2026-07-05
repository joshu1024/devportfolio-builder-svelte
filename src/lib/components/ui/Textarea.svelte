<script lang="ts">
    interface Props {
        value:string;
        placeholder:string;
        label:string;
    }
    let {label,placeholder="",value=$bindable("")}:Props = $props()
</script>

<div class="space-y-2">
    <label for="">{label}</label>
    <textarea placeholder={placeholder} bind:value class="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 focus:border-blue-500 outline-none"></textarea>
</div>