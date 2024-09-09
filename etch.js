const container  = document.querySelector('.container')

function constructGrid(size=16){
    container.innerHTML = '';
    const box_size = 500 / size;
    const num_boxes = size * size;
    for (let i = 1; i <= num_boxes; i++){
        let div = document.createElement('div')
        div.classList.add('box')
        div.style.width = `${box_size}px`;
        container.appendChild(div)
    }
}

function getRandomColor(){
    //Code to produce pastel colors using HSL colors from
    // https://stackoverflow.com/questions/43193341/how-to-generate-random-pastel-or-brighter-color-in-javascript
    return "hsl(" + 360 * Math.random() + ',' +
            (25 + 80 * Math.random()) + '%,' + 
            (70 + 10 * Math.random()) + '%)' 
}

constructGrid()

const draw = document.querySelector('#draw')
const erase = document.querySelector('#erase')
const reset  = document.querySelector('#reset')
const update_grid = document.querySelector('#grid-update')
const color_picker = document.querySelector('#color-picker')
const random_color = document.querySelector('#rainbow')

draw.addEventListener('click', () => {
    const grid = document.querySelectorAll('.box')
    grid.forEach(box => {
        box.addEventListener('mouseenter', () => box.style.backgroundColor = `${color_picker.value}`)
    });
});

erase.addEventListener('click', () => {
    const grid = document.querySelectorAll('.box')
    grid.forEach(box => {
        box.addEventListener('mouseenter', () => box.style.backgroundColor = 'white')
    })
})

reset.addEventListener('click', () => {
    const grid = document.querySelectorAll('.box')
    grid.forEach(box => {
        box.style.backgroundColor = 'white';
    })
})

update_grid.addEventListener('click', () => {
    let new_num = prompt('Please enter a number between 2 and 99')
    if (new_num >= 2 && new_num <= 99){
        constructGrid(new_num)
    } else {
        alert('Only integers between 2 and 99 are supported.')
    }
})

color_picker.addEventListener('change', () => {
    const grid = document.querySelectorAll('.box')
    grid.forEach(box =>{ 
        box.addEventListener('mouseenter', () => box.style.backgroundColor = `${color_picker.value}`)
    })
})

random_color.addEventListener('click', () => {
    const grid = document.querySelectorAll('.box')
    grid.forEach(box => {
        box.addEventListener('mouseenter', () => box.style.backgroundColor = getRandomColor())
    })
})