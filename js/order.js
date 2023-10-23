const today3 = new Date();
const tomorrow3 = new Date();
tomorrow3.setDate(today3.getDate() + 1);
const dayAfterTomorrow3 = new Date();
dayAfterTomorrow3.setDate(today3.getDate() + 2);

document.getElementById("deliveryToday3").textContent = `今天 ${today3.toDateString()}`;
document.getElementById("deliveryTomorrow3").textContent = `明天 ${tomorrow3.toDateString()}`;
document.getElementById("deliverydayAfterTomorrow3").textContent = `後天 ${dayAfterTomorrow3.toDateString()}`;

var deliveryTimes = {
    "time1": "09:00-11:00",
    "time2": "11:00-13:00",
    "time3": "13:00-15:00",
    "time4": "15:00-17:00",
    "time5": "17:00-19:00",
    "time6": "19:00-21:00"
};
    var deliveryDateSelect = document.getElementById('deliveryDate');
    var deliveryTimeDisplay = document.getElementById('deliveryTimeDisplay');
    var shopNameElement = document.getElementById('shopName');
    var menuImageElement = document.querySelector('.container-shop1 img');    

    deliveryDateSelect.addEventListener('change',function(){
    var selectedDate = deliveryDateSelect.value;
    //如果日期選到today, 那就給我time2
        if (selectedDate === 'today3'){
        displayDeliveryTime('time2');
        }else if (selectedDate === 'tomorrow3'){
            displayDeliveryTime('time3');
        }else if (selectedDate === 'dayAfterTomorrow3'){
            displayDeliveryTime('time4');
        }else{
            clearDeliveryTime();
        }

        if (selectedDate === 'today3') {
            shopNameElement.textContent = eighttea.shopName;
            menuImageElement.src = '';
            menuImageElement.src =  eighttea.menuImg;
        } else if (selectedDate === 'tomorrow3') {
            shopNameElement.textContent = tiktop.shopName;
            menuImageElement.src = '';
            menuImageElement.src =  tiktop.menuImg;
        } else if (selectedDate === 'dayAfterTomorrow3') {
            shopNameElement.textContent = bigbowl.shopName;
            menuImageElement.src = '';
            menuImageElement.src =  bigbowl.menuImg;
        } else {
            shopNameElement.textContent = '';
            menuImageElement.src = '';
        }
    }    
);
function displayDeliveryTime(selectedTime) {
    var deliveryTime = deliveryTimes[selectedTime];
    deliveryTimeDisplay.textContent = `${deliveryTime}`;
}

function clearDeliveryTime() {
    deliveryTimeDisplay.textContent = '';
}

var eighttea = {
    "shopName" : "八八喝茶",
    "menuImg":  "https://8yotea.com/wp-content/uploads/2023/09/menu-2023.jpg",
        "menu" : [
    {"name":"請選擇一種飲料","price": null},
    {"name":"紅茶","price":25},
    {"name":"綠茶","price":25},
    {"name":"八曜和茶","price":35},
    {"name":"奶茶","price":40},
    {"name":"珍珠奶茶","price":50},
    ]
    }
    
    var tiktop={
        "shopName": "tiktop",
        "menuImg": 'https://www.teatop.com.tw/upload/package_menu_m/ALL_package_menu_23J12_G85cKR9F1a.jpg',
        "menu":[
            {"name":"請選擇一種飲料","price": null},
            {"name":"招牌高山青","price":35},
            {"name":"芒果鳳梨茶","price":60},
            {"name":"當代雙Ｑ","price":55},
            {"name":"冷泡綠茶","price":35},
            {"name":"翡翠洛神","price":45},
        ]
    }
    var bigbowl={
        "shopName": "大碗子",
        "menuImg": 'https://twcoupon.com/images/menu/p_dayungstea_n.jpg',
        "menu":[
            {"name":"請選擇一種飲料","price": null},
            {"name":"愛文芒果冰沙","price":180},
            {"name":"桑椹旺來","price":70},
            {"name":"蔬果汁","price":65},
            {"name":"柳橙汁","price":70},
            {"name":"神仙奶茶","price":65},
        ]
    }