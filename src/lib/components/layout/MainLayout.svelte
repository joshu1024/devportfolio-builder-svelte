<script lang="ts">
	import EditorPanel from "./EditorPanel.svelte";
    import Header from "./Header.svelte";
	import PreviewPanel from "./PreviewPanel.svelte";
    import Sidebar from "./Sidebar.svelte";
    import type { Portfolio } from "$lib/types/portfolio";
    import {setPortfolioContext} from "../../../lib/context/portfolio.ts"

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
         ],
        experience: [
            {
                id: 1,
                company: "OpenAI",
                role: "Full-Stack Engineer",
                duration: "2025 - Present",
                description: "Building scalable AI applications."
            }
         ],
        education: [
         {
            id: 1,
            school: "JKUAT",
            degree: "BSc Computer Science",
            duration: "2022 - Present",
            description: "Focused on software engineering and distributed systems."
         }
        ]
     })
    setPortfolioContext(portfolio);
</script>
<div class="flex h-screen flex-col bg-zinc-950 text-zinc-100">
    <Header/>
    <div class="flex flex-1 overflow-hidden">
        <Sidebar/>
        <main class="grid flex-1 grid-cols-2 gap-6 overflow-auto p-6">

       <div class="overflow-y-auto pr-2"> <EditorPanel/></div>

        <div class="overflow-y-auto pr-2"><PreviewPanel/></div>

        </main>
    </div>
</div>