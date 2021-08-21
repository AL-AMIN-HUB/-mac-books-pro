// update memory price
function getMemoryCost(price) {
    const extra16GBMemoryCost = document.getElementById('extra-memory-cost');
    extra16GBMemoryCost.innerText = price;
    return extra16GBMemoryCost;
}
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
    return extra256StorageCost;
}
document.getElementById('ssd-256gb').addEventListener('click', function() {

    getStorageCost(0);

});
document.getElementById('ssd-512gb').addEventListener('click', function() {

    getStorageCost(100);

});
document.getElementById('ssd-1TB').addEventListener('click', function() {

    getStorageCost(180);

});


// delivery charge

function updateDeliveryCost(cost) {
    const deliveryCost = document.getElementById('delivery-charge');
    deliveryCost.innerText = cost;
};
document.getElementById('delivery-free-btn').addEventListener('click', function() {

    updateDeliveryCost(0);
});
document.getElementById('delivery-charge-btn').addEventListener('click', function() {

    updateDeliveryCost(20);
});