<script lang="ts">
    interface Props {
        label:string;
        checked?:boolean
    }
    let {label,checked = $bindable(false)}:Props = $props();
</script>

<div class="">
    <input bind:checked type="checkbox" class="h-4 w-4 rounded border-zinc-700 accent-blue-600">
    <span class="text-sm text-zinc-300">{label}</span>
</div>