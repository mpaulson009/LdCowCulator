
let estimate = document.getElementById('calculateButton');

function movingCalculation()
{
    let milePrice;
    let range;
    let numOfTrucks = parseInt((document.getElementById('numOfTrucks')).value);
    let numOfMiles = parseInt((document.getElementById('numOfMiles')).value);
    //let numOfMovers = parseInt((document.getElementById('numOfMovers')).value);
    let monthMoving = parseFloat((document.getElementById('monthMoving')).value);
   
    if(numOfTrucks > 1){
        milePrice = 10.69; //average calcualted through sales team numbers
        if(numOfMiles < 750){
            range = 500;
        }
        else if(numOfMiles >= 750 && numOfMiles < 2000){
            range = 1000;
        }
        else{
            range = 1800;
        }
    }
    else{
        milePrice = 6.94; //average calculated though sales team numbers
        if(numOfMiles < 1500){
            range = 500;
        }
        else if(numOfMiles >= 1500 && numOfMiles <= 1750){
            range = 1000;
        }
        else{
            range = 2500;
        }
    }

    

    let price = Math.floor(milePrice * numOfMiles * monthMoving);

    document.getElementById('lowPrice').innerHTML = price - range;
    document.getElementById('highPrice').innerHTML = price + range;
}

estimate.onclick = movingCalculation;