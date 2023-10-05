const searchInput = document.querySelector('#search_input');
searchInput.oninput = function() {
    let searchInputValue = this.value.trim();
    let list = document.querySelectorAll('.list li');
    if (searchInputValue) {
        list.forEach(el => {
            if(el.innerText.toLowerCase().search(searchInputValue.toLowerCase()) == -1){
                el.classList.add('hide');
            } 
        })
    } else {
        list.forEach(el => {
            el.classList.remove('hide');
        })
    }
}

const iconMobile = document.querySelector('.sidebar__icon');
const mainBg = document.querySelector('.main');
const mainContent = document.querySelector('.main__content');
iconMobile.addEventListener('click',function() {
    this.classList.toggle('active');
    mainBg.classList.toggle('bg');
    mainContent.classList.toggle('animation');
});

const closeMenu = () => {
    if(iconMobile.classList.contains('active')){
        iconMobile.classList.remove('active');
        mainBg.classList.remove('bg');
        mainContent.classList.remove('animation');
    }
}
mainBg.addEventListener('click', closeMenu);



const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
const slider = document.querySelector('.carousel__slide');
const sliderImages = document.querySelectorAll('.carousel__slide img');
let counter = 0;
const stepSize = sliderImages[0].clientWidth;

btnRight.addEventListener('click', () => {
    if(counter >= sliderImages.length - 1){
        counter = -1;
    }
    counter++;
    slider.style.transform = `translateX(${-stepSize * counter}px)`;
});

btnLeft.addEventListener('click', () => {
    if(counter <= 0){
        counter = sliderImages.length;
    }
    counter--;
    slider.style.transform = `translateX(${-stepSize * counter}px)`;
});

const toDolist = document.querySelector('.todo__list');
const toDoInput = document.querySelector('#todo__input');
const toDoBtn = document.querySelector('#todo__btn');

toDoBtn.addEventListener('click', () => {
    // let val = toDoInput.value;
    //  toDoInput.value = '';
    //  todoArr.push(val);
    toDolist.innerHTML += `<li>${toDoInput.value}</li>`;
    toDoInput.value = '';
    // addTodo();
});
//  function addTodo() {
//      let val = '';
//      for(let el of todoArr) {
//          val = el;
//      }
//      toDolist.innerHTML += `<li>${val}</li>`;
//  }

const check = document.querySelector('#check');
check.addEventListener('click', function() {
    document.querySelector('.checkbox__wrapper .res').innerHTML = `<span>Статус: ${this.checked}</span>`;
})

const selectCity = document.querySelector('#cities__select');
const submitBtn = document.querySelector('#submitBtn');
//select.options select.value select.selectedIndex
submitBtn.addEventListener('click', () => {
    //console.log(selectCity.options[selectCity.selectedIndex]);
    let selectedOption = selectCity.options[selectCity.selectedIndex].text;
    document.getElementById('selectedOption').innerHTML = `<span>Выбран: ${selectedOption}</span>`;
});

const scroll = document.querySelector('.scroll');
window.onscroll = () => {
    window.scrollY > 50 ? scroll.classList.add('show') : scroll.classList.remove('show');
}

scroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})


const sliderBefore = document.querySelector('.slider_before');
const sliderAfter = document.querySelector('.slider_after');
const beforeBtn = document.querySelector('#before_btn');
const afterBtn = document.querySelector('#after_btn');
sliderBefore.addEventListener('mousemove', (event) => {
    sliderAfter.classList.remove('tr');
    let x = event.offsetX;
    sliderAfter.style.width = x + 'px';
})
 
sliderBefore.addEventListener('mouseleave', (event) => {
    sliderAfter.classList.add('tr');
    sliderAfter.style.width = '50%';
})

beforeBtn.addEventListener('click', () => {
    sliderAfter.classList.add('tr');
    sliderAfter.style.width = '0px';
})
afterBtn.addEventListener('click', () => {
    sliderAfter.classList.add('tr');
    sliderAfter.style.width = '100%';
})

const validInput = document.querySelector('#valid');
const validResult = document.querySelector('#valid__result');

validInput.addEventListener('keyup', e => {
    e.getModifierState('CapsLock') ? validResult.innerText = 'Отключи капс' : validResult.innerText = '';
})