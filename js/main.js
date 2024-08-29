window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    loader.classList.add('hidden');
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbarCoffee');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const items = document.querySelectorAll('.section2 .col-lg-3');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');

            items.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-filter') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

let inpName = document.querySelector("#name");
let inpName2 = document.querySelector("#name2");
let inpEmail = document.querySelector("#email");
let inpMsg = document.querySelector("#msg");
let Button = document.querySelector("#button");

let nameError = document.querySelector("#nameError");
let name2Error = document.querySelector("#name2Error");
let emailError = document.querySelector("#emailError");
let msgError = document.querySelector("#msgError");

Button.addEventListener("click", function done(event) {
    event.preventDefault();
    
    validateName();
    validateName2();
    validateEmail();
    validateMsg();

    if (nameError.style.display === "none" &&
        name2Error.style.display === "none" &&
        emailError.style.display === "none" &&
        msgError.style.display === "none") {

        inpName.value = "";
        inpName2.value = "";
        inpEmail.value = "";
        inpMsg.value = "";

        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#a05c38',
            background: '#fff',
            iconColor: '#a05c38',
            customClass: {
                container: 'full-screen-alert', 
                title: 'small-alert-title',
                content: 'small-alert-content',
                confirmButton: 'small-alert-confirm-button'
            }
        });

        nameError.style.display = "none";
        name2Error.style.display = "none";
        emailError.style.display = "none";
        msgError.style.display = "none";
    }
});


function validateName() {
    let val = inpName.value;
    if (val === "") {
        nameError.innerHTML = "This field is required";
        nameError.style.display = "block";
    } else if (isFinite(val)) {
        nameError.innerHTML = "This field should contain characters only";
        nameError.style.display = "block";
        inpName.value = "";
    } else if (val.length < 4) {
        nameError.innerHTML = "Name must be at least 4 characters long";
        nameError.style.display = "block";
        inpName.value = "";
    } else if (val.length > 12) {
        nameError.innerHTML = "Name must be less than 12 characters long";
        nameError.style.display = "block";
        inpName.value = "";
    } else {
        nameError.style.display = "none";
    }
}

function validateName2() {
    let val = inpName2.value;
    if (val === "") {
        name2Error.innerHTML = "This field is required";
        name2Error.style.display = "block";
    } else if (isFinite(val)) {
        name2Error.innerHTML = "This field should contain characters only";
        name2Error.style.display = "block";
        inpName2.value = "";
    } else if (val.length < 4) {
        name2Error.innerHTML = "Name must be at least 4 characters long";
        name2Error.style.display = "block";
        inpName2.value = "";
    } else if (val.length > 12) {
        name2Error.innerHTML = "Name must be less than 12 characters long";
        name2Error.style.display = "block";
        inpName2.value = "";
    } else {
        name2Error.style.display = "none";
    }
}

function validateEmail() {
    let val = inpEmail.value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val === "") {
        emailError.innerHTML = "This field is required";
        emailError.style.display = "block";
    } else if (!emailPattern.test(val)) {
        emailError.innerHTML = "Please enter a valid email address";
        emailError.style.display = "block";
        inpEmail.value = "";
    } else {
        emailError.style.display = "none";
    }
}

function validateMsg() {
    let val = inpMsg.value;
    if (val === "") {
        msgError.innerHTML = "This field is required";
        msgError.style.display = "block";
    } else if (isFinite(val)) {
        msgError.innerHTML = "This field should contain characters only";
        msgError.style.display = "block";
        inpMsg.value = "";
    } else if (val.length < 10) {
        msgError.innerHTML = "Message must be at least 10 characters long";
        msgError.style.display = "block";
        inpMsg.value = "";
    } else if (val.length > 100) {
        msgError.innerHTML = "Message must be less than 100 characters long";
        msgError.style.display = "block";
        inpMsg.value = "";
    } else {
        msgError.style.display = "none";
    }
}
