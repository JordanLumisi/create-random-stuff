const pageWidth = window.innerWidth;
const iterations = document.querySelector("#iterations");
const canvas = document.getElementById("canvas");

function draw() {
	if (canvas.getContext) {
		const ctx = canvas.getContext("2d");
		ctx.canvas.width = pageWidth;
		ctx.canvas.height = pageWidth;

		iterations.addEventListener("input", event => {
			let iterationValue = parseInt(event.target.value, 10);
			iterations.textContent = iterationValue;

			// Clear the canvas before redrawing
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			// Loop with updated iteration value
			for (let i = 0; i < iterationValue; i++) {
				roundedRect(ctx, pageWidth * 0.3, pageWidth * 0.3, 800, 800, 20, 4);
				// roundedRect(ctx, 100, 100, pageWidth, pageWidth, 20, 4);
				// roundedRect(ctx, 400, 400, 40, 40, 400, 16);
				// roundedRect(ctx, 400, 400, pageWidth, pageWidth, 400, 16);
			}
		});
	}
}

window.addEventListener("load", draw);

function roundedRect(ctx, x, y, width, height, radius, rotate) {
	const faGrad = ctx.createLinearGradient(x, y + height, x + width, y);
	// faGrad.addColorStop(0, "rgb(0, 0, 29, 0)"); // slate
	// faGrad.addColorStop(0.33, "rgb(0, 0, 54, 0)"); // indigo
	// faGrad.addColorStop(0.66, "#AD1C27"); // red
	// faGrad.addColorStop(1, "#F15623"); // orange

	// Experimental gradient
	// faGrad.addColorStop(0, "#AD1C27"); // red
	// faGrad.addColorStop(0.33, "#F15623"); // orange
	// faGrad.addColorStop(0.66, "rgb(0, 0, 29, 0)"); // slate
	// faGrad.addColorStop(1, "rgb(0, 0, 54, 0)"); // indigo

	// Experimental gradient
	// faGrad.addColorStop(0, "#F15623"); // orange
	// faGrad.addColorStop(0.5, "rgb(0, 0, 29, 0)"); // slate
	// faGrad.addColorStop(0.5, "rgb(0, 0, 54, 0)"); // indigo
	// faGrad.addColorStop(1, "#AD1C27"); // red

	faGrad.addColorStop(0, "#AD1C27"); // red
	faGrad.addColorStop(1, "#F15623"); // orange

	ctx.lineWidth = 10;

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
	ctx.rotate((Math.PI / 180) * -rotate);
	ctx.scale(0.94, 0.94); // scale down
	ctx.translate(-(width / 2 + x), -(width / 2 + x)); // translate back
	// ctx.restore();
}
