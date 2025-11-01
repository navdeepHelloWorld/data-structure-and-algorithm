//=----------------------------Binary search====----------------------//

// function binarySearch(arr,target){
  
//      if(arr.length<=1){
//          if(arr[0]==target){
//             return console.log(0)
//          }else{
//             return console.log("Not found")
//      }
//     }
//       let mid = Math.floor(arr.length/2);

//       if(arr[mid]==target){
//         return console.log(mid)
//       }else if(arr[mid] > target){
//         binarySearch(arr.slice(0,mid),target)
//       }else{
//         binarySearch(arr.slice(mid),target)
//       }
    
// }

function binarySearch(arr,target){
    let left=0;
    let right =arr.length-1;
  
    while(left<=right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid]==target){
            return console.log(mid)
        }else if(arr[mid]<target){
            left = mid+1;
        }else{
            right = mid -1;
        }
    }

     return console.log(-1)
}

binarySearch([2,3,4,5,6,7,77,88,999],1)
binarySearch([2,3,4,5,6,7,77,88,999],88)
binarySearch([2,3,4,5,6,7,77,88,999],6)
binarySearch([2,3,4,5,6,7,77,88,999],999)
binarySearch([2],1);
binarySearch([],1)
 






