<script lang="ts">
	import EditorPanel from "./EditorPanel.svelte";
    import Header from "./Header.svelte";
	import PreviewPanel from "./PreviewPanel.svelte";
    import Sidebar from "./Sidebar.svelte";
    import type { Portfolio } from "$lib/types/portfolio";
     let portfolio = $state<Portfolio>({
        hero:{
            name:"Joshua Kipamet",
            title:"Fullstack Engineer",
            bio:"Building scalable typescript applications"
    
        }    
    })

</script>
<div class="flex h-screen flex-col bg-zinc-950 text-zinc-100">
    <Header/>
    <div class="flex flex-1 overflow-hidden">
        <Sidebar/>
        <main class="grid flex-1 grid-cols-2 gap-6 overflow-auto p-6">

        <EditorPanel {portfolio}/>

        <PreviewPanel {portfolio}/>

        </main>
    </div>
</div>