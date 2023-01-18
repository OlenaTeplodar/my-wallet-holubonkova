import { refs } from "./refs.js";



export function checkingSingUpForm() {
  refs.formSingUp.addEventListener("submit", (e) => {
    console.log("submit yes");
    e.preventDefault();
  
    const uName = e.target.userName.value.trim();
    const uPassword = e.target.userPassword.value.trim();
    const uEmail = e.target.userEmail.value.trim();
    const uEmailControl = e.target.userEmailControl.value.trim();;
    
    // f validation all form
    if (
      uName === "" ||
      uPassword === "" ||
      uEmail === "" ||
      uEmailControl === ""
    ) {
      //false
      alert("Wszystkie pola muszą być wypełnione");
      console.log("o bukv");
      return;
    }
// спрацьовує якщо довжина валідна і спрацьовує наступна операція

    // довжина імені

    if (!validateNameLength(uName)) {
      //false
      console.log("malo bukv");
      return;
    }
// спрацьовує якщо довжина валідна і спрацьовує наступна операція
    if (!validateNameContent(uName)) {
      //false
      console.log("not bukv");
      return;
    }
// спрацьовує якщо довжина валідна і спрацьовує наступна операція
    if (!validatePasswordLength(uPassword)) {
      //false
      console.log("malo bukv pass");
      return;
    }
 // спрацьовує якщо довжина валідна і спрацьовує наступна операція
    if (!validateEmail(uEmail)) {
      //false
      console.log("not mail");
      return;
    }
 // спрацьовує якщо довжина валідна і спрацьовує наступна операція
    if (!validateEmailControl(uEmail, uEmailControl)) {
      //false
      console.log("not ==");
      return;
    }
 // спрацьовує якщо довжина валідна і спрацьовує наступна операція
    alert(" forma OK!");
    refs.userNameText.textContent = uName;
const data = createDataObj(uName, uPassword, uEmail, uEmailControl);
    console.log(data);
    refs.formSingUp.reset();
    return data;
  })
}
    function createDataObj(uName, uPassword, uEmail, uEmailControl) {
      return {
        userName: uName,
        userPassword: uPassword,
        userEmail: uEmail,
        userEmailControl: uEmailControl,
      };
    }

// 


function validateNameLength(uname) {
        const nameLen = uname.length;
        const mx = 16;
        const my = 6;
        if (nameLen > mx || nameLen < my) {
    
            refs.nameError.classList.add('active');
            refs.nameError.textContent = `Długość nazwy użytkownika musi wynosić co najmniej ${my} znaków i nie więcej niż ${mx} `;
            return false;
    }
    refs.nameError.textContent = "";
    refs.nameError.classList.remove("active");
    return true;
};
    

// __________----NAME CONTENT CHECKING

// f validation all form

        
        // end f validation all

   

function validateNameContent(uname) {
        const ok = !/^[0-9A-Z]+$/i.test(uname);
        if (ok) {
          refs.nameError.classList.add("active");
          refs.nameError.textContent = `Nazwa użytkownika musi zawierać tylko litery i cyfry`;
          return false;
        }
    refs.nameError.textContent = "";
    refs.nameError.classList.remove("active");
    return true;
    };




// -------------PASSWORD CHECKING

// f validation all form

        
        // end f validation all

function validatePasswordLength(upassword) {
        const passwordLen = upassword.length;
        const my = 6;
        if (passwordLen < my) {
          refs.passwordError.classList.add("active");
          refs.passwordError.textContent = `Długość hasło musi wynosić co najmniej ${my} znaków `;
          return false;
        }
    refs.passwordError.textContent = "";
    refs.passwordError.classList.remove("active");
    return true;
    };

// ----------------EMAIL CHECKING
// f validation all form

        
        // end f validation all

   

function validateEmail(uemail) {
        const ok = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/i.test(
          uemail
        );
        if (ok) {
          refs.emailError.classList.add("active");
          refs.emailError.textContent = `Adres email jest nieprawidłowy`;
          return false;
        }
    refs.emailError.textContent = "";
    refs.emailError.classList.remove("active");
    return true;
    };

/// ----------EMAIL CONTROL

// f validation all form

        
        // end f validation all



function validateEmailControl(uemail, uemailcontrol) {
    console.log(uemail);
    console.log(uemailcontrol);
    if (uemail === uemailcontrol) {
         refs.emailControlError.textContent = "";
         refs.emailControlError.classList.remove("active");
         return true;
        }
   
  refs.emailControlError.classList.add("active");
  refs.emailControlError.textContent = `Adres e-mail nie pasuje. Proszę o uwagę!`;
  return false;
    };