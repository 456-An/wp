//愛心
const canvas1 = document.querySelector("#canvas1");
const ctx1 = canvas1.getContext("2d");

ctx1.beginPath();
ctx1.moveTo(200, 80);
ctx1.quadraticCurveTo(-50, 0, 200, 350);
ctx1.fillStyle = "#FF0080";
ctx1.fill();
ctx1.stroke();


ctx1.beginPath();
ctx1.moveTo(200, 80);
ctx1.quadraticCurveTo(450, 0, 200, 350);
ctx1.fillStyle = "#FF79BC";
ctx1.fill();
ctx1.stroke();



//熊
const canvas2 = document.querySelector("#canvas2");
const ctx2 = canvas2.getContext("2d");

ctx2.globalCompositeOperation = "source-over";

// Right Ear
ctx2.beginPath();
ctx2.arc(100, 70, 40, 0, 2 * Math.PI);
ctx2.fillStyle = "SaddleBrown";
ctx2.fill();
ctx2.stroke();

// Left Ear
ctx2.beginPath();
ctx2.arc(300, 70, 40, 0, 2 * Math.PI);
ctx2.fillStyle = "SaddleBrown";
ctx2.fill();
ctx2.stroke();

// Right Ear
ctx2.beginPath();
ctx2.arc(105, 80, 25, 0, 2 * Math.PI);
ctx2.fillStyle = "Peru";
ctx2.fill();
ctx2.stroke();

// Left Ear
ctx2.beginPath();
ctx2.arc(297, 80, 25, 0, 2 * Math.PI);
ctx2.fillStyle = "Peru";
ctx2.fill();
ctx2.stroke();

// Head
ctx2.beginPath();
ctx2.arc(200, 210, 150, 0, 2 * Math.PI);
ctx2.fillStyle = "Sienna";
ctx2.fill();
ctx2.stroke();

// Eyes
ctx2.beginPath();
ctx2.arc(120, 180, 20, 0, 2 * Math.PI);
ctx2.fillStyle = "Black";
ctx2.fill();
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(280, 180, 20, 0, 2 * Math.PI);
ctx2.fillStyle = "Black";
ctx2.fill();
ctx2.stroke();

// Face
ctx2.beginPath();
ctx2.ellipse(200, 240, 70, 50, 0, 0, 2 * Math.PI);
ctx2.fillStyle = "Linen";
ctx2.fill();
ctx2.stroke();

//Nose
ctx2.beginPath();
ctx2.moveTo(200, 220);
ctx2.quadraticCurveTo(150, 220, 200, 240);
ctx2.fillStyle = "Black";
ctx2.fill();
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(200, 220);
ctx2.quadraticCurveTo(250, 220, 200, 240);
ctx2.fillStyle = "Black";
ctx2.fill();
ctx2.stroke();

//Mouse
ctx2.beginPath();
ctx2.moveTo(200, 240);
ctx2.quadraticCurveTo(200, 280, 160, 270);
ctx2.lineWidth = 8;
ctx2.lineCap = "round";
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(200, 240);
ctx2.quadraticCurveTo(200, 280, 240, 270);
ctx2.lineWidth = 8;
ctx2.lineCap = "round";
ctx2.stroke();



//會動的火柴人
const canvas3 = document.querySelector("#canvas3");
const ctx3 = canvas3.getContext("2d");

let count = 0;
let j = 290;
let k = 90;
let l = 950;
let m = 1950;
let a = 350;
let b = 250;
let c = 450;
let x1 = 250;
let x2 = 450;
let x3 = 280;
const temp = 50;

ctx3.beginPath();
ctx3.arc(350, 200, 60, 0, 2 * Math.PI);
ctx3.stroke();

//Body
ctx3.beginPath();
ctx3.moveTo(350, 260);
ctx3.lineTo(350, 460);
ctx3.stroke();

//Hand
ctx3.beginPath();
ctx3.moveTo(350, 350);
ctx3.lineTo(250, x3);
ctx3.stroke();

ctx3.beginPath();
ctx3.moveTo(350, 350);
ctx3.lineTo(450, x3);
ctx3.stroke();

//Move Leg
ctx3.beginPath();
ctx3.moveTo(350, 460);
ctx3.lineTo(x1, 560);
ctx3.stroke();

ctx3.beginPath();
ctx3.moveTo(350, 460);
ctx3.lineTo(x2, 560);
ctx3.stroke();


function running() {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);

    ctx3.font = "48px Arial";
    ctx3.fillStyle = "black";
    ctx3.fillText("Wait！", j, k);

    ctx3.font = "56px Arial";
    ctx3.fillStyle = "black";
    ctx3.fillText("Haha！", l, 200);
    ctx3.fillText("Just joke！！", l, 300);
    ctx3.fillText("Nothing is here！！！", l, 400);

    ctx3.font = "68px Arial";
    ctx3.fillStyle = "black";
    ctx3.fillText("There’s", m, 200);
    ctx3.fillText("Really", m, 300);
    ctx3.fillText("Nothing", m, 400);
    ctx3.fillText("Here～～", m, 500);

    //Head
    ctx3.beginPath();
    ctx3.arc(a, 200, 60, 0, 2 * Math.PI);
    ctx3.stroke();

    //Body
    ctx3.beginPath();
    ctx3.moveTo(a, 260);
    ctx3.lineTo(a, 460);
    ctx3.stroke();

    //Hand
    ctx3.beginPath();
    ctx3.moveTo(a, 350);
    ctx3.lineTo(b, x3);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(a, 350);
    ctx3.lineTo(c, x3);
    ctx3.stroke();

    //Move Leg
    ctx3.beginPath();
    ctx3.moveTo(a, 460);
    ctx3.lineTo(x1, 560);
    ctx3.stroke();
    
    ctx3.beginPath();
    ctx3.moveTo(a, 460);
    ctx3.lineTo(x2, 560);
    ctx3.stroke();
    
    if (count % 2 === 0) {
        x1 += temp;
        x2 -= temp;
        x3 -= temp;
    } else {
        x1 -= temp;
        x2 += temp;
        x3 += temp;
    }
    
    count++;
    
    if (count > 3) {
        j -= temp;
        l -= temp;
        m -= temp;
        a -= temp;
        b -= temp;
        c -= temp;
        x1 -= temp;
        x2 -= temp;
    }

    setTimeout(running, 500);
    
}


//箭頭
const canvas4 = document.querySelector("#canvas4");
const ctx4 = canvas4.getContext("2d");

let x4 = 320;
let x5 = 420;
let x6 = 520;
let count2 = 0;

function UpAndDown() {
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height);

    ctx4.font = "24px Arial";
    ctx4.fillStyle = "black";
    ctx4.fillText("Hey！you wanna", 0, 90);
    ctx4.fillText("see something", 0, 120);
    ctx4.fillText("cool？", 0, 150);

    ctx4.beginPath();
    ctx4.moveTo(50, x4);
    ctx4.lineTo(50, x5);
    ctx4.lineTo(15, x5);
    ctx4.lineTo(75, x6);
    ctx4.lineTo(135, x5);
    ctx4.lineTo(100, x5);
    ctx4.lineTo(100, x4);
    ctx4.closePath();
    ctx4.stroke();

    const grad = ctx4.createLinearGradient(50, 270, 135, 520);
    grad.addColorStop(0, "#64e2f5");
    grad.addColorStop(1, "#07148c"); 
    ctx4.fillStyle = grad;
    ctx4.fill();

    if (count2 % 2 === 0) {
        x4 -= temp;
        x5 -= temp;
        x6 -= temp;
    } else {
        x4 += temp;
        x5 += temp;
        x6 += temp;
    }

    count2++;

    setTimeout(UpAndDown, 300);
}

UpAndDown();
