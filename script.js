const contactform = document.querySelector('.contact-form');
const center = document.querySelector('.container');

contactform.addEventListener('submit', (event) => {
	event.preventDefault();
	center.innerHTML = '<p>Thanks for your message. <br /> I\'ll respond to you shortly</p>';
});