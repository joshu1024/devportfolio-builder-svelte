<script lang="ts">
	import type { Experience } from "$lib/types/portfolio";
	import TextField from "../ui/TextField.svelte";

	interface Props {
		experience: Experience;
		index: number;
		onDelete: () => void;
	}

	let { experience, index, onDelete }: Props = $props();
</script>
	
<div class="space-y-4 rounded-xl border border-zinc-700 p-4">

	<h3 class="font-semibold">
		Experience {index + 1}
	</h3>

		<TextField
		label="Company"
		bind:value={experience.company}
		/>

		<TextField
			label="Role"
			bind:value={experience.role}
		/>

		<TextField
			label="Duration"
			bind:value={experience.duration}
		/>

		<textarea
			bind:value={experience.description}
			rows="3"
			placeholder="Description"
			class="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-2"
		/>

		<button
			onclick={onDelete}
			class="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
		>
			Delete Experience
		</button>

</div>