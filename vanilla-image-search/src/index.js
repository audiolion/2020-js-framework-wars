/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let form = $('form')

form.onsubmit = async (e) => {
  e.preventDefault()

  let loadingImg = $('img#loadingImage')
  loadingImg.style.display = ''

  let searchTerm = $('input#searchTerm').value

  let images = await getImages(searchTerm)

  loadingImg.style.display = 'none'

  let imageSection = $('section.images')

  images.map((image) => {
    let img = document.createElement('img')
    img.src = image

    imageSection.appendChild(img)
  })
}

const API_URL = 'https://nature-image-api.now.sh/search?q='

async function getImages(searchTerm) {
  const response = await fetch(`${API_URL}${searchTerm}`)
  const json = await response.json()
  return json.images.map(({ image }) => image)
}
