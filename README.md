Reproducing the svelte-Edge-input-hydration bug

Edge does not actually remove the value attribute from an input when you call removeAttribute. Because we assume iteration always makes progress, this causes an infinite loop in svelte when hydrating an input element that has a value attribute in the svelte render but no value attribute in the rendered HTML
