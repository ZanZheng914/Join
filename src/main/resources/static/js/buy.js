   	function getUserByName(name){
   		
    		var xhr = new XMLHttpRequest();
    		xhr.onreadystatechange= function(){
    			if(xhr.readyState === XMLHttpRequest.DONE){
    				if(xhr.status === 200){
    					var userData = JSON.parse(xhr.responseText);
    					updateUserInfo(userData);
    					updateUserOption(userData);
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
		    '星巴克向心門市': 'https://www.goldentulip-aesthetics.com.tw/wp-content/uploads/2021/12/2022_levino_-1-768x1086.jpg',
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
		        <td data-product-name="${product.productName}">${product.productName}</td>
		        <td data-price="${product.price}">${product.price}</td>
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
		            <input type="number" class="quantity" name="quantity" min="0" max="99" value="0">
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

class ShoppingCart{
	constructor(){
		this.items= [];
	}
	
	addItem(productName,price,ice,sugar,quantity,productId){
		if(quantity>0){
			const item ={
				productName,price,ice,sugar,quantity,productId,
				total: price * quantity
			};
			this.items.push(item);
			this.updateCart();
		}else{
			alert("請輸入正確的數量");
		}
	}
	
	clearCart(){
		this.items=[];
		this.updateCart();
	}
	//處理資料送往後端部分
    saveCart(userId) {
		const cartItems = this.items.map(item=>{
			return{
				userId,
				cartId: 1,
				productId: item.productId,
				quantity: item.quantity,
				price: item.price,
				subTotal: tiem.total,
				ice: item.ice,
				sugar: item.sugar,
			}
		})
		
        axios.post('/cartItem/saveCart', cartItems)
            .then(response => {
                console.log('購物車保存成功', response);
            })
            .catch(error => {
                console.error('購物車保存失敗', error);
            })
    }
	
	updateCart() {
	    const cartTable = document.querySelector('.table');
	    cartTable.innerHTML = ''; // 清空表格
	
	    const tableHeader = `
	        <div class="column">
	            <div class="col1-name">品名</div>
	            <div class="col2-price">價格</div>
	            <div class="col3-ice">冰塊</div>
	            <div class="col4-sugar">糖量</div>
	            <div class="col5-quantity">數量</div>
	            <div class="col6-subTotal">小計</div>
	        </div>
	    `;
	    cartTable.insertAdjacentHTML('beforeend', tableHeader);
	
	    let totalPrice = 0;
	
	    this.items.forEach(item => {
	        const subTotal = item.price * item.quantity;
	        totalPrice += subTotal;
	
	        const column = `
	            <div class="column">
	                <div class="col1-name">${item.productName}</div>
	                <div class="col2-price">${item.price}</div>
	                <div class="col3-ice">${item.ice}</div>
	                <div class="col4-sugar">${item.sugar}</div>
	                <div class="col5-quantity">${item.quantity}</div>
	                <div class="col6-subTotal">${subTotal.toFixed(0)}</div>
	            </div>
	        `;
	        cartTable.insertAdjacentHTML('beforeend', column);
	    });
	
	    // 更新total
	    const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
	    document.getElementById('count-item').textContent = totalItems + ' item';
	    document.getElementById('total-price').textContent = totalPrice.toFixed(0);
	}
}

const shoppingCart= new ShoppingCart();


document.getElementById('productList').addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {

	    const trElement = event.target.closest('tr');   
	    const productName = trElement.querySelector('[data-product-name]').getAttribute('data-product-name');
	    const price = parseFloat(trElement.querySelector('[data-price]').getAttribute('data-price'));
	    const ice = trElement.querySelector('.ice').value;
	    const sugar = trElement.querySelector('.sugar').value;
	    const quantity = parseInt(trElement.querySelector('.quantity').value);
	    const productId = parseInt(trElement.querySelector('[data-product-id]').getAttribute('data-product-id'));
		
		shoppingCart.addItem(productName,price,ice,sugar,quantity,productId);
		
		}
	})
		document.getElementById('cleancart').addEventListener('click',function(){
			console.log('Clearing Cart');
			shoppingCart.clearCart();
		})

	document.getElementById('saveCart').addEventListener('click',function(){
		const userId = 5; //預設為5，後續再從JWT獲取
		shoppingCart.saveCart(userId);
	})

	let CartVisible = false;
	
document.getElementById('cart').addEventListener('click',function(){
    const cartTable = document.querySelector('.table');

    const checkout = document.querySelector('.checkout');

    if(CartVisible){
        cartTable.style.display = 'none';
        checkout.style.display = 'none';
    }else{
        cartTable.style.display = 'block';
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