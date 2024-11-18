// Abrir modal de cadastro
const btnCadastro = document.getElementById('btn-cadastro');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const formCadastro = document.getElementById('form-cadastro');

// Máscaras para CPF e Telefone usando Inputmask
const im = new Inputmask();

// Máscara para CPF
im.mask(document.getElementById('cpf'), { alias: "cpf" });
// Máscara para Telefone
im.mask(document.getElementById('telefone'), { alias: "tel" });

// Abrir modal de cadastro
btnCadastro.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Fechar modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Salvar dados de cadastro no localStorage e redirecionar para o perfil
formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const cpf = document.getElementById('cpf').value;
  const senha = document.getElementById('senha').value;

  // Validar os dados antes de salvar
  if (!nome || !email || !telefone || !cpf || !senha) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  const usuario = {
    nome,
    email,
    telefone,
    cpf,
    senha,
  };


  
  // Salva os dados no localStorage
  localStorage.setItem('usuario', JSON.stringify(usuario));

  alert('Seu cadastro foi realizado!');
  
  // Fechar modal e redirecionar para a página de perfil
  modal.style.display = 'none';
  window.location.href = 'perfil.html';
});

const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return "telefone"
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value}