
let starButtons = document.querySelectorAll('.star-btn') 

starButtons.forEach(function(starButton) { 
    starButton.addEventListener('click', function() { 
        let currentColor = starButton.style.background 
        if (currentColor == 'black') { 
            starButton.style.background = 'yellow' 
        } else { 
            starButton.style.background = 'black' 
        } 
    }) 
})
// function change_star() {
//     let starButtons = document.querySelectorAll('.star-btn');
//     if (current_background == 'url(../img/lightstar.png)') {
//         current_background = 'url(../img/darkstar.png)'
//     } else {
//         current_background = 'url(../img/lightstar.png)'
//     }
//     starButton.style.background = current_background
//     starButton.style.backgroundSize = 'cover'
//  }
  
// let change_star_button = document.querySelectorAll('.star-btn')
// let current_background = 'url(../img/lightstar.png)'
// change_star_button.addEventListener('click', change_star)