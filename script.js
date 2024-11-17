
function validatePhoneNumber(phone) {
    const phonePattern = /^(\+90|0)?5\d{9}$/;
    return phonePattern.test(phone);
}

function validateEmail(email) {
    return email.includes("@");
}

document.getElementById("appointmentForm").addEventListener("submit", function (event) {
    const phoneInput = document.getElementById("phone").value;
    const emailInput = document.getElementById("email").value;

    let isValid = true;

    if (!validatePhoneNumber(phoneInput)) {
        alert("Please enter a valid Turkey Line Number!");
        isValid = false;
    }

    if (!validateEmail(emailInput)) {
        alert("The e-mail address must contain the '@' sign!");
        isValid = false;
    }
});

const cityAPIURL = "https://run.mocky.io/v3/b4e83699-48a4-4421-8f0e-7919a6d0339f"
const courseAPIURL = "https://run.mocky.io/v3/f019e9f8-23ce-4df1-b275-5f59b1e71f82";
const saatAPIURL = "https://run.mocky.io/v3/ae83c975-a8d0-4e38-8953-b1b2add34c8d";
const secimAPIURL = "https://run.mocky.io/v3/328cb478-e438-4d05-9f3e-b00e69b632ac";

fetch(cityAPIURL)
    .then(response => response.json())
    .then(data => {
        const citySelect = document.getElementById("city");
        data.cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    })
    .catch(error => console.error("City data could not be loaded:", error));


fetch(courseAPIURL)
    .then(response => response.json())
    .then(data => {
        const courseSelect = document.getElementById("course");
        data.courses.forEach(course => {
            const option = document.createElement("option");
            option.value = course;
            option.textContent = course;
            courseSelect.appendChild(option);
        });
    })
    .catch(error => console.error("Course data could not be loaded:", error));


fetch(saatAPIURL)
    .then(response => response.json())
    .then(data => {
        const saatSelect = document.getElementById("saat");
        data.saat.forEach(hour => {
            const option = document.createElement("option");
            option.value = hour;
            option.textContent = hour;
            saatSelect.appendChild(option);
        });
    })
    .catch(error => console.error("Hours data could not be loaded:", error));

fetch(secimAPIURL)
    .then(response => response.json())
    .then(data => {
        const secimSelect = document.getElementById("secim");
        data.secim.forEach(secim => {
            const option = document.createElement("option");
            option.value = secim;
            option.textContent = secim;
            secimSelect.appendChild(option);
        });
    })
    .catch(error => console.error("Phone data could not be loaded:", error));


document.getElementById("closeAd").addEventListener("click", function () {
    const ad = document.getElementById("stickyAd");
    ad.style.display = "none";
});


document.getElementById("myForm").addEventListener("submit", function (event) {
    const checkbox = document.getElementById("terms");

    if (!checkbox.checked) {
        event.preventDefault();
        alert("Please agree to the Terms & Conditions before proceeding.");
    }
});










