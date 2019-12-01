function messageSplit (k,s) {
  const arrWords = k.split(' ');
  const valid = k.length <= 500 && k.length > 0 
  								&& arrWords.every(arrWord => arrWord.length <= s)
                                && Number.isInteger(s)
                                && typeof s == 'number'
  
  if(!valid) {
  	return -1
  }
  let fullMsg = [];
  let cutMsg = [];
  for (let i = 0; i <= arrWords.length; i++){
  	if (i === arrWords.length) {
    	fullMsg.push(cutMsg.join())
    } else if (cutMsg.join().length + arrWords[i].length <= s) {
    	cutMsg.push(arrWords[i])
    } else {
    	fullMsg.push(cutMsg.join(' '))
      cutMsg = []
      i--
    }
  }
  return fullMsg
  
} 
console.log(messageSplit('SMS messages are really short', 12))