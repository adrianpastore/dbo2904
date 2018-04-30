let Assistirvideo = function() {
  let URL = window.URL || window.webkitURL

  let playSelectedFile = function (event) {
    let file = this.files[0]
    let type = file.type
    let videoNode = document.querySelector('video')
    let fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
  }
  let inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)
}()
