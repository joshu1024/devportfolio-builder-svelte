<script lang="ts">
	import { icons, type IconName } from '$lib/icons';

	interface Props {
		name: IconName;
		size?: number;
		class?: string;
	}

	let {
		name,
		size = 20,
		class: className = ''
	}: Props = $props();

	const IconComponent = icons[name];
</script>

<IconComponent
	size={size}
	class={className}
/>