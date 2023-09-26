((code) => {
  let decoded = "";
  for (let i = code.length - 1; i >= 0; i--) {
    decoded += String.fromCharCode(code[i].charCodeAt(0) - 5);
  }
  console.log(decoded);
})("8757%TLSNRTI%TYSFX%YXJK[JI%YF%^YWFU%JPFP%JMY%SNTO");
