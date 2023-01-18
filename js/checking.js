import { refs } from "./refs.js";
import {checkingSingUpForm} from './saving-checking.js'


let userArray = [];
// const LOCALSTORAGE_KEY = 'registrUser';
export function createUserObj() {
    refs.formSingUp.addEventListener("submit", (e) => {
        console.log("submit yes");
        e.preventDefault();
  
        const uName = e.target.userName.value.trim();
        const uPassword = e.target.userPassword.value.trim();
        const uEmail = e.target.userEmail.value.trim();
        const uEmailControl = e.target.userEmailControl.value.trim();
        const data = createDataObj(uName, uPassword, uEmail, uEmailControl);
        console.log(data);
        return data
         });
    }
        
//         export function formChecked () {
//         checkingSingUpForm(uName, uPassword, uEmail, uEmailControl);
//         // const data = createDataObj(uName, uPassword, uEmail, uEmailControl);

//         // console.log(data);
//         // userArray.push(data);
//         // console.log(userArray);
    
  
   
//     console.log('the end  form is full')
// }



// function validateEmailControl(uemail, uemailcontrol) {
//     console.log(uemail);
//     console.log(uemailcontrol);
//     if (uemail === uemailcontrol) {
//          refs.emailControlError.textContent = "";
//          refs.emailControlError.classList.remove("active");
//          console.log("vse ok");
//          return true;
//         }
   
//   refs.emailControlError.classList.add("active");
//   refs.emailControlError.textContent = `Adres e-mail nie pasuje. Proszę o uwagę!`;
//   console.log("nevalid");
//   return false;
//     };

