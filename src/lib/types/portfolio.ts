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
export interface Portfolio {
	hero: Hero;
   about:About
}