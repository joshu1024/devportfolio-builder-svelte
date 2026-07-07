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
    
        },
        about:{
            description:"I'm a passionate full-stack engineer focused on building scalable applications.",
            location: "Nairobi, Kenya",
            available: true
        } ,
        projects: [
	{
		id: 1,
		title: "Analytics Dashboard",
		description: "MERN analytics dashboard with Redux Toolkit shown Recharts data visualizations.",
		github: "https://github.com/...",
		liveDemo: "https://dashboard..."
	},
	{
		id: 2,
		title: "E-Commerce Platform",
		description: "Production-ready MERN e-commerce platform with JWT authentication, PayPal payments, admin product management, and scalable Redux Toolkit state architecture.",
		github: "https://github.com/...",
		liveDemo: "https://ecommerce..."
	}
        ],
        skills: [
        "TypeScript",
        "Svelte",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Prisma"
         ]
    })

</script>
<div class="flex h-screen flex-col bg-zinc-950 text-zinc-100">
    <Header/>
    <div class="flex flex-1 overflow-hidden">
        <Sidebar/>
        <main class="grid flex-1 grid-cols-2 gap-6 overflow-auto p-6">

       <div class="overflow-y-auto pr-2"> <EditorPanel {portfolio}/></div>

        <div class="overflow-y-auto pr-2"><PreviewPanel {portfolio}/></div>

        </main>
    </div>
</div>