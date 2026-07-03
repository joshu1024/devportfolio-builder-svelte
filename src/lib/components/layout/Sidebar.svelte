<script lang="ts">
    import NavItem from "../ui/NavItem.svelte";
   import type { NavigationItem } from '$lib/types/navigation';

    const items:NavigationItem[] = [
	{
		title: 'Hero',
		icon: 'house',
		active: true
	},
	{
		title: 'About',
		icon: 'user'
	},
	{
		title: 'Projects',
		icon: 'projects'
	},
	{
		title: 'Skills',
		icon: 'skills'
	},
	{
		title: 'Experience',
		icon: 'experience'
	},
	{
		title: 'Education',
		icon: 'education'
	},
	{
		title: 'Contact',
		icon: 'contact'
	},
	{
		title: 'Theme',
		icon: 'theme'
	}
];
</script>

<aside class="w-[280px] border-r border-zinc-800  bg-zinc-950 p-4">
    <h2 class="mb-5 text-sm font-semibold uppercase tracking-widest text-zinc-500">Sections</h2>
   <div class="space-y-2">
     {#each items as item(item.title) }
        <NavItem {...item}/>
    {/each}
   </div>
</aside>
