let bola = true
let cont = 2
let img1 = document.querySelector('.img')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')
let img5 = document.querySelector('.img5')
let img6 = document.querySelector('.img6')
let img7 = document.querySelector('.img7')
let img8 = document.querySelector('.img8')
let img9 = document.querySelector('.img9')
let img1O = false
let img1X = false
let img2O = false
let img2X = false
let img3O = false
let img3X = false
let img4O = false
let img4X = false
let img5O = false
let img5X = false
let img6O = false
let img6X = false
let img7O = false
let img7X = false
let img8O = false
let img8X = false
let img9O = false
let img9X = false


$('#button-color').click(function () {
    bola = true
    $('#button-color').css('background-color', '#A8BFC9')
    $('#button-transparent').css('background', 'rgb(26, 42, 51, 1')
    $('#img_x_pick').attr('src', './images/icon-x-color.svg')
    $('#img_o_pick').attr('src', './images/icon-o-color.svg')

})
$('#button-transparent').click(function () {
    bola = false
    $('#button-color').css('background-color', 'rgb(26, 42, 51, 1')
    $('#button-transparent').css('background-color', '#A8BFC9')
    $('#img_x_pick').attr('src', './images/icon-x-color-black.svg')
    $('#img_o_pick').attr('src', './images/icon-o-color-white.svg')
})

$('#new-game-human').click(function () {
    $('.first-tela').addClass('animacao')
    setTimeout(function () {
        $('.first-tela').hide()
        $('.second-tela').show('fast')
    }, 500)

})
$('#new-game-ia').click(function () {
    $('.first-tela').addClass('animacao')
    setTimeout(function () {
        $('.first-tela').hide()
        $('.second-tela').show('fast')
    }, 500)

})

$('.q1').click(function () {
    if (img1.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            q1T = true
            $('.q1').children().attr('src', './images/icon-x.svg').addClass('img-width')
            img1X = true
        } else {
            $('.q1').children().attr('src', './images/icon-o.svg').addClass('img-width')
            img1O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        alert('X Ganhou')
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        alert('O ganhou')
    }
})
$('.q2').click(function () {
    if (img2.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q2').children().attr('src', './images/icon-x.svg').addClass('img-width')
            img2X = true
        } else {
            $('.q2').children().attr('src', './images/icon-o.svg').addClass('img-width')
            img2O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        alert('X Ganhou')
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        alert('O ganhou')
    }
})
$('.q3').click(function () {
    if (img3.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q3').children().attr('src', './images/icon-x.svg').addClass('img-width')
            img3X = true
        } else {
            $('.q3').children().attr('src', './images/icon-o.svg').addClass('img-width')
            img3O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        alert('X Ganhou')
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        alert('O ganhou')
    }
})
$('.q4').click(function () {
    if (img4.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q4').children().attr('src', './images/icon-x.svg').addClass('img-width')
            img4X = true
        } else {
            $('.q4').children().attr('src', './images/icon-o.svg').addClass('img-width')
            img4O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        alert('X Ganhou')
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        alert('O ganhou')
    }
})
$('.q5').click(function () {
    if (img5.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q5').children().attr('src', './images/icon-x.svg').addClass('img-width')
            img5X = true
        } else {
            $('.q5').children().attr('src', './images/icon-o.svg').addClass('img-width')
            img5O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        alert('X Ganhou')
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        alert('O ganhou')
    }
})
$('.q6').click(function () {
    if (img6.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q6').children().attr('src', './images/icon-x.svg').addClass('img-width')
            img6X = true
        } else {
            $('.q6').children().attr('src', './images/icon-o.svg').addClass('img-width')
            img6O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        alert('X Ganhou')
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        alert('O ganhou')
    }
})
$('.q7').click(function () {
    if (img7.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q7').children().attr('src', './images/icon-x.svg').addClass('img-width')
            img7X = true
        } else {
            $('.q7').children().attr('src', './images/icon-o.svg').addClass('img-width')
            img7O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        alert('X Ganhou')
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        alert('O ganhou')
    }
})
$('.q8').click(function () {
    if (img8.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q8').children().attr('src', './images/icon-x.svg').addClass('img-width')
            img8X = true
        } else {
            $('.q8').children().attr('src', './images/icon-o.svg').addClass('img-width')
            img8O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        alert('X Ganhou')
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        alert('O ganhou')
    }
})
$('.q9').click(function () {
    if (img9.classList.contains('img-width')) {
        return
    } else {
        if (cont % 2 == 0) {
            $('.q9').children().attr('src', './images/icon-x.svg').addClass('img-width')
            img9X = true
        } else {
            $('.q9').children().attr('src', './images/icon-o.svg').addClass('img-width')
            img9O = true
        }
    }
    ++cont
    if (img1X && img2X && img3X || img1X && img4X && img7X || img1X && img5X && img9X || img7X && img8X && img9X || img2X && img5X && img8X || img3X && img5X && img7X || img4X && img5X && img6X || img3X && img6X && img9X) {
        alert('X Ganhou')
    }
    if (img1O && img2O && img3O || img1O && img4O && img7O || img1O && img5O && img9O || img7O && img8O && img9O || img2O && img5O && img8O || img3O && img5O && img7O || img4O && img5O && img6O || img3O && img6O && img9O) {
        alert('O ganhou')
    }
})