document.querySelector(".submit__button").addEventListener("click", function() {

    // -- INPUT USER --
    const nameInput = document.querySelector('input[placeholder="Name"]');
    const emailInput = document.querySelector('input[placeholder="Email"]');

    const name = nameInput.value;
    const email = emailInput.value;

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // -- VALIDATE EMAIL --
    if (name && validateEmail(email)) {

        nameInput.classList.add("valid");
        emailInput.classList.add("valid");

        const contactListContainer = document.createElement("div");
        contactListContainer.classList.add("contact__list__container");

        const img = document.createElement("img");
        img.src = 'https://dummyjson.com/image/400x200/003366/ffffff?text=Hi+Sabrina';
        img.alt = `${name}'s profile picture`;
        contactListContainer.appendChild(img);

        const contactDetails = document.createElement("div");
        contactDetails.classList.add("contact__details");

        const contactName = document.createElement("p");
        contactName.textContent = name;
        contactDetails.appendChild(contactName);

        const contactEmail = document.createElement("p");
        contactEmail.textContent = email;
        contactDetails.appendChild(contactEmail);

        contactListContainer.appendChild(contactDetails);

        const contactButton = document.createElement("button");
        contactButton.classList.add("contact__button");
        contactButton.textContent = "Contact";
        contactListContainer.appendChild(contactButton);

        document.querySelector("main").appendChild(contactListContainer);

        nameInput.value = "";
        emailInput.value = "";

        // -- IF THE INPUTS ARE CORRECT, GREEN BORDERS WILL BE DISPLAYED FOR 4 SECONDS --
        setTimeout(function() {
            nameInput.classList.remove("valid");
            emailInput.classList.remove("valid");
        }, 4000);

    } else {
        alert("Please enter a valid name and email.");

    }
})

