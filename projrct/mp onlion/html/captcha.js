let captcha;
function generate() {

	// Clear old input
	document.getElementById("submit").value = "";

	// Access the element to store
	// the generated captcha
	captcha = document.getElementById("image");
	let uniquechar = "";

	const randomchar =
		"ABCDEFGHIJK1234567898 u97487c48urc7ir89u8787 jbkbLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	// Generate captcha for length of
	// 5 with random character
	for (let i = 1; i < 9; i++) {
		 uniquechar += randomchar.charAt(
			Math.random() * randomchar.length)
	}

	// Store generated input
	captcha.innerHTML = uniquechar;
}

function printmsg() {
	const usr_input = document
		.getElementById("submit").value;
 
	if (usr_input == captcha.innerHTML) {
		let s = document.getElementById("key")
			.innerHTML = "Matched";
		generate();
	}
	else {
		let s = document.getElementById("key")
			.innerHTML = "not Matched";
		generate();
	}
}
