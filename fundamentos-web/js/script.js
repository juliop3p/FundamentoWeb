const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mapa = document.querySelector("#mapa");

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

const validaNome = () => {
  if (nome.value.length < 3) {
    nome.style.border = "3px solid #ff4757";
  } else {
    nome.style.border = "3px solid #2ed573";
    nomeOk = true;
  }
};

const validaEmail = () => {
  const regex = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/g;

  if (!regex.test(email.value)) {
    email.style.border = "3px solid #ff4757";
  } else {
    email.style.border = "3px solid #2ed573";
    emailOk = true;
  }
};

const validaAssunto = () => {
  if (assunto.value.length >= 100) {
    assunto.style.border = "3px solid #ff4757";
  } else {
    assunto.style.border = "3px solid #2ed573";
    assuntoOk = true;
  }
};

const enviar = () => {
  if (nomeOk && emailOk && assuntoOk) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o formulário corretamente");
  }
};

const mapaZoom = () => {
  mapa.style.width = "800px";
  mapa.style.height = "600px";
};

const mapaNormal = () => {
  mapa.style.width = "500px";
  mapa.style.height = "350px";
};
