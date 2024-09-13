function app() {
  //Get DOM variables and listener
  const formNode = document.getElementById("myForm");
  const inputNode = document.getElementById("myInput");

  const errorMessages = ["Oops! Please add your email", "Oops! Please check your email"];

  let message = '';
  // Init functions sequence
  Init();
  // Functions
  function Init() {
    console.log("App on");
    message = '';
    getValue();
    submitForm();
  }
  function getValue() {
    console.log("New keyup");
    formNode.addEventListener("change", (e) => {
      console.log(e.target.value);
    });
  }
  function submitForm() {
    message = '';
    formNode.addEventListener("submit", (e) => {
      console.log("Submit on process");
      console.log("inputNode.value => ", inputNode.value);
      if(inputNode.value !== undefined && inputNode.value !== null && inputNode.value !== ''){
        console.log("Value is checking");
        console.log(inputNode.value);
        if( isEmail(inputNode.value)){
            console.log("C'est un email");
        } else {
            e.preventDefault();
            console.log("NON ce n'est un email");
        }
      }  else {
        e.preventDefault();
        console.log("Oops! Please add your email");
      }
    });
  }
  function isEmail(value) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(value.match(emailRegex)){
        return true;
    } else {
        return false;
    }
  }

}
window.addEventListener("load", app);
