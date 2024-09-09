const container  = document.querySelector('.container')

function constructGrid(size){
    const box_size = 500 / size;
    const num_boxes = size * size;
    for (let i = 1; i <= num_boxes; i++){
        let div = document.createElement('div')
        div.classList.add('box')
        div.style.width = `${box_size}px`;
        container.appendChild(div)
    }
}

constructGrid(10)