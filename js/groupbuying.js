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