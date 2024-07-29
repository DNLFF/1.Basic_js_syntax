function calculateTask1(){
    
    let algebra = Number.parseInt(document.getElementById("algebra").value);
    let geography = Number.parseInt(document.getElementById("geography").value);
    let physics = Number.parseInt(document.getElementById("physics").value);
if (!algebra || !geography || !physics){
alert("Введите корректные значения!");
return;
}
let resTask1 = averageMark(algebra, geography, physics);
document.getElementById("task1Result").innerText = `Средняя оценка равна: ${resTask1}`;
}

function calculateTask2(){
    let userName = document.getElementById("username").value;
    if(!userName){
        alert("Введите имя пользователя!");
    return;
    }
    let resTask2 = sayHello(userName);
    document.getElementById("task2Result").innerText = resTask2;
}
function calculateTask3(){
let resTask3 = helpForVasya();
document.getElementById("task3Result").innerText = resTask3;

}