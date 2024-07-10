//classes
const ui = new UI();
//listeners
listeners();
function listeners() {
  document.querySelector("#submitBtn").addEventListener("click", search);
}

//functions
function search(e) {
  e.preventDefault();
  const newsName = document.querySelector("#news-name").value;
  const country = document.querySelector("#country").value;
  const category = document.querySelector("#category").value;

  if (newsName !== "" || country !== "" || category !== "") {
    console.log("It is Okey");
  } else {
    ui.printMessage(
      "Please enter atleast one parameter",
      "text-center alert alert-danger mt-4"
    );
  }
}
