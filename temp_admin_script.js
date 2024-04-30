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
    
    var check_but = document.querySelectorAll('.check_button');
    var recieved_but = document.querySelectorAll('.recieved_button');
    var update_but = document.querySelectorAll('.update_button');
    var delete_but = document.querySelectorAll('.delete_button');
    var delete_perma_but = document.querySelectorAll('.delete_button_perma');
    
    var meclose = document.querySelectorAll('.popup_checkout_button');

    var checkout = document.getElementById('popup_card_check');
    var recieved = document.getElementById('popup_card_recieved');
    var update = document.getElementById('popup_card_about');
    var deletes = document.getElementById('popup_card_delete');
    var delete_perma = document.getElementById('popup_card_delete_perma');
   
    popup.style.display = 'none';
    recieved.style.display = 'none';
    checkout.style.display = 'none';
    update.style.display = 'none';
    deletes.style.display = 'none';
    delete_perma.style.display = 'none';

    
    check_but.forEach(function(button){
        button.addEventListener('click', function(){
            popup.style.display = 'block';
            checkout.style.display = 'flex';
            update.style.display = 'none';
            deletes.style.display = 'none';
            recieved.style.display = 'none';
            delete_perma.style.display = 'none';
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
        });
    });
    
    meclose.forEach(function(button) {
        button.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    });

});