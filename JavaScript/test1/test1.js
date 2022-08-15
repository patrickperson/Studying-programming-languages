let counter=0;
function timeout(){
    setTimeout(function (){
        console.log('waited 2s '+counter++);
        //using recursive to call function again
        timeout();
    //setting second parameter (2s) of setTimeout (internal js function)
    },2000);
}

//initialize function
timeout();
//interrupt with ctrl+c;

(function(){
    console.log('Immediately invoked Function Expression');
})()
