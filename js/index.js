document.getElementById('lottery').addEventListener('click',function(){

    var drinkdata = ['八八喝茶 - 柚香覺醒','壹咖啡 - 巧克力星冰樂','大碗子 - 愛文芒果冰沙','一木日 - 粉粿桂圓檸檬','50收 - 青茶','Tiktop - 冷泡綠茶','八八喝茶 - 匠心奶茶','壹咖啡 - 焦糖瑪奇朵','大碗子 - 翡翠檸檬','50收 - 珍珠奶茶'  ];
    var randomdrink = Math.floor(Math.random()* drinkdata.length);
    console.log(randomdrink);
    var selecteddrink = drinkdata[randomdrink];
    Swal.fire({
        title: selecteddrink,
        confirmButtonText:'Great!'  ,
        
    })


})