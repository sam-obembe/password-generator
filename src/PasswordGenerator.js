class PasswordGenerator{

	constructor(passwordLength){
		this.characters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&?!'
		this.passwordLength = passwordLength
	}

	generate(){
		let password = ""
		let charLength = this.characters.length

		for(let i=0; i<this.passwordLength; i++){
			let charLocation = Math.floor(Math.random()*charLength)

			let selectedCharacter = this.characters.charAt(charLocation)
			password+=selectedCharacter
		}
		return password
	}

}

export default PasswordGenerator