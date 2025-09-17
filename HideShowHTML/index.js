const button = document.getElementById('btn');
const image = document.querySelector('img')
button.addEventListener('mouseover', (event) => {
    document.getElementById('btn').style.backgroundColor = 'rgb(201, 201, 201)';
});

button.addEventListener('mouseout', (event) => {
    document.getElementById('btn').style.backgroundColor = 'rgb(226, 226, 226)';
});

button.addEventListener('click', function (event) {
    if (image.style.visibility == 'hidden') {
        image.style.visibility = 'visible';
        button.textContent = 'Hide'
         FadeWHiteToBlack()
    } else {
        image.style.visibility = 'hidden'
        button.textContent = 'Show'
         FadeWHiteToBlack()
    }
   
})