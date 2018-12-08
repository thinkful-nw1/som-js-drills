function imageCarousel() {
  $('.thumbnail').on('click', event => {
    const targetImg = $(event.currentTarget).find('img'); 
    const targetSource = targetImg.attr('src'); 
    const targetAlt = targetImg.attr('alt'); 

    $('.hero').find('img').attr('src', targetSource)

    $('.hero').find('img').attr('alt', targetAlt)
  })
}

$(imageCarousel)