const container  = document.querySelector('.container')
let drawing = false
let erasing = false
let multi_color = false

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

function handleDraw(event){
    if (multi_color){
        event.target.style.backgroundColor = getRandomColor()
    } else if (erasing){
        console.log('erasing')
        event.target.style.backgroundColor = 'white'
    } else {
        event.target.style.backgroundColor = `${color_picker.value}`
    }
}

constructGrid()

const draw = document.querySelector('#draw')
const erase = document.querySelector('#erase')
const reset  = document.querySelector('#reset')
const update_grid = document.querySelector('#grid-update')
const color_picker = document.querySelector('#color-picker')
const random_color = document.querySelector('#rainbow')
const grid_toggle = document.querySelector('#show-grid')

container.addEventListener('click', () => {
    const grid = document.querySelectorAll('.box')
    console.log('test')
    if (drawing === false){
        grid.forEach(box => {
            box.addEventListener('mouseenter', handleDraw)
            drawing  = true
            console.log('active')
        })
    } else {
        grid.forEach(box => {
            box.removeEventListener('mouseenter', handleDraw)
            drawing  = false
            console.log('disabled')
        })
    }
})

/*
draw.addEventListener('click', () => {
    const grid = document.querySelectorAll('.box')
    grid.forEach(box => {
        box.addEventListener('mouseenter', () => box.style.backgroundColor = `${color_picker.value}`)
    });
});
*/

erase.addEventListener('click', () => {
    const grid = document.querySelectorAll('.box')
    erase.classList.toggle('active')
    if (!erasing){
        /*
        grid.forEach(box => {
            box.addEventListener('mouseenter', () => box.style.backgroundColor = 'white')
        })
        */
        erasing = true
    } else {
        /*
        grid.forEach(box => {
            box.addEventListener('mouseenter', handleDraw)
        })
        */
        erasing  = false
    }
})

reset.addEventListener('click', () => {
    const grid = document.querySelectorAll('.box')
    grid.forEach(box => {
        box.style.backgroundColor = 'transparent';
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

/*
color_picker.addEventListener('change', () => {
    const grid = document.querySelectorAll('.box')
    grid.forEach(box =>{ 
        box.addEventListener('mouseenter', () => box.style.backgroundColor = `${color_picker.value}`)
    })
})
*/

random_color.addEventListener('click', () => {
    const grid = document.querySelectorAll('.box')
    random_color.classList.toggle('pressed')
    /*
    grid.forEach(box => {
        box.addEventListener('mouseenter', () => box.style.backgroundColor = getRandomColor())
    })
    */
   if (!multi_color){
     multi_color = true
   } else {
    multi_color = false
   }
})

const outer = document.querySelector('.outer')
grid_on = true
grid_toggle.addEventListener('click', () => {
    const grid = document.querySelectorAll('.box')
    if (grid_on) { 
        grid.forEach(box => {
            box.style.border = 'solid 0px black'
        })
        grid_on = false
    }
    else{
        grid.forEach(box => {
            box.style.border = 'solid 1px black'
        })
        grid_on = true
    }
})