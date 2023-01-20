import { refs } from "./refs.js";

import { getData } from './local-storage.js';




export function checkingSingInForm(e) {
  // refs.formSingIn.addEventListener("submit", (e) => {
  //   console.log("submit yes");
  //   e.preventDefault();

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
    const inUser = { code: 'username', inName: inName, inPassword: inPassword };
    console.log(inUser);
      // переходим перебірать базу
    
    return inUser;
    }
    // працюємо з поштою
    
    const inEmail = inData;
    console.log(inEmail, 'is email');
    const inUser = {
      code: 'useremail',
      inEmail: inEmail,
      inPassword: inPassword,
    };
    console.log(inUser);
    // refs.formSingIn.reset();
    return inUser;
}
  // )

// }


export function checkUserInLogin(inUser) {
  const userList = getData();
  console.log(userList, inUser);
  const curretnPassword = inUser.inPassword;
  if (inUser.code === 'username') {
    const currentUserName = inUser.inName;
    console.log("currentUserName");
    checkUserInName(currentUserName, curretnPassword, userList);
  } else
  if (inUser.code === "useremail") {
    const currentUserEmail = inUser.inEmail;
    checkUserInEmail(currentUserEmail, curretnPassword, userList);
  }
  }
  
  function checkUserInName(currentUserName, curretnPassword, userList) {
    for (const user of userList) {
      if (user.userName === currentUserName && user.userPassword === curretnPassword) {
        refs.userName.classList.remove("not-show");
        refs.goOut.classList.remove("not-show");
        refs.userNameText.textContent = currentUserName;
        return true;
      }
    }
    alert("data not true Name");
    return false;
  }

function checkUserInEmail(currentUserEmail, curretnPassword, userList) {
    for (const user of userList) {
      if (user.userEmail === currentUserEmail &&
        user.userPassword === curretnPassword) {
        refs.userName.classList.remove("not-show");
        refs.goOut.classList.remove("not-show");
        refs.userNameText.textContent = user.userName;
        return;
      }
      
  }
  alert("data not true Email");
    return false;
  }
