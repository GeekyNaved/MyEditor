
        let output = document.getElementById('output');
        let buttons = document.getElementsByClassName('tool--btn');
        for (let btn of buttons) {
            btn.addEventListener('click', () => {
                let cmd = btn.dataset['command'];
                if (cmd === 'createlink') {
                    let url = prompt("Enter the link here: ", "http:\/\/");
                    document.execCommand(cmd, false, url);
                } else {
                    document.execCommand(cmd, false, null);
                }
            })
        }

        
    document.getElementById('output').addEventListener('input', function () {
    // let output2 = document.getElementById('output2');
    var text = this.textContent,
        count = text.trim().replace(/\s+/g, ' ').split(' ').length;
//    document.querySelector('.words').textContent = count;
    var mainCount = count;
    if(mainCount >= 3){

        var newDiv = document.createElement('div');
        newDiv.id = "output";
        newDiv.contentEditable = "true";
        document.body.appendChild(newDiv);
        newDiv.focus();
    }
});
