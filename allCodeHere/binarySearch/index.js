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

/*
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

*/



//--------------------------------FIND TARGET IN ROATED ARRAY --------------------------------------------------------------------------------------//

/*
 function searchRotated(arr, target) {
  // Your logic goes here
   let left =0;
   let right = arr.length -1 ;

   while(left<=right){
     let mid = Math.floor((left+right)/2);
     if(arr[mid]==target) return console.log(mid)
     if(arr[left]<=arr[mid]){
          if(arr[left]<= target && target <arr[mid]){
            right = mid -1;
          }else{
            left = mid+1;
          }
     }else{
        if(arr[mid]< target && target <= arr[right]){
            left = mid+1;
        }else{
            right = mid -1
        }

     }
   }
  
   return console.log(-1)
}


searchRotated([4,5,-2,-1,0,1,2], 2);    // Expected: 4
searchRotated([4,5,6,7,0,1,2], 3);    // Expected: -1
searchRotated([1], 0);               // Expected: -1
searchRotated([1], 1);               // Expected: 0
searchRotated([5,1,3], 5);           // Expected: 2

*/



//------------------------------------FIND PEAK ELEMENT -------------------------------------------//
/*
function findPeakElement(arr){

    let left =0;
    let right= arr.length -1;

    while(left<right){
        
        let mid = Math.floor((left+right)/2);
        if(arr[mid]>arr[mid+1]){

            right = mid;
        }else{
            left = mid+1;
        }
    }
     return left

}

console.log(findPeakElement([1, 2, 3, 1]));           // Expected: 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));   // Expected: 5 or 2
console.log(findPeakElement([10, 20, 15, 2, 23, 90, 67])); // Expected: 1 or 5
console.log(findPeakElement([1]));                    // Expected: 0
console.log(findPeakElement([2, 1]));                 // Expected: 0
*/


//---------------------------find posion to insert number with binary serarch -----------------------------//
/*
function searchInsert(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return low;
}

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));
console.log(searchInsert([], 10));


*/



//-----------------------------------koko eatign banana problem ----------------------------------------------------//


/*
function minEatingSpeed(piles, h) {
  let low = 1;
  let high = Math.max(...piles);

  function canFinish(speed) {
    let hours = 0;
    for (const pile of piles) {
      hours += Math.floor((pile + speed - 1) / speed);
      if (hours > h) return false;
    }
    return hours <= h;
  }

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (canFinish(mid)) high = mid;
    else low = mid + 1;
  }

  return low;
}

console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([30,11,23,4,20], 5));
console.log(minEatingSpeed([30,11,23,4,20], 6));
console.log(minEatingSpeed([100], 10));
console.log(minEatingSpeed([1,1,1,1,1,1], 6));

*/




