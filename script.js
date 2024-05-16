var btns;
var xbtns =[];
var obtns =[];
var count = 0;

function initialize() {
    var xbtns =[];
    var obtns =[];
    var count = 0;
    // adds a "click" action to each image of the table
    btns = document.querySelectorAll("input");
    for (var i = 0; i < btns.length; i ++) {
        btns[i].addEventListener('click', function(i) {
            change(i);
        }.bind(this, i));
    }
}

function myfunc() { 

    // Checking if Player X wins or not and after 
    // that disabled all the other fields 
    if (((btns[0].value == 'x' || btns[0].value == 'X') && 
        (btns[1].value == 'x' || btns[1].value == 'X') && 
        (btns[2].value == 'x' || btns[2].value == 'X')) ||

        ((btns[0].value == '0') && 
        (btns[1].value == '0') && 
        (btns[2].value == '0'))
        ) { 
        document.getElementById('print').innerHTML = `Player ${btns[0].value} wins`; 
        btns[3].disabled = true;
        btns[4].disabled = true;
        btns[5].disabled = true;
        btns[6].disabled = true;
        btns[7].disabled = true;
        btns[8].disabled = true;

        btns[0].style.color = "red";
        btns[1].style.color = "red";
        btns[2].style.color = "red";
    } 
    else if (((btns[0].value == 'x' || btns[0].value == 'X') &&
            (btns[3].value == 'x' || btns[3].value == 'X') && 
            (btns[6].value == 'x' || btns[6].value == 'X')) ||

            ((btns[0].value == '0') && 
            (btns[3].value == '0') && 
            (btns[6].value == '0'))
            ) {  
        document.getElementById('print').innerHTML = `Player ${btns[0].value} wins`; 
        btns[1].disabled = true;
        btns[2].disabled = true;
        btns[4].disabled = true;
        btns[5].disabled = true;
        btns[7].disabled = true;
        btns[8].disabled = true;

        btns[0].style.color = "red";
        btns[3].style.color = "red";
        btns[6].style.color = "red";
    } 
    else if (((btns[6].value == 'x' || btns[6].value == 'X') && 
            (btns[7].value == 'x' || btns[7].value == 'X') && 
            (btns[8].value == 'x' || btns[8].value == 'X')) ||

            ((btns[6].value == '0') && 
            (btns[7].value == '0') && 
            (btns[8].value == '0'))
            ) { 
        document.getElementById('print').innerHTML = `Player ${btns[6].value} wins`; 
        btns[0].disabled = true;
        btns[1].disabled = true;
        btns[2].disabled = true;
        btns[3].disabled = true;
        btns[4].disabled = true;
        btns[5].disabled = true;

        btns[6].style.color = "red";
        btns[7].style.color = "red";
        btns[8].style.color = "red";
    } 
    else if (((btns[2].value == 'x' || btns[2].value == 'X') && 
            (btns[5].value == 'x' || btns[5].value == 'X') && 
            (btns[8].value == 'x' || btns[8].value == 'X')) ||

            ((btns[2].value == '0') && 
            (btns[5].value == '0') && 
            (btns[8].value == '0'))
            ) { 
        document.getElementById('print').innerHTML = `Player ${btns[2].value} wins`; 
        btns[0].disabled = true;
        btns[1].disabled = true;
        btns[3].disabled = true;
        btns[4].disabled = true;
        btns[6].disabled = true;
        btns[7].disabled = true;

        btns[2].style.color = "red";
        btns[5].style.color = "red";
        btns[8].style.color = "red";
    } 
    else if (((btns[0].value == 'x' || btns[0].value == 'X') && 
            (btns[4].value == 'x' || btns[4].value == 'X') && 
            (btns[8].value == 'x' || btns[8].value == 'X')) ||

            ((btns[0].value == '0') && 
            (btns[4].value == '0') && 
            (btns[8].value == '0'))
            ) { 
        document.getElementById('print').innerHTML = `Player ${btns[0].value} wins`; 
        btns[1].disabled = true;
        btns[2].disabled = true;
        btns[3].disabled = true;
        btns[5].disabled = true;
        btns[6].disabled = true;
        btns[7].disabled = true;
        
        btns[0].style.color = "red";
        btns[4].style.color = "red";
        btns[8].style.color = "red";
    } 
    else if (((btns[2].value == 'x' || btns[2].value == 'X') && 
            (btns[4].value == 'x' || btns[4].value == 'X') && 
            (btns[6].value == 'x' || btns[6].value == 'X')) ||

            ((btns[2].value == '0') && 
            (btns[4].value == '0') && 
            (btns[6].value == '0'))
            ) { 
        document.getElementById('print').innerHTML = `Player ${btns[2].value} wins`;  

        btns[0].disabled = true;
        btns[1].disabled = true;
        btns[3].disabled = true;
        btns[5].disabled = true;
        btns[7].disabled = true;
        btns[8].disabled = true;
        
        btns[2].style.color = "red";
        btns[4].style.color = "red";
        btns[6].style.color = "red";
    } 
    else if (((btns[1].value == 'x' || btns[1].value == 'X') && 
            (btns[4].value == 'x' || btns[4].value == 'X') && 
            (btns[7].value == 'x' || btns[7].value == 'X')) ||

            ((btns[1].value == '0') && 
            (btns[4].value == '0') && 
            (btns[7].value == '0'))
            ) { 
        document.getElementById('print').innerHTML = `Player ${btns[1].value} wins`; 
        btns[0].disabled = true;
        btns[2].disabled = true;
        btns[3].disabled = true;
        btns[5].disabled = true;
        btns[6].disabled = true;
        btns[8].disabled = true;
        
        btns[1].style.color = "red";
        btns[4].style.color = "red";
        btns[7].style.color = "red";
        
    } 
    else if (((btns[3].value == 'x' || btns[3].value == 'X') && 
            (btns[4].value == 'x' || btns[4].value == 'X') && 
            (btns[5].value == 'x' || btns[5].value == 'X')) ||

            ((btns[3].value == '0') && 
            (btns[4].value == '0') && 
            (btns[5].value == '0'))
            ) { 
        document.getElementById('print').innerHTML = `Player ${btns[3].value} wins`; 
        btns[0].disabled = true;
        btns[1].disabled = true;
        btns[2].disabled = true;
        btns[6].disabled = true;
        btns[7].disabled = true;
        btns[8].disabled = true;
        
        btns[3].style.color = "red";
        btns[4].style.color = "red";
        btns[5].style.color = "red";
    } 
    // Checking of Player 0 finish 
    // Here, Checking about Tie 
    else if (
        (btns[0].value == 'X' || btns[0].value == '0') && 
        (btns[1].value == 'X' || btns[1].value == '0') && 
        (btns[2].value == 'X' || btns[2].value == '0') && 
        (btns[3].value == 'X' || btns[3].value == '0') && 
        (btns[4].value == 'X' || btns[4].value == '0') && 
        (btns[5].value == 'X' || btns[5].value == '0') && 
        (btns[6].value == 'X' || btns[6].value == '0') && 
        (btns[7].value == 'X' || btns[7].value == '0') && 
        (btns[8].value == 'X' || btns[8].value == '0')
        ) 
    { 
        document.getElementById('print').innerHTML = "Match Tie"; 
    } 
    else { 
  
        // Here, Printing Result 
        if (flag == 1) { 
            document.getElementById('print').innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print').innerHTML = "Player 0 Turn"; 
        }  
    } 
} 
  
// Function to reset game 
function myfunc_2() { 
    location.reload(); 
} 
  
// Here onwards, functions check turn of the player 
// and put accordingly value X or 0 
flag = 1; 

function change(num) {
    if (flag == 1) {
        btns[num].value = "X";
        flag = 0;
        xbtns.push(btns[num]);
        if (xbtns.length > 3) {
            xbtns[0].value = "";
            xbtns[0].disabled = false;
            xbtns.shift();
        }
    } else if (flag == 0) {
        btns[num].value = "0";
        flag = 1;
        obtns.push(btns[num]);
        if (obtns.length > 3) {
            obtns[0].value = "";
            obtns[0].disabled = false;
            obtns.shift();
        }
    }
    btns[num].disabled = true;
    myfunc();
} 