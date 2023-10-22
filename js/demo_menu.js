const menu = {
    "shop1": {
        "blacktea": {"price": 25},
        "greentea": {"price": 30},
        "coffee": {"price": 50}
    },
    "shop2": {
        "water": {"price": 10},
        "juice": {"price": 40},
        "beer": {"price": 45}
    }
};

const iceOptions = {
    "去冰": {"label": "去冰"},
    "微冰": {"label": "微冰"},
    "少冰": {"label": "少冰"},
    "正常": {"label": "正常"}
};

$(document).ready(function() {
    const shopSelect = $("#shopSelect");
    const itemSelect = $("#itemSelect");
    const iceSelect = $("#iceSelect");
    const priceDisplay = $("#price");

    shopSelect.change(function() {
        const shop = shopSelect.val();
        const options = Object.keys(menu[shop]).map(item => `<option value="${item}" data-price="${menu[shop][item].price}">${item}</option>`).join('');
        itemSelect.html(options);
        updatePrice();
    });

    function updatePrice() {
        const itemPrice = parseInt(itemSelect.find(':selected').data('price'));
        priceDisplay.text(itemPrice);
    }

    // 初始化冰量選項
    const iceOptionsHTML = Object.keys(iceOptions).map(key => `<option value="${key}">${iceOptions[key].label}</option>`).join('');
    iceSelect.html(iceOptionsHTML);

    itemSelect.change(function() {
        updatePrice();
    });

    iceSelect.change(function() {
        updatePrice();
    });
});
