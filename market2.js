let foodQuantity = 15;
let woodQuantity = 15;
let mineralQuantity = 15;

var container1 = document.getElementById("container1");
var items1 = container1.querySelectorAll(".square.food");

var container2 = document.getElementById("container2");
var items2 = container2.querySelectorAll(".square.wood");

var container3 = document.getElementById("container3");
var items3 = container3.querySelectorAll(".square.mineral");

console.log(items1);
console.log(items2);
console.log(items3);

for (var i = items1.length - 1; i >= 0; i--) { // iterate over items in reverse order
    let itemClass = parseInt(items1[i].classList[2]); // get the class number as an integer
    
    if (itemClass > foodQuantity) { // hide items with class number <= foodQuantity
        items1[i].style.opacity = 0;
        console.log("yes");
    } else {
        items1[i].style.opacity = 1;
    }
}

for (var i = items2.length - 1; i >= 0; i--) { // iterate over items in reverse order
    let itemClass = parseInt(items2[i].classList[2]); // get the class number as an integer
    
    if (itemClass > woodQuantity) { // hide items with class number <= woodQuantity
        items2[i].style.opacity = 0;
        console.log("yes");
    } else {
        items2[i].style.opacity = 1;
    }
}

for (var i = items3.length - 1; i >= 0; i--) { // iterate over items in reverse order
    let itemClass = parseInt(items3[i].classList[2]); // get the class number as an integer
    
    if (itemClass > mineralQuantity) { // hide items with class number <= mineralQuantity
        items3[i].style.opacity = 0;
        console.log("yes");
    } else {
        items3[i].style.opacity = 1;
    }
}
foodQuantity = 0;
woodQuantity = 0;
mineralQuantity = 0;

// add event listener to increment button
document.getElementById("incrementFood").addEventListener("click", function() {
    if (foodQuantity < 15) { // limit foodQuantity to 15
        foodQuantity++;
    }
    console.log("foodQuantity:", foodQuantity);
    for (var i = items1.length - 1; i >= 0; i--) { // iterate over items in reverse order
        let itemClass = parseInt(items1[i].classList[2]); // get the class number as an integer
        
        if (itemClass === foodQuantity) { // hide items with class number equal to foodQuantity
            items1[i].style.opacity = 0;
            console.log("yes");
        } else if (itemClass <= foodQuantity) { // hide items with class number less than foodQuantity
            items1[i].style.opacity = 0;
        } else { // show items with class number greater than foodQuantity
            items1[i].style.opacity = 1;
        }
    }
});

// add event listener to decrement button
document.getElementById("decrementFood").addEventListener("click", function() {
    if (foodQuantity > 0) { // limit foodQuantity to 0
        foodQuantity--;
    }
    console.log("foodQuantity:", foodQuantity);
    for (var i = items1.length - 1; i >= 0; i--) { // iterate over items in reverse order
        let itemClass = parseInt(items1[i].classList[2]); // get the class number as an integer
        
        if (itemClass === foodQuantity) { // hide items with class number equal to foodQuantity
            items1[i].style.opacity = 0;
            console.log("yes");
        } else if (itemClass <= foodQuantity) { // hide items with class number less than foodQuantity
            items1[i].style.opacity = 0;
        } else { // show items with class number greater than foodQuantity
            items1[i].style.opacity = 1;
        }
    }
});

// add event listener to increment button
document.getElementById("incrementWood").addEventListener("click", function() {
    if (woodQuantity < 15) { // limit woodQuantity to 15
        woodQuantity++;
    }
    console.log("woodQuantity:", woodQuantity);
    for (var i = items2.length - 1; i >= 0; i--) { // iterate over items in reverse order
        let itemClass = parseInt(items2[i].classList[2]); // get the class number as an integer
        
        if (itemClass === woodQuantity) { // hide items with class number equal to woodQuantity
            items2[i].style.opacity = 0;
            console.log("yes");
        } else if (itemClass <= woodQuantity) { // hide items with class number less than woodQuantity
            items2[i].style.opacity = 0;
        } else { // show items with class number greater than woodQuantity
            items2[i].style.opacity = 1;
        }
    }
});

// add event listener to decrement button
document.getElementById("decrementWood").addEventListener("click", function() {
    if (woodQuantity > 0) { // limit woodQuantity to 0
        woodQuantity--;
    }
    console.log("woodQuantity:", woodQuantity);
    for (var i = items2.length - 1; i >= 0; i--) { // iterate over items in reverse order
        let itemClass = parseInt(items2[i].classList[2]); // get the class number as an integer
        
        if (itemClass === woodQuantity) { // hide items with class number equal to woodQuantity
            items2[i].style.opacity = 0;
            console.log("yes");
        } else if (itemClass <= woodQuantity) { // hide items with class number less than woodQuantity
            items2[i].style.opacity = 0;
        } else { // show items with class number greater than woodQuantity
            items2[i].style.opacity = 1;
        }
    }
});

// add event listener to increment button
document.getElementById("incrementMineral").addEventListener("click", function() {
    if (mineralQuantity < 15) { // limit mineralQuantity to 15
        mineralQuantity++;
    }
    console.log("mineralQuantity:", mineralQuantity);
    for (var i = items3.length - 1; i >= 0; i--) { // iterate over items in reverse order
        let itemClass = parseInt(items3[i].classList[2]); // get the class number as an integer
        
        if (itemClass === mineralQuantity) { // hide items with class number equal to mineralQuantity
            items3[i].style.opacity = 0;
            console.log("yes");
        } else if (itemClass <= mineralQuantity) { // hide items with class number less than mineralQuantity
            items3[i].style.opacity = 0;
        } else { // show items with class number greater than mineralQuantity
            items3[i].style.opacity = 1;
        }
    }
});

// add event listener to decrement button
document.getElementById("decrementMineral").addEventListener("click", function() {
    if (mineralQuantity > 0) { // limit mineralQuantity to 0
        mineralQuantity--;
    }
    console.log("mineralQuantity:", mineralQuantity);
    for (var i = items3.length - 1; i >= 0; i--) { // iterate over items in reverse order
        let itemClass = parseInt(items3[i].classList[2]); // get the class number as an integer
        
        if (itemClass === mineralQuantity) { // hide items with class number equal to mineralQuantity
            items3[i].style.opacity = 0;
            console.log("yes");
        } else if (itemClass <= mineralQuantity) { // hide items with class number less than mineralQuantity
            items3[i].style.opacity = 0;
        } else { // show items with class number greater than mineralQuantity
            items3[i].style.opacity = 1;
        }
    }
});