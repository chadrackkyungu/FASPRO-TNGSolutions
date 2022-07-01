{
    const btn = document.getElementById("example"); //select the DOM


    //Add a Click Event
    btn.addEventListener("click", () => {
            const output = example(5,5);  console.log(output);
            const otp = example2(20, 4);  console.log(otp);
      } 
    ) 


    {
        //RETRUNNING A VALUE TO A FUNCTION
        const example = (x1, x2) => {
            return x1 * x2;
        }

        const example2 = (x1, x2) =>{
            return (x1 + x2 + x1) / 2;
        }
    }
    
   

    {
        // passing an object as paramater to a function
        var mycar = { //Object
            make: 'Honda',
            model: 'accord',
            year: 1234
        }

        var x, y

        x = mycar.make


        const example1 = (object) =>{
            object.make = "Honda"
        }

        example1(mycar)

        y = mycar.make

        console.log(x);
        console.log(y);
    }

    {
        const person = {
            name: "john",
            id: 12,
            val_1: 35,
            val_2 : 5,
            userDet : function(){
                return "Name : " + this.name + " ID : " + this.id
            },
            calculation : function(){
                return this.val_1 * this.val_2
            }

        }
        name = person.userDet(); //=> Name : john ID : 12
        result = person.calculation();
        console.log(result);
    }

   
}