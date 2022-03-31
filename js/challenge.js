let likesObj = {}
let likesUL = document.querySelector(".likes")


document.addEventListener("DOMContentLoaded", () => {
    counter()
    let interval = setInterval(incrementCounter, 1000);
    const plus = document.getElementById("plus");
    plus.addEventListener("click", incrementCounter);
    const minus = document.getElementById("minus");
    minus.addEventListener("click", () => {
        let count = document.getElementById("counter");
        count.textContent = parseInt(count.textContent, 10) - 1;
    })

    const heart = document.getElementById("heart");
    heart.addEventListener("click", () => {
        let counterValue = document.getElementById("counter").textContent;
        console.log(counterValue)
        if(likesObj[counterValue]) {
            likesObj[counterValue] += 1
        } else {
            likesObj[counterValue] = 1
        }
        console.log(likesObj)
        likesUL.innerHTML = ""
        for(let key in likesObj) {
            let li = document.createElement("li")
            li.innerText = `${key} has been liked ${likesObj[key]} times.`;
            likesUL.appendChild(li)

        }

    });

    const submit = document.getElementById("submit");
    const pause = document.querySelector("#pause");
    pause.addEventListener("click", () => {
        if(pause.innerText === "resume") {
            pause.innerText = "pause";
            interval = setInterval(incrementCounter, 1000);
        } else {
            pause.innerText = "resume";
            clearInterval(interval);
        } 
        minus.disabled = !minus.disabled;
        plus.disabled = !plus.disabled;
        heart.disabled = !heart.disabled;
        submit.disabled = submit.disabled;
    })

    let commentForm = document.querySelector("#comment-form");
    commentForm.addEventListener("submit", (e) => {
            e.preventDefault()
            const list = document.getElementById("list")
            let li = document.createElement("li")
            li.innerText = e.target[0].value
            list.appendChild(li)
            commentForm.reset()
    })
})

function counter() {
    
}

function incrementCounter() {
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) + 1

}






















// //const plus = document.querySelector("plus");
// //const minus = document.getElementById('minus');
// const heart = document.getElementById('heart');
// const pause = document.getElementById('pause');
// const likes = document.querySelector('ul.likes');
// const commentForm = document.querySelector('#comment-form');
// const comments = document.querySelector('#list');

// let paused = false;
// let numberTracker = {};


// plus.addEventListener("click", totalClick);
//minus.addEventListener("click", decrementCounter);
// pause.addEventListener("click", togglePaused);
// heart.addEventListener("click", addLike);
// commentForm.addEventListener("submit", handleSubmit);




// function decrementCounter(event) {
//     counter.innerText = parseInt(counter.innerText) - 1
// }

// function togglePaused() {
//     paused = !paused
//     if (paused) {
//         clearInterval(interval)
//         pause.innerText = "resume"
//     } else {
//         interval = setInterval(incrementCounter,1000)
//         pause.innerText = "pause"
//     }
// }

// function addLike() {
//     let second = counter.innerText;
//     numberTracker[second] = 
//     numberTracker[second] || 0
//     numberTracker[second] += 1
//     renderLikes()
// }

// function renderLikes() {
//     likes.innerHTML = ""
//     for (let key in numberTracker) {
//         const li = document.createElement("li")
//         li.innerText = `${key} has been liked ${numberTracker[key]} times.`
//         likes.append(li)
//     }
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     const comment = event.target.querySelector("input").value;
//     const li = document.createElement("li");
//     li.innerText = comment;
//     comments.append(li)
//     event.target.reset();
// }
// counter automatically increases every second

// const seconds = 0;
// const counter = document.getElementById('counter');

// see the timer increment every second once the page has loaded
/*const counter = document.getElementById('counter');
const interval = setInterval(autoIncrease, 1000);

function autoIncrease(event) {
    counter.innerText = parseInt(counter.innerText) + 1
}

// plus and minus buttons add to the counter

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('counter');

minusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.innerText) || 0;
    inputField.innerText = currentValue - 1;
});

plusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.innerText) || 0;
    inputField.innerText = currentValue + 1;
});

// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.

const heart = document.getElementById('heart');
const likes = document.querySelector('.likes');
const second = counter.innerText;
const numberTracker = {};

function addLike() {
    numberTracker[second] = 
    numberTracker[second] || 0
    numberTracker[second] += 1
    renderLikes()
}

function renderLikes() {
    likes.innerHTML = ""
    for (let key in numberTracker) {
    const li = document.createElement("li")
    li.innerText = `${key} has been liked ${numberTracker[key]} times.`
    likes.append(li)
    }
}

heart.addEventListener("click", addLike);

// Pause the counter, which should:
// - pause the counter
// - disable all buttons except the pause button
// - switch the label on the button from "pause" to "resume"

const pause = document.getElementById('pause');
const paused = false;

function togglePaused() {
    paused = !paused
    if (paused) {
        setTimeout(autoIncrease, 10000)
        pause.innerText = "resume"
    } else {
        interval = setInterval(autoIncrease, 1000)
        pause.innerText = "pause"
    }
}

pause.addEventListener("click", togglePaused);
*/



