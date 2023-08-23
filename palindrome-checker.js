function palindrome(str) {
    let bArr = [];
    let replaced = str.replace(/[^a-z0-9]/gi, '');
    replaced = replaced.toLowerCase();
    let index = replaced.length - 1;
    let newArr = replaced.split("");
    for (let i=index; i>=0; i--){
      bArr.push(newArr[i]);
    }
    let newStr = bArr.join("")
    if (newStr==replaced){
      return true;
    } else {
      return false;
    }
  }
  
  
console.log(palindrome("eye$"));