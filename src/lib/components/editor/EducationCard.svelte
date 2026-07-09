<script lang="ts">
	import type { Education } from "$lib/types/portfolio";

	interface Props {
		education: Education;
		index: number;
		onDelete: () => void;
	}

	let { education, index, onDelete }: Props = $props();
</script>

<div class="space-y-4 rounded-xl border border-zinc-700 p-4">

	<h3 class="font-semibold">
		Education {index + 1}
	</h3>

	<input
		bind:value={education.school}
		placeholder="Company"
		class="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-2"
	/>

	<input
		bind:value={education.degree}
		placeholder="Role"
		class="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-2"
	/>

	<input
		bind:value={education.duration}
		placeholder="Duration"
		class="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-2"
	/>

	<textarea
		bind:value={education.description}
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