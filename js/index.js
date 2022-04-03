function changeSection(elemFrom, birthDate=null, maleFemale=null, errorDiv=null) {

    document.querySelector('.display-sec').classList.remove('display-sec');

    if (elemFrom == 'generate-home') {

        console.log(elemFrom);
        document.getElementById('generate').classList.add('display-sec');


    } else if  (elemFrom == 'learn-home') {

        console.log(elemFrom);
        document.getElementById("more").classList.add('display-sec');

    } else if (elemFrom == 'generate-congrts') {

        if (errorDiv) {

          errorDiv.classList.remove('display-error');

        }

        birthDate.value = "";
        maleFemale.checked = false;
        

        document.getElementById("congratulations").classList.add('display-sec');

    }
}

let maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let akanDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let errorDiv =  null;


function generateCongratulations () {

  
  const birthDate = document.getElementById("date");
  birthDateValue = birthDate.value;

  const radioMale = document.getElementById("male-radio");

  const radioFemale = document.getElementById("female-radio");

  
  let gender = null;
  
  const dayOfWeek = new Date(birthDateValue).getDay();
  let nameOfWeek = akanDays[dayOfWeek];
  
  let congratsMessageTag = document.getElementById('generate-message');


  if (radioMale.checked && birthDateValue){

    gender = radioMale.id;
    let name = maleAkan[dayOfWeek];
    congratsMessageTag.innerHTML = `Congratulations Your Akan name is <strong style="color: yellow; font-size: 1.4em;">${name}</strong>  because you are a gentleman born on <strong style="color: yellow; font-size: 1.2em;">${nameOfWeek}</strong>.`;
    

    changeSection('generate-congrts', birthDate, radioMale, errorDiv);


  }  else if (radioFemale.checked && birthDateValue) {

    gender = radioFemale.id;
    let name = femaleAkan[dayOfWeek];

    congratsMessageTag.innerHTML =  `Congratulations Your Akan name is <strong style="color: yellow; font-size: 1.4em;">${name}</strong>  because you are a lady born on <strong style="color: yellow; font-size: 1.2em;">${nameOfWeek}</strong>.`;
    
    changeSection('generate-congrts', birthDate, radioFemale, errorDiv);


  } else {

    errorDiv = document.getElementById('error');
    errorDiv.innerHTML = "<h3>Please make sure all the details are filled</h3>";
    errorDiv.classList.add('display-error');
    
  }
}
