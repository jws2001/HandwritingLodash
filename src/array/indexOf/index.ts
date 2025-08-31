
const indexOf = (array:any[], value:any, fromIndex = 0) => {

    for(let i = fromIndex, len = array.length; i < len; i++){
        if(array[i] === value) return i
    }

    return -1
}
export default indexOf