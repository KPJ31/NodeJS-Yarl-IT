// let x=75;
// if(x>=90){
//     console.log('pass');
// }
// else{
//     console.log('fail');
// }


//error check 
// let x="guve";
// if(isNaN(x)){
//     console.log('not number');
// }
// else{
//     if(x>=50){
//     console.log('pass');
// }
// }
//     else{
//     console.log('fail');
// }

//ternary operator
// x=80;
// let result= (x>=50)?'pass':'Fail';
// console.log(result);


//Swich case
// let day=5;
// switch(day){
//     case 1:console.log('monday');
//     break;
//     case 2:console.log('tuesday');
//     break;
//     case 3:console.log('wednesday');
//     break;
//     case 4:console.log('thursday');
//     break;
//     case 5:console.log('friday');
//     break;
//     case 6:console.log('saturday');
//     break;
//     case 7:console.log('sunday');
//     break;
//     default:console.log('Invalid day');
// }


// let day=2;
// let dayName;
// switch(day){
//     case 1:
//         dayName='monday';
//     break;
//     case 2:
//         dayName='tuesday';
//     break;
//     case 3:
//         dayName='wednesday';
//     break;
//     case 4:
//         dayName='thursday';
//     break;
//     case 5:
//         dayName='friday';
//     break;
//     case 6:
//         dayName='saturday';
//     break;
//     case 7:
//         dayName='sunday';
//     break;
//     default:console.log('Invalid day');
// }
//     console.log (dayName);


let day=9;
switch(day){
    case 1,2,3,4,5:
        console.log('weekday');
    break;
    case 6,7:
        console.log('weekend');
    break;
    default:console.log('Invalid day');
}