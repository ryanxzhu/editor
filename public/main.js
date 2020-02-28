let index = 0,
	key = '';

const runSite = document.querySelector('#run-site');

function toggleCursor() {
	cursor.style.color = 'transparent' === cursor.style.color ? 'inherit' : 'transparent';
}

function type(e) {
	if (e.key === 'Backspace') {
		index -= 2;
	} else if (key === e.key) {
		return;
	}

	key = e.key;

	typer.textContent = source.substring(0, index + 1);
	index += 1;
	bottom_padding.scrollIntoView(!1);
}

window.addEventListener('keydown', type);

// To prevent someone from typing by just holding down a keyboard key
window.addEventListener('keyup', (e) => {
	if (key === e.key) key = '';
});

runSite.addEventListener('mousedown', function() {
	localStorage.setItem('source', typer.textContent);
});

setInterval(toggleCursor, 500);
