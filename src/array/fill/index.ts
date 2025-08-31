
const fill = (arr:any[], value:any, start = 0, end = arr.length) => {
    if(arr.length === 0) return arr

    if(start < 0 || end < 0 || start > end){
        return arr
    }

   for(let i = start; i < end; i++){
       if(i >= start && i < end){
           arr[i] = value
       }
   }

   return arr

}
export default fill