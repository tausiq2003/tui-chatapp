const blessed = require('blessed');
const screen = blessed.screen({
    smartCSR: true,
    title: 'tui-chatapp'
});

const messageBox = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'This is a TUI app',
    tags: true,
    border: {
        type: 'line',
    },
    style: {
        border:{
            fg: 'white',
        },

    },
});
screen.append(messageBox);
screen(['escape, 'q', 'C-c'],()=>{
       process.exit(0)
});
screen.render();
export{}
