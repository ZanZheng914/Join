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
tomorrow2.setDate(today2.getDate()+1);
const dayAfterTomorrow2 = new Date();
dayAfterTomorrow2.setDate(today2.getDate()+2);

document.getElementById("today2").textContent = `今天 ${today2.toDateString()}`;
document.getElementById("tomorrow2").textContent = `明天 ${tomorrow2.toDateString()}`;
document.getElementById("dayAfterTomorrow2").textContent = `後天 ${dayAfterTomorrow2.toDateString()}`;

//設定送餐日期的function
function toggleDropdown1(){
    var dropdown1 = document.getElementById("myDropdown1");
    dropdown1.classList.toggle("show");
}
function selectOption1(option){
    var x =     document.getElementById(option).innerText;
    dropdownButton1.innerText = x;
    var dropdown1 = document.getElementById("myDropdown1");
    dropdown1.classList.remove("show");
}
//設定截止日期的function
function toggleDropdown2(){
    var dropdown2 = document.getElementById("myDropdown2");
    dropdown2.classList.toggle("show");
}
function selectOption2(option){
    var y =     document.getElementById(option).innerText;
    dropdownButton2.innerText = y;
    var dropdown2 = document.getElementById("myDropdown2");
    dropdown2.classList.remove("show");
}
// 設定店家參數
function toggleDropdown3(){
    var dropdown3 = document.getElementById("myDropdown3");
    dropdown3.classList.toggle("show");
}
function selectOption3(option){
    document.getElementById("dropdownButton3").textContent =option;
    var dropdown3 = document.getElementById("myDropdown3");
    dropdown3.classList.remove("show");
}

//設定送出按鈕 利用jQuery
$(document).ready(function(){
    $(".submitbtn").on("click",function(){
        var yes = confirm("您已送出！\n\n點餐去？");
        if (yes){
            window.location.href="order.html";
        } else{
            
        }
    })
})

var deliveryTimes = {
    "time1": "09:00-11:00",
    "time2": "11:00-13:00",
    "time3": "13:00-15:00",
    "time4": "15:00-17:00",
    "time5": "17:00-19:00",
    "time6": "19:00-21:00"
};
// 設定送餐時間參數
function toggleDropdownt(){
    var dropdownt = document.getElementById("myDropdownt");
    dropdownt.classList.toggle("show");
}
function selectOptiont(option){
    var selectedTime = deliveryTimes[option];
    document.getElementById("dropdownButtont").textContent = selectedTime;
    var dropdownt = document.getElementById("myDropdownt");
    dropdownt.classList.remove("show");
}

