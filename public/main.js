let speed = 1,
	index = 0,
	key = '';

function toggleCursor() {
	cursor.style.color = 'transparent' === cursor.style.color ? 'inherit' : 'transparent';
}

function type(e) {
	if (e.key === 'Backspace') {
		index -= 2;
	}

	if (key === e.key && e.key !== 'Backspace') return;
	key = e.key;

	typer.textContent = source.substring(0, index + 1);
	index += 1;
	bottom_padding.scrollIntoView(!1);
	localStorage.setItem('source', typer.textContent);
}

window.addEventListener('keydown', type);

// To prevent someone from typing by just holding down a keyboard key
window.addEventListener('keyup', (e) => {
	if (key === e.key) key = '';
});

setInterval(toggleCursor, 500);
