const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
   e.preventDefault()
})

let popupBg = document.querySelector('#popup__bg');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.close-popup');
let closeSubscriptionButton = document.querySelector('.close-subscription');
let submitButton = document.querySelector('#submit_btn');
let subscriptionBg = document.querySelector('#subscriptionBg');
let subscription = document.querySelector('#subscription')


closePopupButton.addEventListener('click', (e) => {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
        sessionStorage.setItem('isSubscribed', false);
})
document.addEventListener('click', (e) => {
    if(e.target === popupBg){
        popupBg.classList.remove('active');
        popup.classList.remove('active');
        sessionStorage.setItem('isSubscribed', false);
    }
});
closeSubscriptionButton.addEventListener('click', (e) => {
    subscriptionBg.classList.remove('active');
        subscription.classList.remove('active');
});

    popup.addEventListener('submit', (e) => {
        e.preventDefault();
        let email = popup['email'].value;
        localStorage.setItem('subscribe__email', email);
        localStorage.setItem('isSubscribed', true);
        subscriptionBg.classList.add('active');
        subscription.classList.add('active');
        popupBg.classList.remove('active');
        popup.classList.remove('active');     
    });

window.onload = function(){
    setTimeout(function(){
        if (sessionStorage.isSubscribed === "false"){
            popupBg.classList.remove('active');
            popup.classList.remove('active');    
            console.log("session expired")    
        }
        else if (localStorage.isSubscribed === "true"){
            console.log ('its not working')
       }else{
        popupBg.classList.add('active');
        popup.classList.add('active'); 
       }
    },3000)
    
}
