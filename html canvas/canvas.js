function draw() {
	const canvas = document.getElementById("canvas");

	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");

		for (let i = 0; i < 10; i++) {
			roundedRect(ctx, 100, 100, 400, 400, 20, 4);
			i++;
		}
	}
}

window.addEventListener("load", draw);

function roundedRect(ctx, x, y, width, height, radius, rotate) {
	const faGrad = ctx.createLinearGradient(x, y, x + width, y + height);
	faGrad.addColorStop(0, "#F15623");
	faGrad.addColorStop(1, "#AD1C27");

	ctx.strokeStyle = faGrad;
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(x, y + radius);
	ctx.arcTo(x, y + height, x + radius, y + height, radius);
	ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
	ctx.arcTo(x + width, y, x + width - radius, y, radius);
	ctx.arcTo(x, y, x, y + radius, radius);
	ctx.stroke();
	ctx.translate(width / 2 + x, width / 2 + x); // translate to rectangle center
	ctx.rotate((Math.PI / 180) * rotate);
	ctx.translate(-(width / 2 + x), -(width / 2 + x)); // translate back
	// ctx.restore();
}
