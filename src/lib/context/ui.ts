import { getContext, setContext } from "svelte";

export type Section =
	| "Hero"
	| "About"
	| "Projects"
	| "Skills"
	| "Experience"
	| "Education"
	| "Theme" |"Contact";

const UI_KEY = Symbol();

export interface UIState {
	activeSection: Section;
}

export function setUIContext(state: UIState) {
	setContext(UI_KEY, state);
}

export function getUIContext() {
	return getContext<UIState>(UI_KEY);
}