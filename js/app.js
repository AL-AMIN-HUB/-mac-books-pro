// update memory price
function getMemoryCost(price) {
    const extra16GBMemoryCost = document.getElementById('extra-memory-cost');
    extra16GBMemoryCost.innerText = price;
    totalPriceUpdate();
};
document.getElementById('memory8-btn').addEventListener('click', function() {
    getMemoryCost(0);
});
document.getElementById('memory16-btn').addEventListener('click', function() {
    getMemoryCost(180);
});


// update storage price
function getStorageCost(price) {
    const extra256StorageCost = document.getElementById('extra-storage-cost');
    extra256StorageCost.innerText = price;
    totalPriceUpdate();
};

document.getElementById('ssd-256gb').addEventListener('click', function() {
    getStorageCost(0);
});
document.getElementById('ssd-512gb').addEventListener('click', function() {
    getStorageCost(100);
});
document.getElementById('ssd-1TB').addEventListener('click', function() {
    getStorageCost(180);
});


// delivery charge price
function updateDeliveryCost(cost) {
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = cost;
    totalPriceUpdate();
};

document.getElementById('delivery-free-btn').addEventListener('click', function() {
    updateDeliveryCost(0);
});
document.getElementById('delivery-charge-btn').addEventListener('click', function() {
    updateDeliveryCost(20);
});


// total price handle
function totalPriceUpdate() {
    const bestPrice = document.getElementById('best-price').innerText;
    const extraMemoryPrice = document.getElementById('extra-memory-cost').innerText;
    const extraStoragePrice = document.getElementById('extra-storage-cost').innerText;
    const deliverCharge = document.getElementById('delivery-charge').innerText;

    let bestPriceSum = parseInt(bestPrice) + parseInt(extraMemoryPrice) + parseInt(extraStoragePrice) + parseInt(deliverCharge);

    const totalPrice = document.getElementById('total-price');

    totalPrice.innerText = bestPriceSum;
    const totalPomoPrice = document.getElementById('total-with-pomo');
    totalPomoPrice.innerText = bestPriceSum;
};


// coupon code handle hear
document.getElementById('pomo-btn').addEventListener('click', function() {
    const pomocode = document.getElementById('pomo-input');
    const totalPrice = document.getElementById('total-price');
    const totalPomoPrice = document.getElementById('total-with-pomo');
    const discount = 20;
    const coupon = 'stevekaku';
    const input = pomocode.value;

    if (input.toLowerCase() == coupon.toLowerCase()) {
        totalPomoPrice.innerText = totalPrice.innerText - (totalPrice.innerText * discount / 100);
        pomocode.value = '';
    }
    if (input.toLowerCase() != coupon.toLowerCase()) {
        pomocode.value = '';
    }
});