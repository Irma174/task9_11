
let but1 = document.querySelector('.start1');
let container1 = document.querySelector('.container');

but1.hidden = false;
container1.hidden = true;

but1.addEventListener('click', ()=>{
    but1.hidden = true;
    container1.hidden = false;
    personGeneration();
});

function personGeneration()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;    
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#fatherNames').innerText = initPerson.fatherNames;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.yearBirth;
    document.querySelector('#profession').innerText = initPerson.profession;
};

//Заново
document.querySelector('#btnRetry').addEventListener('click', personGeneration);

document.querySelector('#btnReset').addEventListener('click', clear);

function clear(){
    document.querySelector('#surnameOutput').innerText = "Генерация фамилии";
    document.querySelector('#firstNameOutput').innerText = "Генерация имени";
    document.querySelector('#fatherNames').innerText = "Генерация отчества";
    document.querySelector('#genderOutput').innerText = "Генерация пола";
    document.querySelector('#birthYearOutput').innerText = "Генерация даты рождения";
    document.querySelector('#profession').innerText = "Генерация профессии";

}


