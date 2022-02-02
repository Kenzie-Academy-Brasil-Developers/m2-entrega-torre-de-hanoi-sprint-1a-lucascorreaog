/* CRIANDO ELEMENTOS */
const main = document.querySelector('main');
const divContainer = document.createElement('div');
divContainer.className = 'hanoi';
main.appendChild(divContainer);

const tower1 = document.createElement('div');
const tower2 = document.createElement('div');
const tower3 = document.createElement('div');

tower1.className = 'towers';
tower1.id = 't1';
tower2.className = 'towers';
tower2.id = 't2';
tower3.className = 'towers';
tower3.id = 't3';

divContainer.appendChild(tower1);
divContainer.appendChild(tower2);
divContainer.appendChild(tower3);

const disk1 = document.createElement('div');
const disk2 = document.createElement('div');
const disk3 = document.createElement('div');
const disk4 = document.createElement('div');
const disk5 = document.createElement('div');

disk1.className = 'disk';
disk2.className = 'disk';
disk3.className = 'disk';
disk4.className = 'disk';
disk5.className = 'disk';

function generateId(str){
    return Number(str[1])
} 

disk1.id = 'd1';
disk2.id = 'd2';
disk3.id = 'd3';
disk4.id = 'd4';
disk5.id = 'd5';

tower1.appendChild(disk5);
tower1.appendChild(disk4);
tower1.appendChild(disk3);
tower1.appendChild(disk2);
tower1.appendChild(disk1);

/* ADICIONANDO EVENTLISTENER */

tower1.addEventListener("click", selectAndMove)
tower2.addEventListener("click", selectAndMove)
tower3.addEventListener("click", selectAndMove)

let topDisk = null;
let selectedTower = null;

function selectAndMove (event){
    if (selectedTower === null){
        selectedTower = event.target
     if (selectedTower.className === 'disk'){
            selectedTower = selectedTower.parentNode
        }
        let pieceArray = selectedTower.querySelectorAll('.disk')
        topDisk = pieceArray[pieceArray.length -1]
    }
    else{
        if (topDisk === null){
            topDisk = null
            selectedTower = null
        }
        else{
            let moveToTower = event.target
            console.log(event.target)
            if (moveToTower.className === 'disk'){
                moveToTower = moveToTower.parentNode
            }   
            moveToTower.appendChild(topDisk)
            topDisk = null
            selectedTower = null
        }
        
    } 
}


