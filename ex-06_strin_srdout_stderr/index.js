import {stdin, stdout, stderr, exit, argv} from 'node:process';

stdin.pipe(stdout);
// let data = '';

stdin.on('readebl', ()=> {
    const chank = stdin.read();
    if (chank !== null){
        data+=chank;
    }
    // console.log('r');    
});

stdin.on('end', () => {
    console.log('data: ', data);
    stdout.write('program finished\n');
    // exit(0);
    stderr.write('program error\n');
    // exit(7);
});