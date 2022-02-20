document.addEventListener("DOMContentLoaded", () => {
    const LoginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#CreateAccount");

    document.querySelector("#LinkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        LoginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#LinkLogin").addEventListener("click", e => {
        e.preventDefault();
        LoginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });
}); 