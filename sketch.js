let mj = [];
let mj_num = 30;
let mj_img;
let img3;
let mj2 = [];
let mj2_num = 110;
let mj2_img;
let img4;

function preload() {
    mj_img = loadImage('basket.png');
    img3 = loadImage('mv.png');
    mj2_img = loadImage('raindrop.png ');
    img4 = loadImage('afterrain.jpg');

}


function setup() {
    createCanvas(windowWidth, windowHeight);
    image(img4, 0, 0);


    for (let i = 0; i < mj_num; i++) {

        //random(low, high)
        mj[i] = new Jordan(random(0, width), random(0, height), 40, 40, random(0.01, 10), color(random(0, 255), random(0, 255)));
    }
    for (let i = 0; i < mj2_num; i++) {
        mj2[i] = new Jordan2(random(0, width), random(0, height), 50, 50, random(0.01, 10), color(random(0, 255), random(0, 255)));
    }

}


function draw() {
    
    if (keyIsPressed === true) {
        background(255, 150, 150);
        image(img3, 200, 200, 800, 800); //monument
        for (let i = 0; i < mj_num; i++) {
            mj[i].display();
            mj[i].move();
        }

    } else {
        background(img4,0,0);
    }


    if (mouseIsPressed) {
        background(155, 149, 151);
        image(img3, 200, 200, 800, 800); //monument
        for (let i = 0; i < mj2_num; i++) {
            mj2[i].display();
            mj2[i].move();
        }

    }
   

   


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

class Jordan {
    constructor(tempX, tempY, tempW, tempH, tempSpeed, tempShade) {
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.speed = tempSpeed;
        this.shade = tempShade;
    }

    move() {
        this.y = this.y + this.speed;
        if (this.y > height) {
            this.y = 0;
        }
    }
    display() {
        fill(this.shade);
        image(mj_img, this.x, this.y, this.w, this.h);

    }
}

class Jordan2 {
    constructor(tempX, tempY, tempW, tempH, tempSpeed, tempShade) {
        this.x = tempX;
        this.y = tempY;
        this.w = tempW;
        this.h = tempH;
        this.speed = tempSpeed;
        this.shade = tempShade;
    }

    move() {
        this.y = this.y + this.speed;
        if (this.y > height) {
            this.y = 0;
        }
    }
    display() {
        fill(this.shade);
        image(mj2_img, this.x, this.y, this.w, this.h);

    }
}