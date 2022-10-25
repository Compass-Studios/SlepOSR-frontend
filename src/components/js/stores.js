import { writable, derived } from 'svelte/store';

export const term = writable('');
export const items = writable(["Hoodie", "T-Shirt", "Pants", "Jacket"]);
export const filtered = derived(
    [term, items],
    ([$term, $items]) => $items.filter(x => x.includes($term))
);