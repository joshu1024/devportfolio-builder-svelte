<script lang="ts">
    import Input  from "../ui/Input.svelte";
    import Textarea from "../ui/Textarea.svelte";
    import SectionCard from "../ui/SectionCard.svelte";
    import type {Project} from "../../types/portfolio";

    interface Props {
        project:Project;
        index:number;
        onDelete:()=>void;
    }

    let{project,index,onDelete}:Props = $props();
</script>
<SectionCard title={`Project ${index + 1}`}>
<div class="space-y-4">
   <Input label="Title" bind:value={project.title}/>
   <Textarea label="Description" bind:value={project.description} placeholder="Describe your project"/>
    <Input label="Github" bind:value={project.github}/>
    <Input label="Live Demo" bind:value={project.liveDemo}/>
</div>
</SectionCard>
<button onclick={onDelete} class="bg-blue-600 transition hover:bg-blue-700  px-4 py-2 rounded-lg mt-4 text-white">Delete Project</button>
