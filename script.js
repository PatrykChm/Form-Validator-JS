const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.textContent.slice(0, -1)} musi mieć min. ${min} znaki.`)
	} else {
		clearError(input)
	}
}

const checkPass = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, 'Hasła do siebie nie pasują!')
	}
}

const checkEmail = email => {
	const reg =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (reg.test(email.value) === false) {
		showError(email, 'Podaj prawidłowy adres email')
	}
}

const showError = (input, msg) => {
	const formBox = input.parentElement

	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkInputs = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const clearInputs = input => {
	input.forEach(el => {
		el.value = ''
		clearError(el)
	})
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkInputs([username, pass, pass2, email])
	checkLength(username, 3)
	checkLength(pass, 8)
	checkPass(pass, pass2)
	checkEmail(email)
})

clearBtn.addEventListener('click', e => {
	e.preventDefault()

	clearInputs([username, pass, pass2, email])
})
