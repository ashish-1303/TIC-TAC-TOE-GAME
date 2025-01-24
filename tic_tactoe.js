let msg = document.querySelector(".msg");
let msgBox = document.querySelector(".msg-container")
let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("resetButton");
let newbtn = document.getElementById("newButton");

const winningcondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let currentPlayer = 'X'
let gameactive = true;

function cellClick(e) 
{
    const cell = e.target;
    if (gameactive && !cell.classList.contains('taken')) 
    {
        cell.textContent = currentPlayer;
        cell.classList.add('taken');
        if (checkWin(currentPlayer)) 
        {
            gameactive = false;
            msg.textContent = `${currentPlayer} Wins!`;
            // msg.style.display = 'block';
        }
        else if (isDraw()) 
        {
            gameactive = false;
            msg.textContent = "ITS A DRAW!";
            // msg.style.display = 'block';
        }
        else 
        {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) 
{
   return winningcondition.some(combination=>
   {
     return combination.every(index=>{return boxes[index].textContent===player});
   })        
}

function isDraw()
{
     // A Copy of 'boxes' array is made with [...boxes].

    return [...boxes].every(box=>box.classList.contains('taken'));
}

function restart()
{
  currentPlayer='X';
  gameactive=true;
//   msg.style.display="none";
  boxes.forEach(box=>{box.textContent="";
    box.classList.remove('taken');
  });  
}
boxes.forEach(box=>box.addEventListener("click",cellClick));
resetbtn.addEventListener("click",restart); 
newbtn.addEventListener("click",restart); 

