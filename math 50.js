const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {
    a = ans.split('').map(n => Number(n));
});
function multi(n){
    var count = 0;
    for (i = 0; i<n.length; i++){
        count=Math.pow(n[0],n[2]);
    }
    return count;
}

ip.on('close', () => {console.log(multi(a))})
