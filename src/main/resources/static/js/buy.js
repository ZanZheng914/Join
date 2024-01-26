/*
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
const dayAfterTomorrow = new Date();
dayAfterTomorrow.setDate(today.getDate() + 2);

document.getElementById("deliveryToday").textContent = `今天 ${today.toDateString()}`;
document.getElementById("deliveryTomorrow").textContent = `明天 ${tomorrow.toDateString()}`;
document.getElementById("deliverydayAfterTomorrow").textContent = `後天 ${dayAfterTomorrow.toDateString()}`;
*/

var deliveryTimes = {
    "time1": "09:00-11:00",
    "time2": "11:00-13:00",
    "time3": "13:00-15:00",
    "time4": "15:00-17:00",
    "time5": "17:00-19:00",
    "time6": "19:00-21:00"
};
/*    var deliveryDateSelect = document.getElementById('deliveryDate');
    var deliveryTimeDisplay = document.getElementById('deliveryTimeDisplay');
    var shopNameElement = document.getElementById('shopName');
    var menuImageElement = document.querySelector('.container-shop img');   
    var tableSection = document.querySelector('.tableSection');
    var ordersection = document.querySelector('.container-shop .col-9');
*/
    var cart = [];

    $('.add-to-cart').click(function(){
        var productName = $(this).data('product-name');
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
        header += '<div class="col1-productName">品名</div>';
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
            column += '<div class="col1-productName">' + item.productName + '</div>';
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