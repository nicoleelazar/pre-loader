const gallery = document.getElementById("gallery");

// read all jpg files in assets folder

let assets = { jpg: 6 };

for (let key in assets) {
	for (let i = 0; i < assets[key]; i++) {
		let src = "assets/" + (i + 1) + "." + key;

		let img = new Image();
		img.src = src;
		gallery.appendChild(img);
	}
}
