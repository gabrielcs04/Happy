// create map
const map = L.map('mapid').setView([-22.0050818,-47.893489], 15)

// create and add titleLayes
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)

})  

// adicionar campo de fotos

function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value=""

    // adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value=""
        // limpar o valor do campo

        return
    }

    // deletar o campo
    span.parentNode.remove()
}

// select yes or no

function toggleSelect(event) {
    // retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    // colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com meu valor selecionado
    const input = document.querySelector('[name=opening_on_weekends]')

    input.value = button.dataset.value
    
    // verificar se sim ou não

}

    function validate(event) {

        // validar se lat e lng estão preenchidos
        const needsLatAndLng = false;
        if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
    
}