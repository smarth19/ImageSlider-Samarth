let imgCarousel = document.getElementsByClassName('imgCarousel');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let indicators = document.querySelectorAll('.indicator')
let hamMenu = document.querySelector('.hamMenu')
let mainMenu = document.querySelector('.mainMenu')

let count = 1;
let translateX = 0;
automateSlider()
prevBtn.addEventListener('click', () => {
    nextBtn.style.display = 'block';
    translateX += 100;
    Array.from(imgCarousel).forEach(img => {
        img.style.transform = `translateX(${translateX}%)`;
    });
    count--;
    if (count == 1) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';

    }
    Array.from(indicators).forEach(ind => {
        if (count == ind.id) {
            ind.style.backgroundColor = 'white';
        } else {
            ind.style.backgroundColor = 'rgba(119,119,119,0.8)';

        }
    })
})
nextBtn.addEventListener('click', () => {
    prevBtn.style.display = 'block';
    translateX -= 100
    Array.from(imgCarousel).forEach(img => {
        img.style.transform = `translateX(${translateX}%)`;
    });
    count++;
    if (count == imgCarousel.length) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';

    }
    Array.from(indicators).forEach(ind => {
        if (count == ind.id) {
            ind.style.backgroundColor = 'white';
        } else {
            ind.style.backgroundColor = 'rgba(119,119,119,0.8)';

        }
    })
})

Array.from(indicators).forEach((ind) => {
    ind.addEventListener('click', (e) => {
        count = e.target.id;
        let slideVal = e.target.id - 1;
        let toSlide = -100 * slideVal
        translateX = toSlide
        slide(toSlide, e.target.id)
    })
})
function slide(translate, targetId) {
    Array.from(imgCarousel).forEach(img => {
        img.style.transform = `translateX(${translate}%)`;
    });
    Array.from(indicators).forEach(ind => {
        if (count == ind.id) {
            ind.style.backgroundColor = 'white';
        } else {
            ind.style.backgroundColor = 'rgba(119,119,119,0.8)';

        }
    })
    if (targetId == imgCarousel.length) {
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'block';
    }
    else if (targetId == 1) {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'none';
    }
    else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';

    }
}

function automateSlider() {
    setInterval(() => {
        if (count < 0 || count > 4) {
            count = 0
        }
        translateX = -100 * count
        count++
        Array.from(imgCarousel).forEach(img => {
            img.style.transform = `translateX(${translateX}%)`;
        });
        Array.from(indicators).forEach(ind => {
            if (count == ind.id) {
                ind.style.backgroundColor = 'white';
            } else {
                ind.style.backgroundColor = 'rgba(119,119,119,0.8)';
    
            }
        })
        if (count == imgCarousel.length) {
            nextBtn.style.display = 'none';
            prevBtn.style.display = 'block';
        }
        else if (count == 1) {
            nextBtn.style.display = 'block';
            prevBtn.style.display = 'none';
        }
        else {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
        if (count == 5) {
            nextBtn.style.display = 'none';
            prevBtn.style.display = 'block';
            count = 0
        }
    }, 5000)
}


hamMenu.addEventListener('click', showHideMainMenu)
mainMenu.addEventListener('blur', showHideMainMenu)
let hamCount = 1
function showHideMainMenu() {
    if (hamCount == 1) {
        hamMenu.innerHTML = '<i class="fas fa-times"></i>'
        mainMenu.style.width = '37%'
        hamCount++
    } else if(hamCount == 2){
        hamMenu.innerHTML = '<i class="fas fa-bars"></i>'
        mainMenu.style.width = '0%'
        hamCount--
    }
}