function vowelsAndConsonants(s) {
    var v = ['a', 'e', 'i', 'o', 'u']
    for ( var i = 0; i < s.length; i++) {
        if (v.includes(s.charAt(i)))
        {
            console.log(s.charAt(i));
        }
    }
    for (var k = 0; k < s.length; k++){
        if (!v.includes(s.charAt(k))) {
            console.log(s.charAt(k));
        }
        
    }
    
    
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}