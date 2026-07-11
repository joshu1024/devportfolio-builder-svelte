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
export interface Education {
	id: number;
	school: string;
	degree: string;
	duration: string;
	description: string;
}
export interface Theme {
	accent: string;
	fontSize: number;
	borderRadius: number;
	darkMode: boolean;
}
export interface Contact {
	email: string;
	phone: string;
	location: string;
	github: string;
	linkedin: string;
	website: string;
}
export interface Portfolio {
   hero: Hero;
   about:About;
   projects:Project[];
   skills:string[];
   experience:Experience[];
   education:Education[];
   theme:Theme;
   contact:Contact;
}