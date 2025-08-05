const chunk = (arr: any[], size?: number): any[][] => {

    if (size === undefined) return [arr]

    if (size === 0) return []

    const res = [];
    const count = Math.ceil(arr.length / size)
    for (let i = 1; i <= count; i++) {
        res.push(arr.slice((i - 1) * size, i * size))
    }
    return res
}


export default chunk


