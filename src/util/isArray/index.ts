
const isArray = (arr:any[]) => Object.prototype.toString.call(arr).slice(8,-1) === 'Array'
export default isArray
