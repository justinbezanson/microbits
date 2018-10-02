let scroller = new Scroller();
scroller.addShape(new Line());
scroller.addShape(new Square());
scroller.addShape(new Triangle());
scroller.addShape(new Diamond());
scroller.addShape(new Diamond());
scroller.addShape(new Triangle());
scroller.addShape(new Square());
scroller.addShape(new Line());

basic.forever(() => {
    scroller.run();
});

class Scroller {
    shapes: Array<Shape>;
    previousShape: Shape;

    constructor() {
        this.shapes = [];
        this.previousShape = null;
    }

    addShape(shape: Shape) {
        //space out shapes
        if (this.previousShape) {
            shape.shiftXPlots(this.previousShape.getMaxX() - shape.getMinX() + 2);
        }

        //previous shape
        this.previousShape = shape;

        //add shape
        this.shapes.push(shape);
    }

    run() {
        this.shapes.forEach((shape) => {
            shape.render();
        });

        basic.pause(500);

        this.shapes.forEach((shape) => {
            shape.destroy();
        });

        basic.pause(500);

        this.shapes.forEach((shape) => {
            shape.shiftXPlots(-1);
        });
    }
};

class Shape {
    plots: Array<Array<number>>;
    width: number;

    constructor() {
        this.plots = [];
        this.width = 0;
    }

    setPlots(plots: Array<Array<number>>) {
        this.plots = plots;
    }

    shiftXPlots(offset: number) {
        this.plots.forEach((plot, index) => {
            this.plots[index][0] += offset;
        });
    }

    getMinX() {
        let min = -1;

        this.plots.forEach((plot) => {
            if (min === -1 || plot[0] < min) {
                min = plot[0];
            }
        });

        return min;
    }

    getMaxX() {
        let max = 0;

        this.plots.forEach((plot) => {
            if (plot[0] > max) {
                max = plot[0];
            }
        });

        return max;
    }

    render() {
        this.plots.forEach((plot) => {
            led.plot(plot[0], plot[1]);
        });
    }

    destroy() {
        this.plots.forEach((plot) => {
            led.unplot(plot[0], plot[1]);
        });
    }
};

class Line extends Shape {
    constructor() {
        super();

        this.setPlots([
            [4, 0],
            [4, 1],
            [4, 2],
            [4, 3]
        ]);
    }
}

class Square extends Shape {
    constructor() {
        super();

        this.setPlots([
            //left side
            [4, 0],
            [4, 1],
            [4, 2],
            //right side
            [2, 0],
            [2, 1],
            [2, 2],
            //top
            [3, 0],
            //bottom
            [3, 2]
        ]);
    }
}

class Triangle extends Shape {
    constructor() {
        super();

        this.setPlots([
            [3, 0],
            [4, 1],
            [2, 1],
            [2, 2],
            [3, 2],
            [4, 2]
        ]);
    }
}

class Diamond extends Shape {
    constructor() {
        super();

        this.setPlots([
            [3, 0],
            [4, 1],
            [2, 1],
            [3, 2]
        ]);
    }
}
