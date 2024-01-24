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
    var menuImageElement = document.querySelector('.container-shop img');   
    var tableSection = document.querySelector('.tableSection');

    var ordersection = document.querySelector('.container-shop .col-9');

    deliveryDateSelect.addEventListener('change',function(){
        ordersection.style.display= 'block';
    var selectedDate = deliveryDateSelect.value;
    //如果日期選到today, 那就給我time2
        if (selectedDate === 'today3'){
            tableSection.style.display = 'table';
        displayDeliveryTime('time2');
        }else if (selectedDate === 'tomorrow3'){
            tableSection.style.display = 'none';
            tableSection2.style.display = 'table';
            displayDeliveryTime('time3');
        }else if (selectedDate === 'dayAfterTomorrow3'){
            tableSection2.style.display = 'none';
            tableSection.style.display = 'none';
            displayDeliveryTime('time4');
        }else{
            tableSection2.style.display = 'none';
            tableSection.style.display = 'none';
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

    var cart = [];

    $('.add-to-cart').click(function(){
        var productName = $(this).data('productName');
        var price = $(this).data('price');
        var quantity = parseInt($(this).closest('tr').find('.quantity').val());
        var ice = $(this).closest('tr').find('.ice').val();
        var sugar = $(this).closest('tr').find('.sugar').val();
    
        if(quantity > 0){
            var item = {
                productName: productName,
                price: price,
                ice: ice,
                sugar: sugar,
                quantity: quantity,
                total: price * quantity
            };
            cart.push(item);
            updateCart();
        } else {
            alert("請輸入正確的數量");
        };

    $('#cleancart').click(function(){
        cart = [];
        updateCart();
    });
});
    
    function updateCart(){
        var totalItems = 0;
        var totalPrice = 0;
        $('.table').empty();

        var header = '<div class="column">';
        header += '<div class="col1-priductName">品名</div>';
        header += '<div class="col2-price">價格</div>';
        header += '<div class="col3-ice">冰塊</div>';
        header += '<div class="col4-sugar">糖量</div>';
        header += '<div class="col5-quantity">數量</div>';
        header += '</div>';
        $('.table').append(header);
    
        cart.forEach(function(item){
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
            
            var column = '<div class="column">';
            column += '<div class="col1-priductName">' + item.priductName + '</div>';
            column += '<div class="col2-price">$' + item.price + '</div>';
            column += '<div class="col3-ice">' + item.ice + '</div>';
            column += '<div class="col4-sugar">' + item.sugar + '</div>';
            column += '<div class="col5-quantity">' + item.quantity + '</div>';
            column += '</div>';
            $('.table').append(column);
            $('.table').append('<br>');
        });
    
        $('#count-item').text(totalItems + ' item');
        $('#total-price').text(totalPrice);
    }   

    let CartVisible = false;

document.getElementById('cart').addEventListener('click',function(){
    const carttable = document.querySelector('.table');
    const cleancart = document.querySelector('.cleancart');
    const checkout = document.querySelector('.checkout');

    if(CartVisible){
        carttable.style.display = 'none';
        cleancart.style.display = 'none';
        checkout.style.display = 'none';
    }else{
        carttable.style.display = 'block';
        cleancart.style.display = 'block';
        checkout.style.display = 'block';
    }
    CartVisible = !CartVisible;
});

function checkout(){
    Swal.fire({
        icon:'success',
        title:'訂單已送出！'
    })
}