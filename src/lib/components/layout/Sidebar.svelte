<script lang="ts">
   import NavItem from "../ui/NavItem.svelte";
   import type { NavigationItem } from '$lib/types/navigation';
   import {fly} from "svelte/transition";
   import {getUIContext, type Section} from "$lib/context/ui"

	
    const items:NavigationItem[] = [
		{
			title: 'Hero',
			icon: 'house',
			
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
	let ui = getUIContext()
	function goToSection(section: Section) {
	ui.activeSection = section;

	document
		.getElementById(section)
		?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
}
</script>

<aside  class="w-[280px] border-r border-zinc-800  bg-zinc-950 p-4">
    <h2 class="mb-5 text-sm font-semibold uppercase tracking-widest text-zinc-500">Sections</h2>
   <div in:fly={{y:20, duration:300}} out:fly={{y:-20, duration:250}}  class="space-y-2">
     {#each items as item(item.title) }
        <NavItem
			title={item.title}
			icon={item.icon}
			active={ui.activeSection === item.title}
			onclick={() => goToSection(item.title)}
/>
    {/each}
   </div>
</aside>
