let num = 0;
function btn(){
    let main = document.getElementById("main");
    num++;
    main.textContent= num;
}
function btn1(){
    let main = document.getElementById("main");
    num--;
    main.textContent= num;
}
function btn2(){
    let main = document.getElementById("main");
    num=0;
    main.textContent= num;
}