const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function convertToWord(n){
    if (n < 20) return num[n];
    let digit = n%10;
    if (n < 100) return tens[~~(n/10)-2] + (digit? "-" + num[digit]: "");
    if (n < 1000) return num[~~(n/100)] +" hundred" + (n%100 == 0? "": " and " + convertToWord(n%100));
    return convertToWord(~~(n/1000)) + " thousand" + (n%1000 != 0? " " + convertToWord(n%1000): "");
}

console.log(convertToWord(60000))