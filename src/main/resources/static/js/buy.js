   	function getUserByName(name){
   		
    		var xhr = new XMLHttpRequest();
    		xhr.onreadystatechange= function(){
    			if(xhr.readyState === XMLHttpRequest.DONE){
    				if(xhr.status === 200){
    					var userData = JSON.parse(xhr.responseText);
    					updateUserInfo(userData);
    				}else{
    					console.log("讀取資料失敗:",xhr.statusText);
    				}
    			}
    		};
  		
    		xhr.open("GET", `/user/name/${name}`,true);
    		xhr.send();
    	}
    	function updateUserInfo(userData){   
    	    var companyElement = document.querySelector("[data-id='company']");
    	    var deptElement = document.querySelector("[data-id='dept']");
    	    var emailElement = document.querySelector("[data-id='email']");

            companyElement.innerText = `${userData.company}`;
            deptElement.innerText = `${userData.dept}`;
            emailElement.innerText = `${userData.email}`;
           
		}
    	
    	async function initShopList() {
    	    try {
    	        const response = await axios.get('/shops');
    	        if (response.status === 200) {
    	            const shops = response.data;
    	            const shopSelect = document.getElementById('shopSelect');
    	
    	            // 清空之前的選項
    	            shopSelect.innerHTML = '';
    	
    	            // 動態生成選項
    	            shops.forEach(shop => {
    	                const option = document.createElement('option');
    	                option.value = shop.shopId;
    	                option.textContent = shop.shopName;
    	                shopSelect.appendChild(option);
    	            });
    	
    	            // 頁面載入時觸發一次
    	            if (shops.length > 0) {
    	                updateShopInfo(shops[0].shopId);
    	                if (shops.length > 0 && shops[0].shopId !== undefined) {
    	                    initProductList(shops[0].shopId);
    	                }
    	            }
    	        } else {
    	            console.error('回應店家資訊失敗:', response.statusText);
    	        }
    	    } catch (error) {
    	        console.error('獲取店家資訊失敗', error);
    	    }
    	}
    	const menuImageUrls={
		    '八曜和茶台中精誠門市': 'https://8yotea.com/wp-content/uploads/2023/12/ZZ06.jpg',
		    '一沐日台中大墩店': 'https://kohi.tw/wp-content/uploads/2024/01/%E4%B8%80%E6%B2%90%E6%97%A5%E5%AE%98%E6%96%B9%E8%8F%9C%E5%96%AE2024%E6%9C%80%E6%96%B0%E5%85%AB%E6%9B%9C%E8%81%AF%E5%90%8D.jpeg',
		}
    	
    	async function updateShopInfo(shopId) {

    	    try {
       	        const response = await axios.get(`/shops/${shopId}`);
    	       
    	        if (response.status === 200) {
    	            const selectedShop = response.data;

    	            if (selectedShop != null) {
    	                const shopName = selectedShop.shopName;
    	                
    	                //依據shopName改變img菜單
    	                const menuImage= document.getElementById('menuImage');
    	                menuImage.src=getMenuImageUrl(shopName);
    	                
    	            	initProductList(shopId);
    	            	
    	            } else {
    	                console.error('error:', shopId);
    	         	   }
    	        	}    	        
    	   	 } catch (error) {
    	        console.error('獲取店家名稱失敗', error);
    	    }
    	}
   	function getMenuImageUrl(shopName){
		   return menuImageUrls[shopName]
	   };

    initShopList();
    
	async function initProductList(shopId) {
		try{
			console.log("initProduct時:",shopId);
			const response = await axios.get(`/product/${shopId}`);
			if(response.status === 200){
				const products = response.data;
			    const productSelect = document.getElementById('productList');
			    const productOptions = generateProductOptions(products);			    
			    productSelect.innerHTML = productOptions;				
			}else{
				console.error('獲取商品資料失敗（response):',response.statusText);
			}			
		}catch(error){
			console.error('獲取商品資料失敗,catch:', error);
		}			
	}
	
	function generateProductOptions(products){
		
		return products.map(product => `
	        <tr>
		        <td>${product.productName}</td>
		        <td>${product.price}</td>
		        <td>
		            <select class="ice" name="ice">
		                <option value="正常冰">正常冰</option>
		                <option value="少冰">少冰</option>
		                <option value="去冰">去冰</option>
		            </select>
		        </td>
		        <td>
		            <select class="sugar" name="sugar">
		                <option value="正常糖">正常糖</option>
		                <option value="少糖">少糖</option>
		                <option value="無糖">無糖</option>
		            </select>
		        </td>
		        <td>
		            <input type="number" class="quantity" name="quantity" min="0" max="99" value="1">
		        </td>
		        <td>
		            <button class="add-to-cart" 
		                    data-product-id="${product.productId}" 
		                    data-product-name="${product.productName}" 
		                    data-price="${product.price}">
	                    添加到購物車
		            </button>
		        </td>
		    </tr>
		`).join('');
	}
	


var deliveryTimes = {
    "time1": "09:00-11:00",
    "time2": "11:00-13:00",
    "time3": "13:00-15:00",
    "time4": "15:00-17:00",
    "time5": "17:00-19:00",
    "time6": "19:00-21:00"
    }

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