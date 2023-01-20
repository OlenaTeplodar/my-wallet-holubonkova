import { refs } from "./refs.js";

import { getData } from './local-storage.js';




export function checkingSingInForm(e) {

    const inData = e.target.singInData.value.trim();
      const inPassword = e.target.singInPassword.value.trim();
    
    if (inData === "" || inPassword === "") {
      alert("Wszystkie pola muszą być wypełnione");
      return; 
    }

  if (!inData.includes("@")) {
    const inName = inData;
            
    // ----------NAME _____REMOVE!!!
      refs.userNameText.textContent = inName;
    refs.userName.classList.remove('not-show');
    const inUser = { code: 'username', inName: inName, inPassword: inPassword };
    
    return inUser;
    }
    
    const inEmail = inData;

    const inUser = {
      code: 'useremail',
      inEmail: inEmail,
      inPassword: inPassword,
    };

    return inUser;
}


export function checkUserInLogin(inUser) {
  const userList = getData();

  const curretnPassword = inUser.inPassword;
  if (inUser.code === 'username') {
    const currentUserName = inUser.inName;

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
  return false;
  }
