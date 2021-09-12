$('.contact').click(function () {
  $('.contact-content').addClass('active')
  $('.times-icon').css('opacity', '1')
  // console.log($('.contact-content'))
  // const content = e.currentTarget.children[1]
  // content.css({
  //   width: '64.8%',
  //   height: '92.4%',
  //   visibility: 'visible',
  //   opacity: '1',
  // })
  // content.addClass('active')
  // console.log(content)
  console.log(this)
})

$('.times-icon').click(function () {
  // if ($('.times-icon') === this) {
  //   console.log(this)
  // }
  // console.log(this)
  $('.contact-content').removeClass('active')
  $('.times-icon').css('opacity', '0')
})
