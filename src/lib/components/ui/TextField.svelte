<script lang="ts">
	interface Props {
		label: string;
		placeholder?: string;
		value: string;
	}

	let { label, placeholder = "", value = $bindable() }: Props = $props();
</script>

<div class="space-y-2">
	<label class="text-sm font-medium text-zinc-300">
		{label}
	</label>

	<input
		bind:value
		{placeholder}
		class="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-2"
	/>
</div>