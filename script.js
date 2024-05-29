var btns;
var power;
var xbtns =[];
var obtns =[];
var empty =[];
var count = 0;
var confirmed = 0;
var ddosConfirmed = 0;
var phishingConfirmed = 0;
var firewallConfirmed = 0;
var backupConfirmed = 0;
var disabled = 0;

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

    power = document.querySelectorAll("button");
    for (var i = 0; i < power.length; i ++) {
        power[i].addEventListener('click', function(i) {
            powers(i);
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
        for (let x of power) {
            if (x.innerHTML != " RESET ") {
                x.disabled = true;
            }
        }
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
        for (let x of power) {
            if (x.innerHTML != " RESET ") {
                x.disabled = true;
            }
        }
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
        for (let x of power) {
            if (x.innerHTML != " RESET ") {
                x.disabled = true;
            }
        }
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
        for (let x of power) {
            if (x.innerHTML != " RESET ") {
                x.disabled = true;
            }
        }
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
        for (let x of power) {
            if (x.innerHTML != " RESET ") {
                x.disabled = true;
            }
        }
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
        for (let x of power) {
            if (x.innerHTML != " RESET ") {
                x.disabled = true;
            }
        } 

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
        for (let x of power) {
            if (x.innerHTML != " RESET ") {
                x.disabled = true;
            }
        } 
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
        for (let x of power) {
            if (x.innerHTML != " RESET ") {
                x.disabled = true;
            }
        }
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
        for (let x of power) {
            if (x.innerHTML != " RESET ") {
                x.disabled = true;
            }
        }
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
        if (disabled == 1) {
            for (let x of empty) {
                x.disabled = false;
            }
            disabled = 0;
        }
        btns[num].value = "X";
        flag = 0;
        xbtns.push(btns[num]);
        document.getElementById('print1').innerHTML = "";
        document.getElementById('print2').innerHTML = "";
        if (xbtns.length > 3) {
            xbtns[0].value = "";
            xbtns[0].disabled = false;
            xbtns.shift();
        }
    } else if (flag == 0) {
        if (disabled == 1) {
            for (let x of empty) {
                x.disabled = false;
            }
            disabled = 0;
        }
        btns[num].value = "0";
        flag = 1;
        obtns.push(btns[num]);
        document.getElementById('print1').innerHTML = "";
        document.getElementById('print2').innerHTML = "";
        if (obtns.length > 3) {
            obtns[0].value = "";
            obtns[0].disabled = false;
            obtns.shift();
        }
    }
    btns[num].disabled = true;
    myfunc();
}

function powers(num) {
    empty = [];
    if (flag == 1 && num == 0) {
        if (ddosConfirmed == 0) {
            document.getElementById('print1').innerHTML = `DDos: Randomly places 1-2 symbols`;
            document.getElementById('print2').innerHTML = `Click again to activate`;
            ddosConfirmed = 1;
        } else if (ddosConfirmed == 1) {
            for (let x of btns) {
                if (x.value == "") {
                    empty.push(x);
                }
            }
            let y = Math.floor(Math.random() * empty.length);
            empty[y].value = "X";
            empty[y].disabled = true;
            y = Math.floor(Math.random() * empty.length);
            empty[y].value = "X";
            empty[y].disabled = true;
            power[num].disabled = true;
            flag = 0;
            ddosConfirmed = 0;
            document.getElementById('print1').innerHTML = "";
            document.getElementById('print2').innerHTML = "";
            myfunc();
        }
    } else if (flag == 1 && num == 1) {
        if (phishingConfirmed == 0) {
            document.getElementById('print1').innerHTML = `Phishing: Randomly replaces one enemy symbol with your own`;
            document.getElementById('print2').innerHTML = `Click again to activate`;
            phishingConfirmed = 1;
        } else if (phishingConfirmed == 1) {
            for (let x of btns) {
                if (x.value == "0") {
                    empty.push(x);
                }
            }
            if (empty.length == 0) {
                phishingConfirmed = 0;
                document.getElementById('print1').innerHTML = `Enemy has no placed symbols`;
                document.getElementById('print2').innerHTML = "";
            } else {
                let y = Math.floor(Math.random() * empty.length);
                empty[y].disabled = false;
                empty[y].value = "X";
                empty[y].disabled = true;
                power[num].disabled = true;
                flag = 0;
                document.getElementById('print1').innerHTML = "";
                document.getElementById('print2').innerHTML = "";
                phishingConfirmed = 0;
                myfunc();
            }
        }
    } else if (flag == 1 && num == 2) {
        if (firewallConfirmed == 0) {
            document.getElementById('print1').innerHTML = `Firewall: Disables enemy's use of cards next turn`;
            document.getElementById('print2').innerHTML = `Click again to activate`;
            firewallConfirmed = 1;
        } else if (firewallConfirmed == 1) {
            for (let x = 4; x < 8; x ++) {
                if (power[x].disabled != true) {
                    empty.push(power[x]);
                }
                power[x].disabled = true;
            }
            disabled = 1;
            power[num].disabled = true;
            document.getElementById('print1').innerHTML = "";
            document.getElementById('print2').innerHTML = "";
            flag = 0;
            firewallConfirmed = 0;
            myfunc();
        }
    } else if (flag == 1 && num == 3) {
        if (backupConfirmed == 0) {
            document.getElementById('print1').innerHTML = `Data Backup: Resets the board to a blank state`;
            document.getElementById('print2').innerHTML = `Click again to activate`;
            backupConfirmed = 1;
        } else if (backupConfirmed == 1) {
            for (let x of btns) {
                x.disabled = false;
                x.value = "";
            }
            flag = 0;
            power[num].disabled = true;
            document.getElementById('print1').innerHTML = "";
            document.getElementById('print2').innerHTML = "";
            backupConfirmed = 0;
            myfunc();
        }
    } else if (flag == 0 && num == 4) {
        if (ddosConfirmed == 0) {
            document.getElementById('print1').innerHTML = `DDos: Randomly places 1-2 symbols`;
            document.getElementById('print2').innerHTML = `Click again to activate`;
            ddosConfirmed = 1;
        } else if (ddosConfirmed = 1) {
            for (let x of btns) {
                if (x.value == "") {
                    empty.push(x);
                }
            }
            let y = Math.floor(Math.random() * empty.length);
            empty[y].value = "0";
            empty[y].disabled = true;
            y = Math.floor(Math.random() * empty.length);
            empty[y].value = "0";
            empty[y].disabled = true;
            power[num].disabled = true;
            flag = 1;
            ddosConfirmed = 0;
            document.getElementById('print1').innerHTML = "";
            document.getElementById('print2').innerHTML = "";
            myfunc();
        }
    } else if (flag == 0 && num == 5) {
        if (phishingConfirmed == 0) {
            document.getElementById('print1').innerHTML = `Phishing: Randomly replaces one enemy symbol with your own`;
            document.getElementById('print2').innerHTML = `Click again to activate`;
            phishingConfirmed = 1;
        } else if (phishingConfirmed == 1) {
            for (let x of btns) {
                if (x.value == "X") {
                    empty.push(x);
                }
            }
            if (empty.length == 0) {
                phishingConfirmed = 0;
                document.getElementById('print1').innerHTML = `Enemy has no placed symbols`;
                document.getElementById('print2').innerHTML = "";
            } else {
                let y = Math.floor(Math.random() * empty.length);
                empty[y].disabled = false;
                empty[y].value = "0";
                empty[y].disabled = true;
                power[num].disabled = true;
                flag = 1;
                document.getElementById('print1').innerHTML = "";
                document.getElementById('print2').innerHTML = "";
                phishingConfirmed = 0;
                myfunc();
            }
        }
    } else if (flag == 0 && num == 6) {
        if (firewallConfirmed == 0) {
            document.getElementById('print1').innerHTML = `Firewall: Disables enemy's use of cards next turn`;
            document.getElementById('print2').innerHTML = `Click again to activate`;
            firewallConfirmed = 1;
        } else if (firewallConfirmed == 1) {
            for (let x = 0; x < 4; x ++) {
                if (power[x].disabled != true) {
                    empty.push(power[x]);
                }
                power[x].disabled = true;
            }
            disabled = 1;
            power[num].disabled = true;
            document.getElementById('print1').innerHTML = "";
            document.getElementById('print2').innerHTML = "";
            flag = 1;
            firewallConfirmed = 0;
            myfunc();
        }
    } else if (flag == 0 && num == 7) {
        if (backupConfirmed == 0) {
            document.getElementById('print1').innerHTML = `Data Backup: Resets the board to a blank state`;
            document.getElementById('print2').innerHTML = `Click again to activate`;
            backupConfirmed = 1;
        } else if (backupConfirmed == 1) {
            for (let x of btns) {
                x.disabled = false;
                x.value = "";
            }
            flag = 1;
            power[num].disabled = true;
            document.getElementById('print1').innerHTML = "";
            document.getElementById('print2').innerHTML = "";
            backupConfirmed = 0;
            myfunc();
        }
    }
    
}
