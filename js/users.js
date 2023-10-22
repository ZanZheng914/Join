// var user_A={
//     companyName:"台GG-台中廠",
//     department:"R滴",
//     nickname:"馬斯克",
// };  


// var user_B={
//     companyName:"台GG-台中廠",
//     department:"R滴",
//     nickname:"皮卡丘",
//     tel:"0912345678",
// };  

$(document).ready(function(){
  var users = {
    "user_A": {
      companyName: "台GG-台中廠",
      department: "R滴",
      nickname: "馬斯克",
      tel:"04-3345678"
    },
    "user_B": {
      companyName: "台GG-台中廠",
      department: "客服部",
      nickname: "皮卡丘",
      tel: "0912345678"
    }
  };

  $(".user-select").on("change", function(){
    var selectedUser = $(this).val();
    var user = users[selectedUser];
    if(user){
      $("#userCompanyName").text(user.companyName);
      $("#userDepartment").text(user.department);
      $("#userNickname").text(user.nickname);
      $("#userTel").text(user.tel);
    } else {
      $("#userCompanyName").text("");
      $("#userDepartment").text("");
      $("#userNickname").text("");
      $("#userTel").text("");
    }
  });
});

// document.getElementById("user_A_companyName").textContent=user.user_A.companyName
// document.getElementById("user_A_department").textContent=user.user_A.department;
// document.getElementById("user_A_nickname").textContent=user.user_A.nickname;
// document.getElementById("user_B_department").textContent=user.user_B.department;
// document.getElementById("user_B_nickname").textContent=user.user_B.nickname;
// document.getElementById("user_B_tel").textContent=user.user_B.tel;
