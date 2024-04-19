document.addEventListener('DOMContentLoaded', function() {
    const activebutton = document.getElementsByClassName('active-button')[0];
    const navul = document.getElementsByClassName('navul')[0];
  
    activebutton.addEventListener('click', () => {
        navul.classList.toggle('active');
    });
    navul.addEventListener('click', () => {
        navul.classList.toggle('active');
    });

  });
 //============================================================================= 
function reserve(button){
    // getting the parent
    var card = button.parentElement;
    
    
    //getting information from cars/car_card
    var carName = card.querySelector('.car_name').textContent;
    var carPrice = card.querySelector('.car_price').textContent;
    var carSeat = card.querySelector('.car_seat').textContent;
    var carBag = card.querySelector('.car_bag').textContent;
    var carTrans = card.querySelector('.car_trans').textContent;
    var carPic = card.querySelector('.car_pic').src;

    //Stroing in local storage
    localStorage.setItem('carName', carName);
    localStorage.setItem('carPrice', carPrice);
    localStorage.setItem('carSeat', carSeat);
    localStorage.setItem('carBag', carBag);
    localStorage.setItem('carTrans', carTrans);
    localStorage.setItem('carPic', carPic);

    window.location.href = 'reserve.html';
}   

//=======================================================================
    
function displayReserve(){
    //retriveing info from storage
    var carName = localStorage.getItem('carName');
    var carPrice = localStorage.getItem('carPrice');
    var carSeat = localStorage.getItem('carSeat');
    var carBag = localStorage.getItem('carBag');
    var carTrans = localStorage.getItem('carTrans');
    var carPic = localStorage.getItem('carPic');

    //displaying the info
    var reservedInfo = document.getElementById('reserve_info');
    reservedInfo.innerHTML =  `
        <div class = "reserve_infos">
            <div class = "reserve_photo_holder">
                <img class = "reserve_car" src="${carPic}" alt="${carName}">
            </div>
            
            <div class = "reserve_know">
                <h3 class = "reserve_name"> ${carName}</h3>
                <p class = "reserve_price"> ${carPrice}</p>
                <p class = "reserve_seat"> ${carSeat}</p>
                <p class = "reserve_bag"> ${carBag}</p>
                <p class = "reserve_trans"> ${carTrans}</p>
            </div>    
        </div>
    `;
}