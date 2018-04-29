const lugar = document.querySelector('div#videos');
const nomevideo = document.querySelector('#nomevideo');
const arqvideo = document.querySelector('#videomp4');
const descricao = document.querySelector('#textarea');
const formvideo = document.querySelector('form#adcvideo')
formvideo.addEventListener('submit', function(e) {
    e.preventDefault();
        const adc1 = nomevideo.value;
        const adc2 = arqvideo.value;
        const adc3 = descricao.value;
        const adcs = `<h2>${adc1}</h2>
                    <video width="320" height="240" controls>
                        <source src="${adc2}" type="video/mp4">
                    </video>
                    <p><strong>${adc3}</strong></p>`;
        lugar.innerHTML += adcs;
});

