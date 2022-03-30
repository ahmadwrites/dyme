const formInput = document.getElementById("hero-form-input");
const formBtn = document.getElementById("hero-form-btn");
const form = document.getElementById("hero-form");

window.addEventListener("load", function () {
  const form = document.getElementById("hero-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    formBtn.textContent = "Processing...";
    fetch(action, {
      method: "POST",
      body: data,
    })
      .then(() => {
        formBtn.textContent = "Successfully Enlisted!";
        setTimeout(() => {
          formBtn.textContent = "KEEP ME POSTED";
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        formBtn.textContent = "Error, try again in a moment.";
        setTimeout(() => {
          formBtn.textContent = "KEEP ME POSTED";
        }, 3000);
      });
  });
});
