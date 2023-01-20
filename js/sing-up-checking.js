import { refs } from "./refs.js";



export function checkingSingUpForm(e) {

  
    const uName = e.target.userName.value.trim();
    const uPassword = e.target.userPassword.value.trim();
    const uEmail = e.target.userEmail.value.trim();
    const uEmailControl = e.target.userEmailControl.value.trim();;
    
    // validation all form
    if (
      uName === "" ||
      uPassword === "" ||
      uEmail === "" ||
      uEmailControl === ""
    ) {
      alert("Wszystkie pola muszą być wypełnione");

      return;
    }


    if (!validateNameLength(uName)) {
      return;
    }

  if (!validateNameContent(uName)) {
      return;
    }

    if (!validatePasswordLength(uPassword)) {
      return;
    }

    if (!validateEmail(uEmail)) {
      return;
    }

    if (!validateEmailControl(uEmail, uEmailControl)) {
      return;
    }

    const dataUser = createDataObj(uName, uPassword, uEmail, uEmailControl);

    return dataUser;
  }
  



   export function createDataObj(uName, uPassword, uEmail, uEmailControl) {
      return {
        userName: uName,
        userPassword: uPassword,
        userEmail: uEmail,
        userEmailControl: uEmailControl,
      };
    }

// -------Name Length Validation-----

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

function validateNameContent(uname) {
        const ok = !/^[0-9A-Z]+$/i.test(uname);
        if (ok) {
          refs.nameError.classList.add("active");
          refs.nameError.textContent = `Nazwa użytkownika może zawierać tylko litery i cyfry`;
          return false;
        }
    refs.nameError.textContent = "";
    refs.nameError.classList.remove("active");
    return true;
    };




// -------------PASSWORD CHECKING

function validatePasswordLength(upassword) {
        const passwordLen = upassword.length;
        const my = 6;
        if (passwordLen < my) {
          refs.passwordError.classList.add("active");
          refs.passwordError.textContent = `Hasło musi mieć co najmniej ${my} znaków`;
          return false;
        }
    refs.passwordError.textContent = "";
    refs.passwordError.classList.remove("active");
    return true;
    };

// ----------------EMAIL CHECKING

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


function validateEmailControl(uemail, uemailcontrol) {

    if (uemail === uemailcontrol) {
        refs.emailControlError.textContent = "";
        refs.emailControlError.classList.remove("active");
        return true;
        }
  
  refs.emailControlError.classList.add("active");
  refs.emailControlError.textContent = `Adres e-mail nie pasuje. Proszę o uwagę!`;
  return false;
    };