// //----------------------- Insersion sort  ------------------------------------------------// 


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let current = arr[i]
//         let j=i-1;

//         while(j>=0 && arr[j]>current){
//              arr[j+1]=arr[j];
//              j--;
//         }

//         arr[j+1]=current;
//     }
    
//     return arr
// }
// console.log(insertionSort([5,4,1,3,2]));
// console.log(insertionSort([3,2,2,1,4]));
// console.log(insertionSort([1]));



// --------------------BUBBLE SORT --------------------------------------------------------//



// function bubbleSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//        let flag=true;
//         for(let j=0;j<arr.length-i;j++){
//              if(arr[j]> arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 flag=false;
//              }
             
//             }
        
//        if(flag==true){
//         return arr
//        }
//     }

//     return arr
// }

// console.log(bubbleSort([5,4,1,3,2]));
// console.log(bubbleSort([3,1]));
// console.log(bubbleSort([1,4,6,2,5,3,1,4,5,4]));


// -----------------SELECTION SORT---------------//
// function selectionSort(arr){
//      for(let i=0;i<arr.length-1;i++){
//          let min=i;
//          for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j;
//             }
//          }
//           if (minIndex !== i) {
//              let temp = arr[i];
//              arr[i]=arr[min];
//              arr[min]=temp;
//           }

//      }

//     return arr
// }
// console.log(selectionSort([5, 4, 1, 3, 2]));
// console.log(selectionSort([3, 1]));
// console.log(selectionSort([1, 4, 6, 2, 5, 3, 1, 4, 5, 4]));
// console.log(selectionSort([1, 2, 3, 4, 5]));
// console.log(selectionSort([9, 8, 7, 6, 5]));
// console.log(selectionSort([42]));
// console.log(selectionSort([]));
// console.log(selectionSort([5, -1, 3, 0, -7, 2]));



  //-------------------------------------quick sort --------------------------//



// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }
//     let pivot = arr[arr.length-1];
//     let left=[];
//     let right=[];

//     for(let i=0; i<arr.length-1;i++){
//         if(arr[i]<=pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

//  console.log(quickSort([5, 4, 1, 3, 2]));
// console.log(quickSort([3, 1]));
// console.log(quickSort([1, 4, 6, 2, 5, 3, 1, 4, 5, 4]));
// console.log(quickSort([1, 2, 3, 4, 5]));
// console.log(quickSort([9, 8, 7, 6, 5]));
// console.log(quickSort([42]));
// console.log(quickSort([]));
// console.log(quickSort([5, -1, 3, 0, -7, 2]));



//-------------------Merge Sort --------------------------------------------//

// function mergeSort(arr){
//       if(arr.length <= 1){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid);
//     let right = arr.slice(mid);
   
//     left = mergeSort(left);
//     right=mergeSort(right)
    

//     return  merge(left,right)

// }

// function merge(left,right){
//     let sorted = [];
//     let i=0;
//     let j=0;
    
//     while(i<left.length && j<right.length){
//         if(left[i]<= right[j]){
//             sorted.push(left[i]);
//             i++;
//         }else{
//             sorted.push(right[j]);
//             j++;
//         }
//     }

//     while(i<left.length){
//         sorted.push(left[i])
//         i++;
//     }
//     while(j<right.length){
//         sorted.push(right[j]);
//         j++;
//     }

//     return sorted
// }


//  console.log(mergeSort([5, 4, 1, 3, 2]));
// console.log(mergeSort([3, 1]));
// console.log(mergeSort([1, 4, 6, 2, 5, 3, 1, 4, 5, 4]));
// console.log(mergeSort([1, 2, 3, 4, 5]));
// console.log(mergeSort([9, 8, 7, 6, 5]));
// console.log(mergeSort([42]));
// console.log(mergeSort([]));
// console.log(mergeSort([5, -1, 3, 0, -7, 2]));

// time complexity is O(nlogn) and space complexity is n