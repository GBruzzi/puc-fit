const toggle = document.querySelector("#trocar");
const titulo = document.querySelector("#titulo");
const sub = document.querySelector("#sub");
const campoNome = document.querySelector("#campo-nome");
const campoConfirmar = document.querySelector("#campo-confirmar");
const botaoSubmit = document.querySelector("#btn-submit");
const form = document.querySelector("#form");

let modoCadastro = false;

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  modoCadastro = !modoCadastro;

  if (modoCadastro) {
    titulo.innerText = "Criar Conta";
    sub.innerText = "Preencha os dados para se cadastrar";
    campoNome.classList.remove("hidden");
    campoConfirmar.classList.remove("hidden");
    botaoSubmit.innerText = "Cadastrar";
    toggle.innerText = "Fazer login";
  } else {
    titulo.innerText = "Acesso ao Sistema";
    sub.innerText = "Entre com seu e-mail e senha para acessar o painel";
    campoNome.classList.add("hidden");
    campoConfirmar.classList.add("hidden");
    botaoSubmit.innerText = "Entrar";
    toggle.innerText = "Cadastre-se";
  }
});



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.querySelector("#campo-nome input")?.value;
  const email = form.querySelector("input[type='email']").value;
  const senha = form.querySelector("input[type='password']").value;
  const confirmar = campoConfirmar.querySelector("input")?.value;


  if (modoCadastro) {
    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }

    const usuario = { nome, email, senha };
    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
    return;
  }

  // LOGIN
  const salvo = JSON.parse(localStorage.getItem("usuario"));

  if (!salvo) {
    alert("Nenhum usuário cadastrado!");
    return;
  }

  if (salvo.email === email && salvo.senha === senha) {
    alert("Login efetuado!");
    window.location.href = "dashboard.html";
  } else {
    alert("Credenciais inválidas!");
  }
});