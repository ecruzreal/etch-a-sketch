const container  = document.querySelector('.container')

function constructGrid(size=16){
    const box_size = 500 / size;
    const num_boxes = size * size;
    for (let i = 1; i <= num_boxes; i++){
        let div = document.createElement('div')
        div.classList.add('box')
        div.style.width = `${box_size}px`;
        container.appendChild(div)
    }
}

constructGrid()

const draw = document.querySelector('#draw')
const erase = document.querySelector('#erase')
const reset  = document.querySelector('#reset')

draw.addEventListener('click', () => {
    const grid = document.querySelectorAll('.box')
    grid.forEach(box => {
        box.addEventListener('mouseenter', () => box.style.backgroundColor = 'black')
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