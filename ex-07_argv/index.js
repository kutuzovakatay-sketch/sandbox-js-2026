import {exit, argv, stderr} from 'node:process';

function ShowHelp(){
    console.log('Exemple arguments: a=2 b=5');
    
}

if(argv.length===2){
    ShowHelp();
    exit(0);
}
 
// console.log('argv', argv);

const param = argv[2];
if (param.includes('-h', '--help')){
    ShowHelp();
    exit(0);
}

let a = null;
let b = null;

for (const param of argv) {
    if(param.startsWith('a=')){
        const spliredA = param.split('=')
        a = +spliredA[1];
        if (a&&b){
            break;
        }
    }
    if(param.startsWith('b=')){
        const spliredB = param.split('=')
        b = +spliredB[1];
        if (a&&b){
            break;
        }
    }
}

if (a&&b){
    console.log('сумма a+b= ', a+b);
    exit(0);
} else{
    stderr.write('Error a or b (ot both)')
    exit(2);
}