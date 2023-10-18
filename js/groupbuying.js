//設定日期參數1
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate()+1);
const dayAfterTomorrow = new Date();
dayAfterTomorrow.setDate(today.getDate()+2);

document.getElementById("today").textContent = `今天 ${today.toDateString()}`;
document.getElementById("tomorrow").textContent = `明天 ${tomorrow.toDateString()}`;
document.getElementById("dayAfterTomorrow").textContent = `後天 ${dayAfterTomorrow.toDateString()}`;
// 設定參數2
const today2 = new Date();
const tomorrow2 = new Date();
tomorrow.setDate(today2.getDate()+1);
const dayAfterTomorrow2 = new Date();
dayAfterTomorrow2.setDate(today2.getDate()+2);

document.getElementById("today2").textContent = `今天 ${today2.toDateString()}`;
document.getElementById("tomorrow2").textContent = `明天 ${tomorrow2.toDateString()}`;
document.getElementById("dayAfterTomorrow2").textContent = `後天 ${dayAfterTomorrow2.toDateString()}`;

//
function toggleDropdown1(){
    var dropdown1 = document.getElementById("myDropdown1");
    dropdown1.classList.toggle("show");
}
function selectOption1(option){
    document.getElementById("dropdownButton1").textContent =option;
    var dropdown1 = document.getElementById("myDropdown1");
    dropdown1.classList.remove("show");
}

function toggleDropdown2(){
    var dropdown2 = document.getElementById("myDropdown2");
    dropdown2.classList.toggle("show");
}
function selectOption2(option){
    document.getElementById("dropdownButton2").textContent =option;
    var dropdown2 = document.getElementById("myDropdown2");
    dropdown2.classList.remove("show");
}
function toggleDropdown3(){
    var dropdown3 = document.getElementById("myDropdown3");
    dropdown3.classList.toggle("show");
}
function selectOption3(option){
    document.getElementById("dropdownButton3").textContent =option;
    var dropdown3 = document.getElementById("myDropdown3");
    dropdown3.classList.remove("show");
}