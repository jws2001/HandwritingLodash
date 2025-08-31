
const drop = (arr:any[], n = 1) => {

    if(n ===0 || n > arr.length){
        return arr
    }

    const res = arr.slice(n)

    return res

}
export default drop