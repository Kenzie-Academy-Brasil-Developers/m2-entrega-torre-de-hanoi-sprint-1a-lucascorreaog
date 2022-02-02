/* /* CRIANDO ELEMENTOS */


function hanoiEasy(){
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

    disk1.className = 'disk';
    disk2.className = 'disk';
    disk3.className = 'disk';
  
    disk1.id = 'd1';
    disk2.id = 'd2';
    disk3.id = 'd3';
    
    tower1.appendChild(disk3);
    tower1.appendChild(disk2);
    tower1.appendChild(disk1);
    
    // MOVENDO DISCOS PARA AS TORRES
    
    
    
    let topDisk = null;
    
    function moveDisk (tower){
        tower.appendChild(topDisk)
        topDisk = null
    }
    
    function selectedTower (e){
        const currentTower = e.currentTarget;
        if (topDisk === null){
            topDisk = currentTower.lastElementChild;
        }
        else{
            let upperDiskTower = currentTower.lastElementChild;
            if(upperDiskTower === null){
                moveDisk(currentTower) 
            }
            else{
                if(Number(upperDiskTower.clientWidth) > Number(topDisk.clientWidth)){
                    moveDisk(currentTower)
                }
            }
            topDisk = null
        }
    }
    tower1.addEventListener("click", selectedTower);
    tower2.addEventListener("click", selectedTower);
    tower3.addEventListener("click", selectedTower);
    
}

hanoiEasy()
victoryPopUp()
//=======================================================//
/* CRIANDO ELEMENTOS */

/* function hanoiMedium(){
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

disk1.className = 'disk';
disk2.className = 'disk';
disk3.className = 'disk';
disk4.className = 'disk';

disk1.id = 'd1';
disk2.id = 'd2';
disk3.id = 'd3';
disk4.id = 'd4';

tower1.appendChild(disk4);
tower1.appendChild(disk3);
tower1.appendChild(disk2);
tower1.appendChild(disk1);

// MOVENDO DISCOS PARA AS TORRES



let topDisk = null;

function moveDisk (tower){
    tower.appendChild(topDisk)
    topDisk = null
}

function selectedTower (e){
    const currentTower = e.currentTarget;
    if (topDisk === null){
        topDisk = currentTower.lastElementChild;
    }
    else{
        let upperDiskTower = currentTower.lastElementChild;
        if(upperDiskTower === null){
            moveDisk(currentTower) 
        }
        else{
            if(Number(upperDiskTower.clientWidth) > Number(topDisk.clientWidth)){
                moveDisk(currentTower)
            }
        }
        topDisk = null
    }
}
tower1.addEventListener("click", selectedTower);
tower2.addEventListener("click", selectedTower);
tower3.addEventListener("click", selectedTower);
}  



//--------------------------------------------------------------------------//

function hanoiHard(){
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

// MOVENDO DISCOS PARA AS TORRES

let topDisk = null;

function moveDisk (tower){
    tower.appendChild(topDisk)
    topDisk = null
}

function selectedTower (e){
    const currentTower = e.currentTarget;
    if (topDisk === null){
        topDisk = currentTower.lastElementChild;
    }
    else{
        let upperDiskTower = currentTower.lastElementChild;
        if(upperDiskTower === null){
            moveDisk(currentTower) 
        }
        else{
            if(Number(upperDiskTower.clientWidth) > Number(topDisk.clientWidth)){
                moveDisk(currentTower)
            }
        }
        topDisk = null
    }
}
tower1.addEventListener("click", selectedTower);
tower2.addEventListener("click", selectedTower);
tower3.addEventListener("click", selectedTower);
}
hanoiHard() */

/* // CRIANDO BOTOES DIFICULDADES
const selectLevel = document.createElement('div');
selectLevel.className = "div_buttons";
document.body.appendChild(selectLevel);

const btnEasy = document.createElement('button');
btnEasy.id = 'easy_btn';
btnEasy.innerText = "Easy";
selectLevel.appendChild(btnEasy);

const btnMedium = document.createElement('button');
btnMedium.id = 'medium_btn';
btnMedium.innerText = "Medium";
selectLevel.appendChild(btnMedium);

const btnHard = document.createElement('button');
btnHard.id = 'hard_btn';
btnHard.innerText = "Hard";
selectLevel.appendChild(btnHard);

/* REMOVENDO BOTOES */
/* function removeButtons(){
    const easy = document.querySelector('.btn_easy');
    easy.remove();
    hanoiEasy();
}

btnEasy.addEventListener("click", removeButtons);  */


// CONDIÇÃO VITÓRIA

function victoryPopUp() {
    //criando os elementors
    const victoryContainer = document.createElement('div');
    const victoryText      = document.createElement('h2');
    const closeButton      = document.createElement('button');

    // Add classes && ID's
    victoryContainer.id = 'victory_container';
    victoryContainer.classList.add('pop-up');
    victoryText.classList.add('victory_text');
    
    // Add texto
    victoryText.innerText = 'Você venceu!';
    closeButton.innerHTML = 'Fechar';

    // Add eventeListener
    closeButton.addEventListener("click", closePopUp);

    // Add elementos
    victoryContainer.appendChild(victoryText);
    victoryContainer.appendChild(closeButton);
    const body = document.querySelector('body');
    body.appendChild(victoryContainer)
}

    //Add função ao eventListener ClosePopUp
function closePopUp(e) {
    e.target.parentElement.remove();
}

function checkVictory() {
    // Verificar se Torre 3 possue todas as peças (3,4 ou 5)

    const victoryTower = document.querySelector('.tower')
    for (let i = 3; i <= 3; i++){
        const towerDisks = victoryTower[i].querySelector('.disk')
        if (towerDisks.childElementCount === 3){
            victoryPopUp()
        }
    }
}