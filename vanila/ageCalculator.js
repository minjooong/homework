let birthday = document.getElementById("birthday");
let submit = document.getElementById("submit");
let result = document.getElementById("result");

const today = new Date();
let age;

function calculator() {
    let birthdate = new Date(birthday.value);
    if (today.getMonth() > birthdate.getMonth() || (today.getMonth() == birthdate.getMonth() && today.getDate() >= birthdate.getDate())) {
        age = today.getFullYear() - birthdate.getFullYear();
    } else {
        age = today.getFullYear() - birthdate.getFullYear() - 1;
    }

    result.innerText = `당신의 만 나이는 ${age} 입니다.`;
    return age;
}

submit.addEventListener("click", calculator);
