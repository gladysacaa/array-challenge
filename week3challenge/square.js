function squarefuncntion(){
    console.log("Enter number less than 16:");
    process.stdin.once('data', (number)=>{
    
        result = number*number
        if (number>15){
            console.log("oops try again ");
        }else{
            let myproperty = {
    
                name: number,
                value: result,
            }
            console.log("The value of the square of " + myproperty.name + "is " + myproperty.value);
            
        }
     
    })
    }
    console.log(squarefunction());