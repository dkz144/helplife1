document
  .getElementById("simulacaoForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio do formulário

    // Obter os valores dos campos
    var idade = document.getElementById("idade").value;
    var dependentes = document.getElementById("dependentes").value;
    var tipoPlano = document.getElementById("tipoPlano").value;
    var cobertura = document.getElementById("cobertura").value;

    // Valor base do plano (isso é apenas um exemplo)
    var valorBase = 100;

    // Ajustes baseados na idade
    var fatorIdade = idade < 30 ? 1 : idade <= 50 ? 1.2 : 1.5;

    // Ajustes baseados no número de dependentes
    var fatorDependentes = 1 + dependentes * 0.2;

    // Ajustes baseados no tipo de plano
    var fatorPlano =
      tipoPlano === "basico" ? 1 : tipoPlano === "intermediario" ? 1.5 : 2;

    // Ajustes baseados na cobertura
    var fatorCobertura = cobertura === "total" ? 1.3 : 1;

    // Calcular o valor final
    var valorPlano =
      valorBase * fatorIdade * fatorDependentes * fatorPlano * fatorCobertura;

    // Exibir o valor calculado
    document.getElementById("resultado").style.display = "block";
    document.getElementById("valorPlano").innerText =
      "R$ " + valorPlano.toFixed(2);
  });
