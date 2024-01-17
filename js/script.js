document.querySelector('.create_new').addEventListener('click', ()=> {
    document.querySelector('.new_fb_from').classList.toggle('new_fb_fromB')
})

var birthdate = document.querySelector('#birthdate')
var option = ''

for(var a = 1; a <= 31; a++) {
    option += `<option>${a}</option>`
}
birthdate.innerHTML = option




var birthmanth = document.querySelector('#birthmanth')
var option = ''

for(var a = 1; a <= 12; a++) {
    option += `<option>${a}</option>`
}
birthmanth.innerHTML = option




var birthyear = document.querySelector('#birthyear')
var option = ''

for(var a = 1905; a <= 2024; a++) {
    option += `<option>${a}</option>`
}
birthyear.innerHTML = option

