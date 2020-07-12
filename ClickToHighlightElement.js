// with every click event that is registered in the browser, the clicked element will be highlighted with a green border.
javascript:document.addEventListener('click',(event) => {let getCurrentElement = event.target; getCurrentElement.style.border = '5px solid #86C232';});
