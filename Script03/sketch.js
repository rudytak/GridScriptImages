const img_count = 4;
var imgs = [];
const cellSize = 100;

function preload() {
    for (var i = 1; i <= img_count; i++) {
        var name = "000" + i;
        name = name.substring(name.length - 3);
        imgs.push(loadImage(name + '.png'));
    }
}

function setup() {
    createCanvas(imgs[0].width, imgs[0].height);
}

function draw() {
    for (var x = 0; x < width; x += cellSize) {
        for (var y = 0; y < height; y += cellSize) {
            image(imgs[floor(random(0, img_count))], x, y, cellSize, cellSize, x, y, cellSize, cellSize)
        }
    }

    noLoop();
    saveCanvas("file", "png")
}