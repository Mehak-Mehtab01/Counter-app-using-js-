let num = 0;
let main = document.getElementById("main");
function btn(){
    num++;
    main.textContent= num;
}
function btn1(){
    num--;
    main.textContent= num;
}
function btn2(){
    num=0;
    main.textContent= num;
}