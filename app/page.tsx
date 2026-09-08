export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      ddffdd
      {/* 
      
      import * as PIXI from 'pixi.js';
import '@pixi/graphics-extras';

const app = new PIXI.Application({ antialias: true, resizeTo: window });

document.body.appendChild(app.view);

let container = new PIXI.Container();
app.stage.addChild(container);
container.position.set(10)

const width = 206;
const height = 508;
const topHeight = 40;
const gap = 7;

const columns = 3;
const rows = 12;

// Calculate rectangle dimensions
const rectW = (width - (columns - 1) * gap) / columns;
const rectH = (height - topHeight - rows * gap) / rows;

function draw() {
    let b = new PIXI.Graphics();
    b.beginFill(0xffffff);
    b.drawRect(0, 0, width, height);
    b.endFill();
    container.addChild(b);
}

function drawRects() {
    let top = new PIXI.Graphics();

    top.beginFill(0xffff00);
    top.drawRect(0, 0, width, topHeight);
    top.endFill();

    container.addChild(top);

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let r = new PIXI.Graphics();
            r.beginFill(0xff00ff);
            r.drawRect(0, 0, rectW, rectH);
            r.endFill();
            r.position.set(
                i * (rectW + gap),
                topHeight + gap + j * (rectH + gap)
            );
            container.addChild(r);
        }
    }
}

function getCenters() {
    const centers = {};

    // 0
    centers[0] = {
        x: width / 2,
        y: topHeight / 2
    };

    // 1 - 36
    let index = 1;

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            const x = i * (rectW + gap);
            const y = topHeight + gap + j * (rectH + gap);

            centers[index] = {
                x: x + rectW / 2,
                y: y + rectH / 2
            };

            index++;
        }
    }
console.log(centers)
    return centers;
}
function drawDots() {
    const centers = getCenters();

    Object.values(centers).forEach(({ x, y }) => {
        const dot = new PIXI.Graphics();

        dot.beginFill(0x000000);
        dot.drawCircle(0, 0, 7);
        dot.endFill();
dot.pivot.set(-10)
        dot.position.set(x, y);

        container.addChild(dot);
    });
}

draw();
drawRects();
drawDots();

      
      */}
    </div>
  );
}