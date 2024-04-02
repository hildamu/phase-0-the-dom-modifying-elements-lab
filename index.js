let mainElement = document.getElementById('main');
if (mainElement !==null){
    mainElement.parentNode.removeChild(mainElement);

}

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Hilda is the champion";