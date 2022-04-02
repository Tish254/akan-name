function changeSection(elemFrom) {

    document.querySelector('.display-sec').classList.remove('display-sec');

    if (elemFrom == 'generate-home') {

        console.log(elemFrom);
        document.getElementById('generate').classList.add('display-sec');


    } else if  (elemFrom == 'learn-home') {

        console.log(elemFrom);
        document.getElementById("more").classList.add('display-sec');

    } else if (elemFrom == 'generate-congrts') {

        document.getElementById("congratulations").classList.add('display-sec');

    }
}

let maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let akanDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


function generateCongratulations () {

  const birthDate = document.getElementById("date").value;
  const radioMale = document.getElementById("male-radio");
  const radioFemale = document.getElementById("female-radio");
  let gender = null;
  const dayOfWeek = new Date(birthDate).getDay();

  let nameOfWeek = akanDays[dayOfWeek];

  let congratsMessageTag = document.getElementById('generate-message');

  if (radioMale.checked){

    gender = radioMale.id;
    let name = maleAkan[dayOfWeek];
    congratsMessageTag.innerHTML = `Congrutulations Your Akan name is <strong style="color: green; font-size: 1.2em;">${name}</strong>  beacause you are a gentleman born on <strong style="color: green; font-size: 1.2em;" >${nameOfWeek}</strong>`;
    changeSection('generate-congrts');



  }  else {

    gender = radioFemale.id;
    let name = femaleAkan[dayOfWeek];

    congratsMessageTag.innerHTML = `Congrutulations Your Akan name is <strong sytle="color: green; font-size: 1.2em; ">${name}<strong> beacause you are a lady born on <strong style="color: green; font-size: 1.2em;">${nameOfWeek}</strong>`;

    changeSection('generate-congrts');




  }
}
