<script lang="ts">
    import Input  from "../ui/Input.svelte";
    import Textarea from "../ui/Textarea.svelte";
    import SectionCard from "../ui/SectionCard.svelte";
    import type {Project} from "../../types/portfolio";
    import {fly} from "svelte/transition"

    interface Props {
        project:Project;
        index:number;
        onDelete:()=>void;
        onMoveUp: () => void;
	onMoveDown: () => void;
    }

    let{project,index,onDelete,onMoveUp,onMoveDown}:Props = $props();
</script>
<SectionCard  title={`Project ${index + 1}`}>
<div in:fly={{ y: 20, duration: 250 }}
	out:fly={{ y: -20, duration: 200 }}  class="space-y-4">
    <div class="flex gap-2">

	<button onclick={onMoveUp}>
		↑
	</button>

	<button onclick={onMoveDown}>
		↓
	</button>

</div>
   <Input label="Title" bind:value={project.title}/>
   <Textarea label="Description" bind:value={project.description} placeholder="Describe your project"/>
    <Input label="Github" bind:value={project.github}/>
    <Input label="Live Demo" bind:value={project.liveDemo}/>
</div>
</SectionCard>
<button onclick={onDelete} class="bg-blue-600 transition hover:bg-blue-700  px-4 py-2 rounded-lg mt-4 text-white">Delete Project</button>
