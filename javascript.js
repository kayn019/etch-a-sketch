function onHover(ele){
    ele.classList.add("hov");
}

function changeSize(){
    let input = parseInt(prompt("number of square? (e.g. 64 wide) (MAX: 100): "));
    if(input > 100 || !Number.isInteger(input)){
        alert("Please enter integer below 100");
        changeSize();
    }else if (input === null) {
            return; //break out of the function early
    }else{
        deleteBoxes();
        generateBoxes(input);
    }
    
}

function generateBoxes(pixCount){
    for(let i = 0; i < pixCount; i++){
        const col = document.createElement('div');
        col.classList.add("col");
        boxes.appendChild(col);
        for(let j = 0; j < pixCount; j++){
            const box = document.createElement('div');
            box.classList.add("box", `col${j+1}`);
            box.addEventListener("mouseover", () => {
                box.classList.add("hov");
            });
            col.appendChild(box);
        }
    }
}

function deleteBoxes(){
    const allBox = document.querySelectorAll('.col');
    allBox.forEach((e) =>{
        e.remove();
    });
}

const boxes = document.querySelector('.boxes');
const btnChange = document.querySelector('.btnChange');

generateBoxes(16);


btnChange.addEventListener("click", changeSize);

