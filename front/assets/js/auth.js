let modo = "login";

const titulo = document.getElementById("titulo");
const sub = document.getElementById("sub");
const trocar = document.getElementById("trocar");
const campoNome = document.getElementById("campo-nome");
const campoConfirmar = document.getElementById("campo-confirmar");
const btn = document.getElementById("btn-submit");

trocar.onclick = (e) => {
  e.preventDefault();
  
  if (modo === "login") {
    modo = "cadastro";
    titulo.textContent = "Acesso ao Sistema";
    sub.textContent = "Cadastre-se para aproveitar todos os recursos do sistema.";
    campoNome.classList.remove("hidden");
    campoConfirmar.classList.remove("hidden");
    btn.textContent = "Cadastrar";
    trocar.textContent = "Entrar";
  } else {
    modo = "login";
    titulo.textContent = "Acesso ao Sistema";
    sub.textContent = "Entre com seu e-mail e senha para acessar o painel";
    campoNome.classList.add("hidden");
    campoConfirmar.classList.add("hidden");
    btn.textContent = "Entrar";
    trocar.textContent = "Cadastre-se";
  }
};
