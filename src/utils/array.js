/**
 * 배열에 담겨있는 keyname 을 기준으로 배열을 정리한 객체를 반환한다.
 * 
 * getArrangedObjectByKeyname([{type:'A'},{type:'A'},{type:'A'},{type:'B'},{type:'C'},{type:'C'}], 'type')
 * 
 * {
 *  A:[{type:'A'},{type:'A'},{type:'A'}],
 *  B:[{type:'B'}],
 *  C:[{type:'C'},{type:'C'}]
 * }
 * 
 * @param {Array} list 
 * @param {String} keyname 
 */
export const getArrangedObjectByKeyname = (list, keyname) =>
  list.reduce((prev, next) => {
    const type = next[keyname]
    !prev[type] ? (prev[type] = [next]) : prev[type].push(next)
    return prev
  }, {})
