function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

// function logWhisper(string) {
  
// }

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase
  var uppercase = string.toUpperCase

  if (string == "I love you, Grandma."){
    return "I love you, too." 
  } else if (string === lowercase ){
    return "I can't hear you!"
} else (string === uppercase){
    return "YES INDEED!"
  }
}