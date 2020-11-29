const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click',()=>
	container.classlist.add('right-panel-active')
	);
signInButton.addEventListener('click',()=>
	container.classlist.remove('right-panel-active')
	);

