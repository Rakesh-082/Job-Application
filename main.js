let btn = document.querySelector("#btn");
let popup = document.getElementById("popup");
let msg = document.getElementById("msg");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let role = document.getElementById("job_role");
let address = document.getElementById("address");
let city = document.getElementById("city");
let pincode = document.getElementById("pincode");
let date = document.getElementById("date");
let cv = document.getElementById("cv")

// console.log(role.value);

function openPopup(){
    if(validateForm()){
        let text = `Your application for "${role.value}" has been successfully submitted`;
        msg.innerHTML = text; 
        popup.classList.add("open-popup");
        blurFormElements(true);
    }
}

function closePopup(){
    popup.classList.remove("open-popup");
    blurFormElements(false);
    window.location.reload();
}


function validateForm(){
    if(firstName.value.trim() ===""|| lastName.value.trim() === "" || email.value.trim() === "" || role.value.trim() === "" || address.value.trim() === "" || city.value.trim() === "" || pincode.value.trim() === "" || date.value.trim() === "" || cv.value.trim() === ""){
        window.alert("Please fill in all fields");
        return false;
    }
    return true;
}

function blurFormElements(blur){
    const formControls = document.querySelectorAll(".form_control");
    formControls.forEach(control => {
        if(blur){
            control.classList.add('blur');
        }
        else{
            control.classList.remove('blur');
        }
    });
}