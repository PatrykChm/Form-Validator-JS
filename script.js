const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const checkInputs = input => {
	input.forEach(el => {
		if(el.value === ""){
			console.log('błąd');
		} else{
			console.log('ok');
		}
	})
}

const clearInputs = input => {
	input.forEach(el => {
		el.value = ''
	})
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkInputs([username, pass, pass2, email])
})

clearBtn.addEventListener('click', e => {
	e.preventDefault()

	clearInputs([username, pass, pass2, email])
})
