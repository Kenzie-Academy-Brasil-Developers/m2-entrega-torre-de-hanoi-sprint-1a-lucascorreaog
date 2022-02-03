/* /* CRIANDO ELEMENTOS */

// CRIANDO TORRES

function createTowers() {
    const main              = document.querySelector('main');
    const gameContainer     = document.createElement('div');
    gameContainer.className = 'hanoi';
    gameContainer.id        = 'game-container';
    main.appendChild(gameContainer);
    
    const tower1 = document.createElement('div');
    const tower2 = document.createElement('div');
    const tower3 = document.createElement('div');
    
    tower1.className = 'towers';
    tower1.id = 't1';
    tower2.className = 'towers';
    tower2.id = 't2';
    tower3.className = 'towers';
    tower3.id = 't3';
    
    gameContainer.appendChild(tower1);
    gameContainer.appendChild(tower2);
    gameContainer.appendChild(tower3);

    
}

// SELECIONANDO DIFICULDADES

function createDifficultyScreen() {
    //CRIANDO ELEMENTOS
    const difficultyContainer = document.createElement('div');
    const difficultyTitle     = document.createElement('h2');
    const easyButton          = document.createElement('button');
    const mediumButton        = document.createElement('button');
    const hardButton          = document.createElement('button');

    // ADD CLASSES AOS ELEMENTOS
    difficultyTitle.classList.add('difficulty-title');
    easyButton.classList.add('difficulty-button');
    mediumButton.classList.add('difficulty-button');
    hardButton.classList.add('difficulty-button');

    // ADD ID's AOS ELEMENTOS
    difficultyContainer.id = 'difficulty-container';
    easyButton.id          = 'easy';
    mediumButton.id        = 'medium';
    hardButton.id          = 'hard';

    //ADD TEXTO AOS ELEMENTOS AOS BOTOES DE DIFICULDADE
    difficultyContainer.innerText = 'Selecione a Dificuldade';
    easyButton.innerText          = 'Fácil';
    mediumButton.innerText        = 'Médio';
    hardButton.innerText          = 'Difícil';

    //ADD EVENTLISTENER
    difficultyContainer.addEventListener('click', selectDifficulty);

    //ADD ELEMENTOS AOS SEUS PARENTS
    difficultyContainer.appendChild(difficultyTitle);
    difficultyContainer.appendChild(easyButton);
    difficultyContainer.appendChild(mediumButton);
    difficultyContainer.appendChild(hardButton);

    const gameContainer = document.getElementById('game-container');
    gameContainer.appendChild(difficultyContainer);
}

/* function hanoiEasy() {
    
    const main              = document.querySelector('main');
    const gameContainer     = document.createElement('div');
    gameContainer.className = 'hanoi';
    gameContainer.id        = 'game-container';
    main.appendChild(gameContainer);
    
    const tower1 = document.createElement('div');
    const tower2 = document.createElement('div');
    const tower3 = document.createElement('div');
    
    tower1.className = 'towers';
    tower1.id = 't1';
    tower2.className = 'towers';
    tower2.id = 't2';
    tower3.className = 'towers';
    tower3.id = 't3';
    
    gameContainer.appendChild(tower1);
    gameContainer.appendChild(tower2);
    gameContainer.appendChild(tower3);

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
    // MOVENDO DISCOS PARA AS TORREs
    
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
                    checkVictory()
                }
            }
            
            topDisk = null
            
        }
        
    }
    tower1.addEventListener('click', selectedTower);
    tower2.addEventListener('click', selectedTower);
    tower3.addEventListener('click', selectedTower);
    
}
hanoiEasy() */

//=======================================================//
/* CRIANDO ELEMENTOS */

/* function hanoiMedium(){
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
    tower1.addEventListener('click', selectedTower);
    tower2.addEventListener('click', selectedTower);
    tower3.addEventListener('click', selectedTower);
}   */



//--------------------------------------------------------------------------//

function hanoiHard() {

    const main              = document.querySelector('main');
    const gameContainer     = document.createElement('div');
    gameContainer.className = 'hanoi';
    gameContainer.id        = 'game-container';
    main.appendChild(gameContainer);
    
    const tower1 = document.createElement('div');
    const tower2 = document.createElement('div');
    const tower3 = document.createElement('div');
    
    tower1.className = 'towers';
    tower1.id = 't1';
    tower2.className = 'towers';
    tower2.id = 't2';
    tower3.className = 'towers';
    tower3.id = 't3';
    
    gameContainer.appendChild(tower1);
    gameContainer.appendChild(tower2);
    gameContainer.appendChild(tower3);

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
                    checkVictory()
                }
            }
            topDisk = null
        }
    }
    tower1.addEventListener('click', selectedTower);
    tower2.addEventListener('click', selectedTower);
    tower3.addEventListener('click', selectedTower);
}
hanoiHard()

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

    // Add eventeListener ao closeButton
    closeButton.addEventListener("click", closePopUp);

    // Add elementos à pagina
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
    const victoryTower = document.getElementById('t3')
        if (victoryTower.childElementCount === 5){
            console.log(victoryTower.childElementCount)
            return victoryPopUp()
        }
}