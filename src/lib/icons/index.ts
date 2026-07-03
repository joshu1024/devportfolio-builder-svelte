import {
	House,
	User,
	FolderKanban,
	FolderOpen,
	GraduationCap,
	BriefcaseBusiness,
	Mail,
	Palette
} from 'lucide-svelte';

export const icons = {
	house: House,
	user: User,
	projects: FolderKanban,
	skills: FolderOpen,
	experience: BriefcaseBusiness,
	education: GraduationCap,
	contact: Mail,
	theme: Palette
};

export type IconName = keyof typeof icons;