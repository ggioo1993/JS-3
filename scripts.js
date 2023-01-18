// Task 1

// let sampleObject = {
//     isItarable : false,
//     sampleArray : [12,63,21,34,98,57]
// }

// function checkIt (obj){
// if(obj.isItarable){
// for(let i = 0; i < obj.sampleArray.length; i++){
//     console.log(obj.sampleArray[i]);
// }
// } else {
//  console.log('"provided array isnt itarable"');
// }
// }

// checkIt(sampleObject);

// Task 2

// function pythCalc(a,b,c){
//     return a*a == b*b + c*c;
// }

// function checkPyth(x, y, z){
// return pythCalc(x,y,z) || pythCalc(y,x,z) || pythCalc(z,y,x)
// }

// let pythResult = checkPyth(10,8,6);
// if(checkPyth(10,8,6)){
//     console.log('პითაგორას გაუმარჯოს');
// } else console.log('არ გაუმარჯოს');
// console.log(pythResult);

// Task 3

// let arrayNum = [2,14,25,75,11,6];

// function minMax(arr){
//     let min = arr[0];
//     let max = arr[0];
//     for(let i =0; i < arr.length - 1; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return `min value is ${min} and max value is ${max}`
// }

// console.log(minMax(arrayNum));

// Task 4

// function checkDeg (deg){
//     if(deg > 0 && deg < 90){
//         return 'Acute angle: An angle between 0 and 90 degrees.'
//     } else if (deg === 90){
//         return 'Right angle: An 90 degree angle.'
//     } else if(deg > 90 && deg < 180){
//         return 'Obtuse angle: An angle between 90 and 180 degrees.'
//     } else if(deg === 180){
//         return 'Straight angle: A 180 degree angle.'
//     }
// }

// console.log(checkDeg(92));

// Task 5

// let student = [{name: 'student1', grade : 91}, {name: 'student2', grade : 71}, {name: 'student3', grade : 45}];
// function checkStudentGrade(studentArray){
//     for(let student of studentArray){
//         let grade = student.grade;
//         let finalResult = '';
//         if (grade >= 0 && grade < 51) finalResult = 'F';
//         else if (grade >= 51 && grade < 61) finalResult = 'E';
//         else if (grade >= 61 && grade < 70) finalResult = 'D';
//         else if (grade >= 71 && grade < 80) finalResult = 'C';
//         else if (grade >- 81 && grade < 100) finalResult = 'A';
//         student.finalResult = finalResult;
//     }
//     return studentArray;
// }

// console.log(checkStudentGrade(student));