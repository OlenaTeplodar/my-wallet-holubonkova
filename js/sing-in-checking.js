import { refs } from "./refs.js";

export function checkingSingInForm() {
  refs.formSingIn.addEventListener("submit", (e) => {
    console.log("submit yes");
    e.preventDefault();

    const inData = e.target.singInData.value.trim();
      const inPassword = e.target.singInPassword.value.trim();
    console.log(inData);
    
    if (inData === "" || inPassword === "") {
      //false
      alert("Wszystkie pola muszą być wypełnione");
      console.log("o bukv");
      return; // якщо незаповнена форма - вихід
    }

  if (!inData.includes("@")) {
    const inName = inData;
    console.log(inName, 'is name');
        
    // ----------NAME _____REMOVE!!!
      refs.userNameText.textContent = inName;
    refs.userName.classList.remove('not-show');
      // переходим перебірать базу
    refs.formSingIn.reset();
    return (inName, inPassword);
    }
    // працюємо з поштою
    
    const inEmail = inData;
    console.log(inEmail, 'is email');
    refs.formSingIn.reset();
    return (inEmail, inPassword);
  })

}


