// 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
const initial = (array:any[]) => {
    const res : any[] = []
    for (let i = 0, len = array.length; i < len - 1; i++) {
        res.push(array[i])
    }
    return res
}
export default initial