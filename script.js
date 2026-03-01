function orderFood(restaurant) {
    document.getElementById('restaurant').value = restaurant;
    document.getElementById('restaurant-list').style.display = 'none';
    document.getElementById('order-form').style.display = 'block';
}document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();    const restaurant = document.getElementById('restaurant').value;
    const items = document.getElementById('items').value;

    // Here you would typically send this data to your server
    alert(`Order placed for ${items} at ${restaurant}`);    
    // Reset and go back to restaurant list
    document.getElementById('form').reset();    document.getElementById('restaurant-list').style.display = 'block';
    document.getElementById('order-form').style.display = 'none';
});function cancelOrder() {
    document.getElementById('form').reset();    document.getElementById('restaurant-list').style.display = 'block';
    document.getElementById('order-form').style.display = 'none';
}