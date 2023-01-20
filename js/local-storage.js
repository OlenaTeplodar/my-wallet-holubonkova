import { refs } from "./refs.js";
import { checkingSingUpForm } from "./sing-up-checking.js";
import { checkingSingInForm } from "./sing-in-checking.js";


const LOCALSTORAGE_KEY = "registrUser";

function saveData(data) {
  const userList = getData();

  userList.push(data);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userList));

  
}

export function getData() {
  try {
    const dataJson = localStorage.getItem(LOCALSTORAGE_KEY);
    if (!dataJson) return [];
    return JSON.parse(dataJson);
  } catch (error) {
    console.log(error.message);
  }
}

export function checkUserNameLocalStorage(currentUser) {
  const userList = getData();
  const currentUserName = currentUser.userName;
  const currentUserEmail = currentUser.userEmail;

  for (const user of userList) {
    if (user.userName === currentUserName) {

          refs.userName.classList.remove("not-show");
          refs.goOut.classList.remove("not-show");
          refs.userNameText.textContent = currentUserName;
      return;
    }
    if (user.userEmail === currentUserEmail) {
        refs.userName.classList.remove("not-show");
        refs.goOut.classList.remove("not-show");
        refs.userNameText.textContent = user.userName;
 
      return;
    }
  }
  saveData(currentUser);
  refs.userName.classList.remove("not-show");
  refs.goOut.classList.remove("not-show");
  refs.userNameText.textContent = currentUserName;

}


export function checkUserInLogin(currentUser) {
  const userList = getData();

  const currentUserName = currentUser.userName;
  const currentUserEmail = currentUser.userEmail;

  for (const user of userList) {
    if (user.userName === currentUserName) {
      refs.userName.classList.remove("not-show");
      refs.goOut.classList.remove("not-show");
      refs.userNameText.textContent = currentUserName;
      return;
    }
    if (user.userEmail === currentUserEmail) {
      refs.userName.classList.remove("not-show");
      refs.goOut.classList.remove("not-show");
      refs.userNameText.textContent = user.userName;

      return;
    }
  }
  saveData(currentUser);
  refs.userName.classList.remove("not-show");
  refs.goOut.classList.remove("not-show");
  refs.userNameText.textContent = currentUserName;

}
