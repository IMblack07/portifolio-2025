document.addEventListener('DOMContentLoaded', function() {
  // Garante que o primeiro trimestre seja exibido ao carregar a página
  mostrarTrimestre(1);
});

function mostrarTrimestre(numero) {
  // Esconde todos os trimestres
  document.getElementById('trimestre1').style.display = 'none';
  document.getElementById('trimestre2').style.display = 'none';
  document.getElementById('trimestre3').style.display = 'none';

  // Mostra apenas o trimestre selecionado
  document.getElementById('trimestre' + numero).style.display = 'block';
}