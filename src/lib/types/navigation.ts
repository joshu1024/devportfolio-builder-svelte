import type { IconName } from '$lib/icons';

export interface NavigationItem {
	title: string;
	icon: IconName;
	active?: boolean;
}