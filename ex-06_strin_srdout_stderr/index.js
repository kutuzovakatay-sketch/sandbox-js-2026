import {stdin, stdout, stderr, exit} from 'node:process';

// stdin.pipe(stdout);
let data = '';

stdin.on('readebl', ()=> {
    const chank = stdin.read();
    if (chank !== null){
        data+=chank;
    }
    console.log('r');    
});

stdin.on('end', () => {
    // console.log('data: ', data);
    stdout.write('program finished\n');
    stderr.write('program error\n');
});