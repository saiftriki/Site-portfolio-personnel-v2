// container
const container = document.querySelector('.container');

$(document).ready(function () {
    // typing animation script
    var typed = new Typed(".container .home .typing", {
        strings: ["Web developer", "Web Designer"],
        typeSpeed: 85,
        backSpeed: 50,
        loop: true
    });
    
    // sticky header
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.header').addClass("sticky");
        }else{
            $('.header').removeClass("sticky");
        }
        if(this.scrollY > 400){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
});

const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);

cloneContainer.classList.remove('active');

let type = null;  // inisialisation

// toggle_Icones
const toggleIcones = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const darkContainer = document.querySelector('#dark-container');

toggleIcones.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.classList.add('disabled');
        setTimeout(() => {
            toggle.classList.remove('disabled');
        }, 2000);

        icons.forEach(icon => {
            icon.classList.toggle('bx-sun');
        });

        container.classList.toggle('active');
        darkContainer.classList.toggle('active');

        // Check if a previous Typed exists and destroy it
        if (type) {
            type.destroy();
        }
        // run typing animation when dark mode is toggled
        if (darkContainer.classList.contains('active')) {
            const cloneContainerSpan = document.querySelector('#dark-container .home .typing');
            type = new Typed(cloneContainerSpan, {
                strings: ["Web developer", "Web Designer"],
                typeSpeed: 85,
                backSpeed: 50,
                loop: true
            });
        }
    });
});
//contact
function submition() {
    // Validate name
    var nameInput = document.getElementById("name");
    var nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please provide a name";
        return false;
    };
    nameError.textContent = "";
    // Validate email
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Invalid email address";
        return false;
    };
    emailError.textContent = "";

    // Validate message
    var messageInput = document.getElementById("message");
    var messageError = document.getElementById("messageError");
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please provide a message";
        return false;
    };
    messageError.textContent = "";

    return true;
}


