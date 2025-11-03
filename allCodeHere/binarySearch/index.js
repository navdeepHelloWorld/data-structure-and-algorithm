//=----------------------------Binary search====----------------------//

// function binarySearch(arr,target,left=0, right = arr.length-1){
  
//      if(right<=1){
//          if(arr[0]==target){
//             return console.log(0)
//          }else{
//             return console.log(-1)
//      }
//     }
//       let mid = Math.floor(arr.length/2);

//       if(arr[mid]==target){
//         return console.log(mid)
//       }else if(arr[mid] > target){
//         binarySearch(arr,target,0,mid-1)
//       }else{
//         binarySearch(arr,target,mid+1,arr.length)
//       }
    
// }

// function binarySearch(arr,target){
//     let left=0;
//     let right =arr.length-1;
  
//     while(left<=right){
//         let mid = Math.floor((left+right)/2);

//         if(arr[mid]==target){
//             return console.log(mid)
//         }else if(arr[mid]<target){
//             left = mid+1;
//         }else{
//             right = mid -1;
//         }
//     }

//      return console.log(-1)
// }

// binarySearch([2,3,4,5,6,7,77,88,999],1)
// binarySearch([2,3,4,5,6,7,77,88,999],88)
// binarySearch([2,3,4,5,6,7,77,88,999],6)
// binarySearch([2,3,4,5,6,7,77,88,999],999)
// binarySearch([2],1);
// binarySearch([],1)



//------------------------first and last occurence -------------------------//

/*
function findFirstAndLast(arr, target,left=0,right=arr.length-1) {
    if(left<=right){
        return -1
    }
   let firstOcc = null;
   let lastOcc = null;
    let mid = Math.floor((right+left)/2)

    if(arr[mid]==target){
          if(arr[mid-1]==target){
               findFirstAndLast(arr,target, left,mid-1)
          }else{
            firstOcc=mid;
            return 
          }
          if(arr[mid+1]==target){
            findFirstAndLast(arr,target,mid+1,right);
          }else{
            lastOcc = mid;
            return 
          }
    }
    else if(arr[mid]<target){
        findFirstAndLast(arr,target,mid+1,right);
    }else{
        findFirstAndLast(arr,target,left,mid-1);
    }

    return [firstOcc,lastOcc]

}
*/

function findFirstAndLast(arr,target){
    
    let firstOcc = -1;
    let lastOcc = -1;

    let left =0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]==target){
            if(arr[mid-1]==target){
                right= mid-1;
            }else{
                firstOcc= mid;
                break;
            }
        }else if(arr[mid]<target){
            left = mid +1;
        }else{
            right = mid-1;
        }
    }
  

    left =0;
    right =arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]==target){
            if(arr[mid+1]==target){
                left= mid+1;
            }else{
                lastOcc= mid;
                break;
            }
        }else if(arr[mid]<target){
            left = mid +1;
        }else{
            right = mid-1;
        }
    }
    
    return [firstOcc,lastOcc]
}

console.log(findFirstAndLast([1, 2, 2, 2, 3, 4, 5], 2));     // Expected: [1, 3]
console.log(findFirstAndLast([1, 1, 1, 1, 1], 1));           // Expected: [0, 4]
console.log(findFirstAndLast([1, 2, 3, 4, 5,6,6,6,7,9], 6));           // Expected: [-1, -1]
console.log(findFirstAndLast([], 2));                       // Expected: [-1, -1]
console.log(findFirstAndLast([2,2], 2));                      // Expected: [0, 0]
console.log(findFirstAndLast([2], 3));                      // Expected: [-1, -1]



 






