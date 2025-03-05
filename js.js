let valor1 = "";
let valor2 = "";
let operacao = "";

const botoes = document.querySelectorAll("button");
const display = document.getElementById("display");

display.textContent = "0";

botoes.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    const valor = event.target.innerText;

    if (!isNaN(valor) || valor === ".") {
      if (operacao === "") {
        if (valor === "." && valor1.includes(".")) return;
        valor1 += valor;
        console.log(`valor 1: ${valor1}`);
      } else {
        if (valor === "." && valor2.includes(".")) return;
        valor2 += valor;
        console.log(`valor 2: ${valor2}`);
      }
    }
    switch (valor) {
      case "+":
      case "-":
      case "x":
      case "/":
        operacao = valor;
        break;
      case "=":
        if (valor1 === "" || valor2 === "" || operacao === "") {
          display.textContent = "error";
          return;
        }

        let resultado = operacoes({
          n1: Number(valor1),
          n2: Number(valor2),
          op: operacao,
        });
        display.textContent = resultado.toFixed(2);
        valor1 = resultado.toString();
        valor2 = "";
        operacao = "";
        return;
      case "AC":
        valor1 = "";
        valor2 = "";
        operacao = "";
        display.textContent = "0";
        return;
    }

    display.textContent = `${valor1} ${operacao} ${valor2}`;
  });
});

function operacoes({ n1, n2, op }) {
  switch (op) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "x":
      return n1 * n2;
    case "/":
      if (n2 == 0) {
        return "ERROR";
      }
      return n1 / n2;
  }
}
