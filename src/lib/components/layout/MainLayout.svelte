<script lang="ts">
	import EditorPanel from "./EditorPanel.svelte";
    import Header from "./Header.svelte";
	import PreviewPanel from "./PreviewPanel.svelte";
    import Sidebar from "./Sidebar.svelte";
</script>
<div class="flex h-screen flex-col bg-zinc-950 text-zinc-100">
    <Header/>
    <div class="flex flex-1 overflow-hidden">
        <Sidebar/>
        <main class="grid flex-1 grid-cols-2 gap-6 overflow-auto p-6">

        <EditorPanel/>

        <PreviewPanel/>

        </main>
    </div>
</div>