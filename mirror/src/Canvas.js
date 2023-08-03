import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
	const canvasRef = useRef(null);

	function drawTriangle(stage, size, x, y) {
		var shape = new window.createjs.Shape(),
			g = shape.graphics,
			horizontal_offset = size / 10,
			vertical_ratio = 0.866,
			vertical_offset = (size * vertical_ratio) / 15;

		g.setStrokeStyle(1);
		g.beginStroke("green");
		g.beginFill("green");

		g.moveTo(0, -2 * vertical_offset);
		g.lineTo(-1 * horizontal_offset, vertical_offset);
		g.lineTo(horizontal_offset, vertical_offset);
		g.lineTo(0, -2 * vertical_offset);

		shape.x = x;
		shape.y = y;

		stage.addChild(shape);
		shape.rotation = props.rotate;
		stage.update();

		return shape;
	}

	const draw = (ctx, stage) => {
		ctx.canvas.width = 500;
		ctx.canvas.height = 500;
		ctx.clearRect(10, 10, ctx.canvas.width, ctx.canvas.height);
		drawTriangle(stage, 2000, 250, 250);
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		const stage = new window.createjs.Stage(canvas);

		//Our draw come here
		draw(context, stage);
	}, [draw]);

	return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
