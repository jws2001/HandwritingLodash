
/**
 * https://262.ecma-international.org/6.0/#sec-samevaluezero 实现文档
 * @param a 
 * @param b 
 */
const eq = (x: any, y: any) =>  x === y || Object.is(x,y)

export default eq