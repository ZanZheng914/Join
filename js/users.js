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
