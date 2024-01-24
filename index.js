/**
 * Prevents reload on submission and prints content to console.
 */
document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = document.querySelector("#form")
    const registrationData = {
        name: form.querySelector("#formName").value,
        username: form.querySelector("#formUsername").value,
        email: form.querySelector("#formEmail").value,
        password: form.querySelector("#formPassword").value,
    }
    console.log(registrationData)
});

/**
 * Checks that passwords are equal.
 * Uses classes to style.
 */
const formPasswordElements = [
    document.getElementById("formPassword"),
    document.getElementById("formConfirmPassword"),
];
formPasswordElements.forEach((element) => {
    element.addEventListener("input", () => {
        if (
            formPasswordElements[0].value !== formPasswordElements[1].value ||
            !formPasswordElements[0].checkValidity() || // determined by html
            !formPasswordElements[1].checkValidity()
        ) {
            formPasswordElements.forEach((element) => {
                element.classList.add("incorrect");
                element.classList.remove("correct");
            });
        } else {
            formPasswordElements.forEach((element) => {
                element.classList.remove("incorrect");
                element.classList.add("correct");
            });
        }
    });
});

/**
 * Disables button if form is not valid.
 * This is somewhat unnecessary since the form will prevent submission
 * if the required fields are not filled.
 * As a side effect of disabling the button, the hints will
 * no longer appear when pressing the button since its disabled.
 */
for (child of document.querySelector("#form").children) {
    child.addEventListener("change", () => {
        if (document.querySelector("#form").checkValidity()) {
            document.querySelector("#formSubmit").disabled = false
        } else {
            document.querySelector("#formSubmit").disabled = true
        }
    })
}