/**
 * Created by h205p2 on 9/28/17.
 */
//write first method
function sleep_in(weekday,holiday) {

    if(weekday == false && (holiday == true || holiday == false)){
        return true;
    }
    if(weekday == true && holiday == true){
        return true;
    }
    if(weekday == true && holiday == false){
        return false;
    }
}

function monkey_trouble(monkeySmiling, monkeySmilingDos) {
    if(monkeySmiling == monkeySmilingDos){
        return true;
    }else{
        return false;
    }
}

function string_times(word,n){
    var total = "";
    for(var i=0; i < n; i++){
        total += word;
    }
    return total;
}

function front_times(word,n){
    var q = word;
    var total = "";
    for(var i=0; i<n; i++ ){
        total += q.substring(0,3);
    }
    return total;
}

function string_bits(word,n){
    var q = word;
    var total = "";
    for(i=0; i < word.length-1;  i++){
        if(i%2==0){
            total += q[i];
        }
    }
    return total;
}

function caughtSpeeding(speed,birthday){
    if((speed<=60 && birthday == false) || (speed<=65 && birthday == true)){
        return 0;
    }
    if((speed<=80 && speed> 60 && birthday == false) || (speed>65 && speed<=85 && birthday == true)){
        return 1;
    }
    if((speed>80 && birthday == false) || (speed>85 && birthday == true)){
        return 2;
    }
}

function fizzString(i){
    var k = "!";
    if(i%3 == 0 && i%5 != 0){
        return "Fizz";
    }
    if(i%5 == 0 && i%3 != 0){
        return "Buzz";
    }
    if(i%3 == 0 && i%5 == 0){
        return "FizzBuzz";
    }
    if(i%3 != 0 && i%5 != 0){
        return i + k;
    }
}

function teaParty(tea,candy){
    if(candy>=5 && tea >=5 && candy < tea*2 && candy*2 > tea){
        return 1;

    }
    if(candy<5 || tea<5){
        return 0;
    }
    if(candy>=5 && tea >=5 && candy >= tea*2 || candy*2 <= tea){
        return 2;
    }
}

function blackjack(x,y){
    var a = 21-x;
    var b = 21-y
    if(a>b && b>=0 ){
        return y;
    }
    if(a<b && a>=0) {
        return x;
    }
    if(x>21 && y>21){
        return 0;
    }
    if(a>b && b<0 && a>0){
        return x;
    }
    if(a<b && b>0 && a<0){
        return y;
    }
}

function loneSum(x,y,z){
    if(x != y && y != z && z!= x){
        return x+y+z;
    }
    if(x==y && y!=z){
        return z;
    }
    if(y==z && z!=x){
        return x;
    }
    if(z==x && x!=y){
        return y;
    }
    if(x==y && y==z ){
        return 0
    }
}

function tester() {

    document.getElementById("output0").innerHTML = sleep_in(true, true);
    document.getElementById("output1").innerHTML = monkey_trouble(false, false);
    document.getElementById("output2").innerHTML = string_times('HiBruh', 5);
    document.getElementById("output3").innerHTML = front_times('Disjaban', 5);
    document.getElementById("output4").innerHTML = string_bits('lolololololol', 5);
    document.getElementById("output5").innerHTML = front_times('Jumanji');
    document.getElementById("output6").innerHTML = caughtSpeeding(87, true);
    document.getElementById("output7").innerHTML = fizzString(15);
    document.getElementById("output8").innerHTML = teaParty(10,100000);
    document.getElementById("output9").innerHTML = blackjack(20, 22);
    document.getElementById("output10").innerHTML =loneSum(3,2,3);

}