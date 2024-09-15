function preencherFormulario() {
  // Seleciona o elemento com o conteúdo a ser copiado
  const elementoConteudo = document.getElementById("conteudo");

  // Seleciona o campo do formulário onde o conteúdo será colado
  const campoFormulario = document.getElementById("campoFormulario");

  // Copia o conteúdo para o campo do formulário
  campoFormulario.value = elementoConteudo.innerText;

  // Torna o campo imutável (exemplos)
  // Para um input:
  campoFormulario.readOnly = true;

  // Para um div ou outro elemento editável:
  campoFormulario.setAttribute("contenteditable", "false");
}