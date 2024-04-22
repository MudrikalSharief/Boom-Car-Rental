
//==================This code is used for menu
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');
    
    const activebutton = document.getElementsByClassName('active-button')[0];
    const navul = document.getElementsByClassName('navul')[0];
  
    activebutton.addEventListener('click', () => {
        navul.classList.toggle('active');
    });
    navul.addEventListener('click', () => {
        navul.classList.toggle('active');
    });

    //THis code is used for displaying confirm in contact us

    let contact_form = document.querySelector('#sub');
    let contact_popup = document.querySelector('.popup_wrapper');

    contact_form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("i am clicked");
        contact_popup.style.visibility = 'visible';
    });

    function popup_off(){
        contact_popup.style.visibility = 'hidden';
        document.getElementById('contact_us_ln').value = "";
        document.getElementById('contact_us_fn').value = "";
        document.getElementById('contact_us_em').value = "";
        document.getElementById('contact_us_ta').value = "";
    }

    let okButton = document.querySelector('.popup_wrapper button');
    okButton.addEventListener('click', popup_off);  



    //This code is responsible in confim button of confirm and the displaying of id in success
    // Add event listener to the button
   
});

 //==================================this ocee is used in car to go to reserve
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
                <p class = "reserve_price">Price : ${carPrice}</p>
                <p class = "reserve_seat"> ${carSeat}</p>
                <p class = "reserve_bag"> ${carBag}</p>
                <p class = "reserve_trans"> ${carTrans}</p>
            </div>    
        </div>
    `;
}

//=======================This code is reposinble in getting user info and displaying it(used in confirm and reserve )

function confirm(button){
    // getting the parent
    var card = button.parentElement;
    
    
    //getting information from cars/car_card
    var firstName = card.querySelector('#firstName').value;
    var lastName = card.querySelector('#lastName').value;
    var email = card.querySelector('#user_email').value;
    var rentDate = card.querySelector('#dates').value;
    var rentDuration = card.querySelector('#num').value;

    //Stroing in local storage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('rentDate', rentDate);
    localStorage.setItem('rentDuration', rentDuration);


}  

function displayConfirm(){
    
    var firstName = localStorage.getItem('firstName');
    var lastName = localStorage.getItem('lastName');
    var email = localStorage.getItem('email');
    var rentDate = localStorage.getItem('rentDate');
    var rentDuration = localStorage.getItem('rentDuration');
    var carPrice = localStorage.getItem('carPrice');
    
    var rentDurationNum = parseInt(rentDuration, 10);
    var carPriceNum = parseFloat(carPrice); // Assuming carPrice is a decimal number

    // Multiply carPrice by rentDuration
    var totalPrice = carPriceNum * rentDurationNum;


    var pickupDate = new Date(rentDate);
    // Calculate the return date by adding the rent duration to the pickup date
    var returnDate = new Date(pickupDate);
    returnDate.setDate(returnDate.getDate() + parseInt(rentDuration, 10));
    // Format the return date as desired (e.g., YYYY-MM-DD)
    var returnDateString = `${returnDate.getFullYear()}-${(returnDate.getMonth() + 1).toString().padStart(2, '0')}-${returnDate.getDate().toString().padStart(2, '0')}`;


    var reservedInfo = document.getElementById('confirm_card_infos');
    reservedInfo.innerHTML =  `
        <div class = "confirm_card_info">
        <p><strong>First Name :</strong> ${firstName}</p>
        <p><strong>Last Name :</strong> ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Pick up Date :</strong> ${rentDate}</p>
        <p><strong>Return return :</strong> ${returnDateString}</p>
        <p><strong>Total rent day :</strong> ${rentDuration} days</p>
        <p><strong>Total price :</strong> ${totalPrice}</p>
        </div>
    
    `;
}

//===================================this code is used in fate in reservation
function current_date(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day =  currentDate.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    document.querySelector(".reserve_text input[type='date']").min =  `${year}-${month}-${day}`;
}

//================This code is responsible for generation 6 digit number

function handleButtonClick() {
    console.log('handleButtonClick');
    // Generate a random number
    var randomNum = Math.floor(Math.random() * 900000) + 100000;;

    // Store the random number in localStorage
    localStorage.setItem('randomNumber', randomNum);

    // Redirect to the next HTML page
    window.location.href = 'succes.html';
}

function displayStoredRandomNumber() {
    // Retrieve the random number from localStorage
    var storedRandomNum = localStorage.getItem('randomNumber');

    // Get the div element to display the random number
    var randomNumberContainer = document.getElementById('transaction_id');
    randomNumberContainer.innerHTML = `
        <h5>${storedRandomNum}</h5>
    `;
    
}