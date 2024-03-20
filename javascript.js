function onHover(ele){
    ele.classList.add("hov");
    const brightVal = ele.style.color;
    console.log(brightVal);
    ele.style.cssText = `filter: brightness(100%)`;
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
                if(isMouseDown){
                    let strength = strSlider.value / 10;
                    let color = colorPicker.value;
                    box.classList.add("hov");
             
      
                    
                    let op = (parseFloat(box.style.opacity)|| 0);
                    if(op > 1){
                        op = 1;
                    }
                    
                    box.style.cssText = `opacity: ${op + strength};
                                         background-color: ${color};`;
                }
               
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
const strSlider = document.querySelector('.strSlider');
const colorPicker = document.querySelector('.colorPicker');
let isMouseDown = false;
boxes.addEventListener("mousedown", function()
{ 
  isMouseDown = true;
});
boxes.addEventListener("mouseup", function()
{
  isMouseDown = false;
});

generateBoxes(16);


btnChange.addEventListener("click", changeSize);

