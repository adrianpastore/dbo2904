let Assistirvideo = function() {
  let URL = window.URL || window.webkitURL;
  let selecionararquivo = function(e){
    let file = this.files[0];
    let type = file.type;
    let videoNode = document.querySelector('video');
    let fileURL = URL.createObjectURL(file);
    videoNode.src = fileURL;
  }
  let inputNode = document.querySelector('input');
  inputNode.addEventListener('change', selecionararquivo, false);
}();

function NomeArquivo (fileInput) {
    let arqv = fileInput.files;
    let h2 = document.createElement("h2");
    for (let i = 0; i < arqv.length; i++) {
        let htxt = "O nome do Arquivo é: "+(arqv[i].name);
        let htxtcerto = htxt.replace('.mp4','');
        let txt = document.createTextNode(htxtcerto);
        h2.appendChild(txt);
    }
    document.body.appendChild(h2);
}

