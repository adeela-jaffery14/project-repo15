const next = document.getElementById('right')
const prev = document.getElementById('left')
const img_container = document.getElementById('images')

const img = document.querySelectorAll('#images img')

let currentIndex = 0

function showImage(index) { 
    img.forEach((image, i) => {
        if (i === index) { 
            img_container.style.transform = "translateX(" + (index * -510) + "px)";  
        }
    });
}

function goNext() { 
    if (currentIndex < img.length - 1) { 
        currentIndex = currentIndex + 1
    } else if (currentIndex > img.length - 1) { 
        next.disabled = true;
    }
    showImage(currentIndex);
}

function goPrev() { 
    if (currentIndex <= img.length - 1) { 
        currentIndex = currentIndex - 1
    } else if (currentIndex == 0) { 
        prev.disabled = true;
    }
    showImage(currentIndex);
}

next.addEventListener('click', goNext)
prev.addEventListener('click', goPrev)

/*
    
    if (currentpxs <= -510) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }
    currentpxs += 510;
    img_container.style.transform = "translateX(" + (currentpxs) + "px)";
    return currentpxs
}*/
