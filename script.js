function insert(value) {
  const concatenation = document.getElementById("answer").value;
  document.getElementById("answer").value = concatenation + value;
}

function clean() {
  document.getElementById("answer").value = "";
}

function back() {
  const answer = document.getElementById("answer").value;
  document.getElementById("answer").value = answer.substring(
    0,
    answer.length - 1
  );
}

function calcular() {
  let answer = document.getElementById("answer").value;
  try {
    if (answer) {
      document.getElementById("answer").value = eval(answer);
    } else {
      document.getElementById("answer").value = "Nothing to calculate.";
    }
  } catch {
    document.getElementById("answer").value = "Something wrong... Try again!";
  }
}
