const caesarCipher = (str, shift) => {
  
    return str.replace(/[a-z]/g, (char) =>
    String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
  );
  
  };
  
  module.exports = caesarCipher;