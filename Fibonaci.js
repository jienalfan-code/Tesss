/*function fibonaci(n){
  const wadah =[1, 1] 
 // let a = 1
  for (let i = 0; i < n; i++) {
    wadah.push(wadah[i] + wadah[i+1])
  }
  
  return wadah
}

console.log(fibonaci(10))
*/

function fibonaci(n){
  const wadah = [] 
  
  // Looping sampai n + 2 agar jumlah elemennya sama dengan kode asli Anda
  for (let i = 0; i < n + 2; i++) {
    wadah.push((wadah[i - 2] || 0) + (wadah[i - 1] || 1))
  }
  
  return wadah
}

console.log(fibonaci(10))
// Output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
