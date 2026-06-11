// =====================
// ECOCALC
// =====================

function gerarRelatorio() {

let pontos = 0;

pontos += Number(document.getElementById("banho").value);
pontos += Number(document.getElementById("torneira").value);
pontos += Number(document.getElementById("luzes").value);
pontos += Number(document.getElementById("led").value);
pontos += Number(document.getElementById("transporte").value);
pontos += Number(document.getElementById("reciclagem").value);

let porcentagem = Math.round((pontos / 18) * 100);

let classificacao = "";
let mensagem = "";
let recomendacoes = [];

if (porcentagem >= 80) {

classificacao = "Sustentabilidade Excelente";

mensagem =
"Parabéns! Seus hábitos demonstram um excelente compromisso com a sustentabilidade.";

} else if (porcentagem >= 60) {

classificacao = "Sustentabilidade Boa";

mensagem =
"Você já possui hábitos sustentáveis, mas ainda existem oportunidades de melhoria.";

recomendacoes.push("Reduzir o tempo de banho.");
recomendacoes.push("Aumentar a frequência da reciclagem.");

} else {

classificacao = "Sustentabilidade Baixa";

mensagem =
"Alguns hábitos podem estar aumentando seu impacto ambiental.";

recomendacoes.push("Fechar a torneira ao escovar os dentes.");
recomendacoes.push("Utilizar transporte sustentável.");
recomendacoes.push("Separar resíduos recicláveis.");
recomendacoes.push("Trocar lâmpadas convencionais por LED.");

}

let html = `

<h2>${classificacao}</h2>

<p>
<strong>Pontuação:</strong> ${porcentagem}/100
</p>

<p>
${mensagem}
</p>

`;

if (recomendacoes.length > 0) {

html += `
<h3>Recomendações</h3>
<ul>
`;

recomendacoes.forEach(item => {
html += `<li>${item}</li>`;
});

html += `</ul>`;
}

document.getElementById("resultado").innerHTML = html;

}

// =====================
// QUIZ PREMIUM
// =====================

function corrigirQuizPremium() {

let acertos = 0;

let erros = [];

const respostas = {

q1: {
correta: "c",
texto: "Vidro",
explicacao:
"O vidro pode levar milhares de anos para se decompor."
},

q2: {
correta: "b",
texto: "Energia Solar",
explicacao:
"A energia solar é uma fonte renovável e limpa."
},

q3: {
correta: "a",
texto: "Comprar apenas o necessário",
explicacao:
"Consumo consciente evita desperdícios e reduz impactos ambientais."
},

q4: {
correta: "b",
texto: "Fechar a torneira ao escovar os dentes",
explicacao:
"Essa prática reduz significativamente o desperdício de água."
},

q5: {
correta: "b",
texto: "Verde",
explicacao:
"A cor verde representa o descarte de vidro."
}

};

for (let questao in respostas) {

let marcada = document.querySelector(
`input[name="${questao}"]:checked`
);

if (!marcada) continue;

if (marcada.value === respostas[questao].correta) {

acertos++;

} else {

erros.push({
questao,
correta: respostas[questao].texto,
explicacao: respostas[questao].explicacao
});

}

}

let total = 5;

let percentual = Math.round((acertos / total) * 100);

let nivel = "";

if (percentual >= 80) {

nivel = "Excelente";

} else if (percentual >= 60) {

nivel = "Bom";

} else {

nivel = "Precisa Melhorar";

}

let html = `

<h2>Resultado Final</h2>

<p>
<strong>Acertos:</strong> ${acertos}/${total}
</p>

<p>
<strong>Aproveitamento:</strong> ${percentual}%
</p>

<p>
<strong>Desempenho:</strong> ${nivel}
</p>

`;

if (erros.length > 0) {

html += `
<h3>Questões para Revisar</h3>
`;

erros.forEach(item => {

html += `

<div style="
background:#f5f7f5;
padding:20px;
margin-top:20px;
border-radius:15px;
">

<h4>${item.questao.toUpperCase()}</h4>

<p>
<strong>Resposta correta:</strong>
${item.correta}
</p>

<p>
${item.explicacao}
</p>

</div>

`;

});

} else {

html += `

<div style="
background:#e8f5e9;
padding:20px;
margin-top:20px;
border-radius:15px;
">

Parabéns! Você acertou todas as questões.

</div>

`;

}

document.getElementById("resultadoQuiz").innerHTML = html;

}