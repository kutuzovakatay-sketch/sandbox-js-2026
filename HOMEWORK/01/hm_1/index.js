import {exit, argv, stderr} from 'node:process';

function ShowHelp(){
    console.log('ВВедите аргументы: пример ввода аргументов: a=2 b=5 с=9');
    exit(1);
}


if(argv.length===2){
    ShowHelp();
}

const param = argv[2];
if (param.includes('-h', '--help')){
    ShowHelp();
    exit(0);
}

let a = null;
let b = null;
let c = null;
let D = 0;
let x1 = 0;
let x2 = 0;

for (const param of argv) {
    if(param.startsWith('a=')){
        const spliredA = param.split('=')
        a = +spliredA[1];

        if (a&&b&&c){
            break;
        }
    }
    if(param.startsWith('b=')){
        const spliredB = param.split('=')
        b = +spliredB[1];
        if (a&&b&&c){
            break;
        }
    }
    if(param.startsWith('c=')){
        const spliredC = param.split('=')
        c = +spliredC[1];
        if (a&&b&&c){
            break;
        }
    }
}


// if (a === 0){
//     stderr.write('Аргумент а не может быть = 0');
//      exit(2);
// }

// if (a){
//     D = b**2 - 4 *a * c;
// } else{
//     stderr.write('Error a or b or c')
//     exit(2);
// }

// if(a&&b&&c){
//     if 
// }

if (a === 0){
    stderr.write('Аргумент а не может быть = 0');
    exit(2);
}else{
    D = (b**2) - (4 *a * c);
}

// if( (a=== (null || undefined)) || (b=== (null || undefined)) ||  (c=== (null || undefined))){
//     stderr.write('Error a or b or c')
//     exit(2);
// }else{
//     D = (b**2) - (4 *a * c);
// }



if (D>0){
x1 = (-b + D**0.5) / (2 * a)
x2 = (-b - D**0.5) / (2 * a)


console.log('Два корня: x1= ', x1, 'x2 = ', x2);

}else if (D === 0){
    x1 = -b/2*a;
    console.log('Один корень: x=', x1);
}else{
    stderr.write('Корней нет, D<0')
}

