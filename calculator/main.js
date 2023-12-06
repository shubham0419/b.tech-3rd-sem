const btns = document.getElementsByTagName('button');

const screen = document.getElementById('screen');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        console.log(e.target.innerText);
        var text = e.target.innerText;

        if (text === 'x') {
            screen.value += '*';
        } else if (text === 'C') {
            screen.value = '';
        } else if (text === '=') {
            try {
                var ans = eval(screen.value);
                screen.value = ans;
            } catch (error) {
                alert("Invalid Operation");
            }
        } else {
            screen.value += text;
        }
    })
}