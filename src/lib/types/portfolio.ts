 export interface Hero {
    name:string;
    title:string;
    bio:string;
   }
export interface About {
      description:string;
      location:string;
      available:boolean;
   }   
export interface Project {
	id: number;
	title: string;
	description: string;
	github: string;
	liveDemo: string;
}  
export interface Experience {
	id: number;
	company: string;
	role: string;
	duration: string;
	description: string;
}
export interface Portfolio {
	hero: Hero;
   about:About;
   projects:Project[];
   skills:string[];
   experience:Experience[]
}