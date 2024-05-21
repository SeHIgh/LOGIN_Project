let cnt = 0;

let mode = document.querySelector('#mode');

mode.addEventListener('click', () => {
    cnt++;
    if(cnt % 2 == 1){
        mode.value = 'Light';

        document.body.style.backgroundColor = '#272822';
        document.body.style.color = 'white';
    } else {
        mode.value = 'Dark';

        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#272822';
    }
});

const txtColor = document.querySelectorAll(':color');