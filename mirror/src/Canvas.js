import React, { useRef, useEffect } from "react";

const Canvas = ({ x, y, ...props }) => {
	const canvasRef = useRef(null);
	console.log(x, y);

	const draw = (ctx) => {
		ctx.canvas.width = 50;
		ctx.canvas.height = 50;
		ctx.clearRect(10, 10, ctx.canvas.width, ctx.canvas.height);
		// ctx.scale(x ? 1 : -1, y ? 1 : -1);
		ctx.fillStyle = "#000000";
		ctx.beginPath();
		ctx.arc(x ? 50 : 0, y ? 50 : 0, 25, 0, 2 * Math.PI);
		ctx.fill();
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");

		//Our draw come here
		draw(context);
	}, [draw]);

	return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
