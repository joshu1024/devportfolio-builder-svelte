<script lang="ts">
	import Icon from "./Icon.svelte"
	import type { IconName } from "$lib/icons";
	interface Props {
		title: string;
		icon: IconName;
		active?: boolean;
	}

	let { title, icon, active = false }: Props = $props();
</script>

<button
	class={`flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
		active
			? "bg-blue-600 text-white"
			: "text-zinc-400 hover:bg-zinc-800 hover:text-white"
	}`}
>
	<Icon name={icon} size={20} />

	<span>{title}</span>
</button>