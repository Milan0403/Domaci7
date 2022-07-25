let link = window.location.href;
let searchLink = 'https://www.google.com/search?';
if(link.slice(0,30) !== searchLink){
	let logo = document.querySelector('.lnXdpd');
	logo.src = chrome.runtime.getURL('images/cysecor_logo.png');
	logo.srcset = chrome.runtime.getURL('images/cysecor_logo.png');
} else{
	let searchLogo = document.querySelector('.logo img');
	searchLogo.src = chrome.runtime.getURL('images/cysecor_logo.png');
	searchLogo.srcset = chrome.runtime.getURL('images/cysecor_logo.png');
}

