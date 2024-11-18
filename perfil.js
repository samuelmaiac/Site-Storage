// Recupera os dados do localStorage
const usuario = JSON.parse(localStorage.getItem('usuario'));

// Verifica se o usuário foi encontrado no localStorage
if (usuario) {
  document.getElementById('nome-usuario').textContent = usuario.nome;
  document.getElementById('email-usuario').textContent = usuario.email;
  document.getElementById('telefone-usuario').textContent = usuario.telefone;
  document.getElementById('cpf-usuario').textContent = usuario.cpf;
} else {
  alert('Usuário não encontrado!');
  window.location.href = 'index.html'; // Redireciona de volta para a página inicial se não encontrar os dados
}
