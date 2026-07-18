// ===============================
// MUSIC + START STORY
// ===============================

const music = document.getElementById("music");

function startStory(){

    document.getElementById("letter")
    .classList.remove("hidden");

    music.volume = 0.35;

    music.play()
    .catch(()=>{});

}




// ===============================
// LOVE LETTER
// ===============================


const letter = `

My dear Routa ❤️


Happy Birthday.

I don't know if words will ever be enough to explain what you mean to me,
but today I want to try.


Before you, I never knew that someone could enter my life and slowly become
a place where my heart feels safe.


04/03/2026 was the day I met you.

07/03/2026 was the day I felt what your first hug meant.

10/03/2026 was the day those three words became something real.

"I love you."


And on 21/03/2026, we became us.


We've had beautiful moments.
We've had difficult moments.
There were times when holding on was hard...


But love was never about being perfect.

It was about choosing each other.

Every day.


I want us to protect each other's hearts.

I want us to take care of Victor and Soumaya.

I want us to travel the world together.

I want us to look back one day and smile because we never gave up.


Thank you for being you.

Thank you for your smile.

Thank you for every little moment that became a memory.


Happy 17th Birthday, Routa.


No matter how many birthdays pass,
I'll always choose you.


Forever yours,

Ahmed ❤️

`;



function openLetter(){


let box=document.getElementById("letterText");


box.classList.remove("hidden");


document.querySelector(".envelope")
.style.display="none";


let i=0;


function typing(){


if(i < letter.length){


box.innerHTML += letter[i];

i++;

setTimeout(typing,35);


}


}


typing();


}







// ===============================
// RELATIONSHIP TIMER
// ===============================


const startDate = new Date(
"March 21, 2026 00:00:00"
);



function updateTimer(){


let now = new Date();


let difference = now - startDate;


let seconds =
Math.floor(difference/1000);


let days =
Math.floor(seconds/86400);


seconds%=86400;


let hours =
Math.floor(seconds/3600);


seconds%=3600;


let minutes =
Math.floor(seconds/60);


seconds%=60;



document.getElementById("timer")
.innerHTML =
`
${days} Days ❤️
${hours} Hours
${minutes} Minutes
${seconds} Seconds
`;

}


setInterval(updateTimer,1000);

updateTimer();






// ===============================
// 25 STAR MESSAGES
// ===============================


const messages=[

"Your smile is my favorite view ❤️",

"I still remember our first hug.",

"You make ordinary days special.",

"I love the way you care.",

"You are my safe place.",

"Victor is lucky to have you 🐈",

"I love seeing you happy.",

"You make my heart calmer.",

"Your voice is one of my favorite sounds.",

"I love your little habits.",

"You are beautiful inside and out.",

"I choose you every day.",

"Our memories are precious.",

"I love your kindness.",

"You make me want to become better.",

"You are my favorite person.",

"I hope we travel the world together.",

"I will always protect your heart.",

"Your happiness matters to me.",

"I love our story.",

"You make life brighter.",

"I am thankful I met you.",

"You are my biggest smile.",

"I want more memories with you.",

"I love you more than you think ❤️"

];



let container =
document.getElementById(
"starsContainer"
);



messages.forEach((msg,index)=>{


let star=document.createElement("div");


star.className="star";


star.innerHTML="⭐";



star.onclick=()=>{


alert(msg);


star.style.opacity="0";


};



container.appendChild(star);


});








// ===============================
// CAKE
// ===============================


function blowCandles(){


document.querySelector(".cake")
.innerHTML="🎂✨";


document.getElementById(
"cakeMessage"
)
.innerHTML=

"I love u more than u think ❤️<br>and I want us to be better together.";

fireworks();


}







// ===============================
// FIREWORKS
// ===============================


function fireworks(){


for(let i=0;i<80;i++){


let f=document.createElement("div");


f.innerHTML="✨";


f.style.position="fixed";

f.style.left=Math.random()*100+"vw";

f.style.top=Math.random()*100+"vh";

f.style.fontSize=
(Math.random()*30+10)+"px";


document.body.appendChild(f);


setTimeout(()=>{

f.remove();

},3000);



}



}







// ===============================
// STAR BACKGROUND
// ===============================


const canvas =
document.getElementById("stars");


const ctx =
canvas.getContext("2d");


canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;



let stars=[];


for(let i=0;i<200;i++){


stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*2

});


}



function drawStars(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


ctx.fillStyle="white";


stars.forEach(s=>{


ctx.beginPath();


ctx.arc(
s.x,
s.y,
s.size,
0,
Math.PI*2
);


ctx.fill();


});


requestAnimationFrame(drawStars);


}



drawStars();









// ===============================
// EASTER EGGS
// ===============================


document.addEventListener(
"keydown",
(e)=>{


if(e.key.toLowerCase()=="b"){

fireworks();

}


});
