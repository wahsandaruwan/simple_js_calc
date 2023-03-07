function add() {
  const num1 = document.querySelector("#num1");
  const num2 = document.querySelector("#num2");
  const answer1 = document.querySelector("#answer");

  const answer = parseFloat(num1.value) + parseFloat(num2.value);
  answer1.innerHTML = answer;
}
