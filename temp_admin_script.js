document.addEventListener('DOMContentLoaded', function() {
    // Set default target to #dashboard
    window.location.hash = '#dashboard';
     // Function to handle click event on header links

     function handleHeaderLinkClick(event) {
        var links = document.querySelectorAll('.header_link_wrapper a');
        links.forEach(function(link) {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    // Add click event listener to header links
    var headerLinks = document.querySelectorAll('.header_link_wrapper a');
    headerLinks.forEach(function(link) {
        link.addEventListener('click', handleHeaderLinkClick);
    });

});

document.addEventListener('DOMContentLoaded', function() {
    var returns = document.getElementById('return');
    var rental = document.getElementById('rental');
    var cancel = document.getElementById('cancelled');
    
    var but1 = document.querySelector('.butons1');
    var but2 = document.querySelector('.butons2');
    var but3 = document.querySelector('.butons3');
    

    but1.style.backgroundColor = '#808080';
    but2.style.backgroundColor = '#f1f1f1';
    but3.style.backgroundColor = '#f1f1f1';
    

    rental.style.display = 'flex';
    returns.style.display = 'none';
    cancel.style.display = 'none';
    

    but1.addEventListener('click', function() {
        console.log("button1")
        rental.style.display = 'flex';
        returns.style.display = 'none';
        cancel.style.display = 'none';
        but1.style.backgroundColor = '#808080';
        but2.style.backgroundColor = '#f1f1f1';
        but3.style.backgroundColor = '#f1f1f1';
        
    });

    but2.addEventListener('click', function() {
        console.log("button2")
        rental.style.display = 'none';
        returns.style.display = 'flex';
        cancel.style.display = 'none';
        but2.style.backgroundColor = '#808080';
        but1.style.backgroundColor = '#f1f1f1';
        but3.style.backgroundColor = '#f1f1f1';
        
    });
    but3.addEventListener('click', function() {
        console.log("button2")
        rental.style.display = 'none';
        returns.style.display = 'none';
        cancel.style.display = 'flex';
        but2.style.backgroundColor = '#f1f1f1';
        but1.style.backgroundColor = '#f1f1f1';
        but3.style.backgroundColor = '#808080';
        
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    
    var add_but = document.querySelectorAll('.add_button');
    var check_but = document.querySelectorAll('.check_button');
    var recieved_but = document.querySelectorAll('.recieved_button');
    var update_but = document.querySelectorAll('.update_button');
    var delete_but = document.querySelectorAll('.delete_button');
    var delete_perma_but = document.querySelectorAll('.delete_button_perma');
    var tables_but = document.querySelectorAll('.your_tables');
    
    var meclose = document.querySelectorAll('.popup_checkout_button');

    var add = document.getElementById('popup_card_add');
    var checkout = document.getElementById('popup_card_check');
    var recieved = document.getElementById('popup_card_recieved');
    var update = document.getElementById('popup_card_about');
    var deletes = document.getElementById('popup_card_delete');
    var delete_perma = document.getElementById('popup_card_delete_perma');
    var tables = document.getElementById('popup_card_table');
   
    add.style.display = 'none';
    tables.style.display = 'none';
    popup.style.display = 'none';
    recieved.style.display = 'none';
    checkout.style.display = 'none';
    update.style.display = 'none';
    deletes.style.display = 'none';
    delete_perma.style.display = 'none';

    
    tables_but.forEach(function(button){
        button.addEventListener('click', function(){
            popup.style.display = 'block';
            tables.style.display = 'flex';
            add.style.display = 'none';
            checkout.style.display = 'none';
            update.style.display = 'none';
            deletes.style.display = 'none';
            recieved.style.display = 'none';
            delete_perma.style.display = 'none';
        });
    });

    add_but.forEach(function(button){
        button.addEventListener('click', function(){
            popup.style.display = 'block';
            add.style.display = 'flex';
            checkout.style.display = 'none';
            update.style.display = 'none';
            deletes.style.display = 'none';
            recieved.style.display = 'none';
            delete_perma.style.display = 'none';
            tables.style.display = 'none';
        });
    });

    check_but.forEach(function(button){
        button.addEventListener('click', function(){
            popup.style.display = 'block';
            checkout.style.display = 'flex';
            update.style.display = 'none';
            deletes.style.display = 'none';
            recieved.style.display = 'none';
            delete_perma.style.display = 'none';
            add.style.display = 'none';
            tables.style.display = 'none';
        });
    });

    recieved_but.forEach(function(button){
        button.addEventListener('click', function(){
            popup.style.display = 'block';
            recieved.style.display = 'flex';
            checkout.style.display = 'none';
            update.style.display = 'none';
            deletes.style.display = 'none';
            delete_perma.style.display = 'none';
            add.style.display = 'none';
            tables.style.display = 'none';
        });
    });

    update_but.forEach(function(button){
        button.addEventListener('click', function(){
            popup.style.display = 'block';
            update.style.display = 'flex';
            checkout.style.display = 'none';
            deletes.style.display = 'none';
            recieved.style.display = 'none';
            delete_perma.style.display = 'none';
            add.style.display = 'none';
            tables.style.display = 'none';
        });
    });

     
    delete_but.forEach(function(button){
        button.addEventListener('click', function(){
            popup.style.display = 'block';
            deletes.style.display = 'flex';
            checkout.style.display = 'none';
            update.style.display = 'none';
            recieved.style.display = 'none';
            delete_perma.style.display = 'none';
            add.style.display = 'none';
            tables.style.display = 'none';
        });
    });

    delete_perma_but.forEach(function(button){
        button.addEventListener('click', function(){
            popup.style.display = 'block';
            delete_perma.style.display = 'flex';
            deletes.style.display = 'none';
            checkout.style.display = 'none';
            update.style.display = 'none';
            recieved.style.display = 'none';
            add.style.display = 'none';
            tables.style.display = 'none';
        });
    });
    
    meclose.forEach(function(button) {
        button.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    });

});


document.addEventListener('DOMContentLoaded', function() {
    var carpopup = document.getElementById('car_popup');
    
    var car_open_but = document.querySelectorAll('.car_button_add');
    var car_update_but = document.querySelectorAll('.car_button_update');
    var car_delete_but = document.querySelectorAll('.car_button_delete');

    var carclose = document.querySelectorAll('.car_popup_checkout_button');

    var car_open = document.getElementById('car_add');
    var car_update = document.getElementById('car_update');
    var car_delete = document.getElementById('car_delete');

    carpopup.style.display = 'none';
    car_open.style.display = 'none';
    car_update.style.display = 'none';
    car_delete.style.display = 'none';


    car_open_but.forEach(function(button){
        button.addEventListener('click', function(){
            carpopup.style.display = 'block';
            car_open.style.display = 'flex';
            car_update.style.display = 'none';
            car_delete.style.display = 'none';
        });
    });
    
     car_update_but.forEach(function(button){
        button.addEventListener('click', function(){
            carpopup.style.display = 'block';
            car_open.style.display = 'none';
            car_update.style.display = 'flex';
            car_delete.style.display = 'none';
           
        });
    });

    car_delete_but.forEach(function(button){
        button.addEventListener('click', function(){
            carpopup.style.display = 'block';
            car_open.style.display = 'none';
            car_update.style.display = 'none';
            car_delete.style.display = 'flex';
           
        });
    });




    carclose.forEach(function(button) {
        console.log("Popupclose clicked");
        button.addEventListener('click', function() {
            carpopup.style.display = 'none';
        });
    });

});

document.addEventListener('DOMContentLoaded', function() {
    var popup = document.querySelector('.dashboard_popup');
    var popup_but = document.getElementById('dashboard_mini_img');
    
    popup.style.display = 'none';

    popup_but.addEventListener('click',function(){
        popup.style.display = 'flex';
    });
    popup.addEventListener('click',function(){
        popup.style.display = 'none';
    });
});