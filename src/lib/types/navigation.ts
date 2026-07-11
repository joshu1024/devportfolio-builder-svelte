import type { IconName } from '$lib/icons';
import type {Section} from "$lib/context/ui"
export interface NavigationItem {
	title: Section;
	icon: IconName;
}