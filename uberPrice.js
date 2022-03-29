const baseFare=25;
const costPerMin=5;
const costPerMile=5;
const speedBoost=3;
const bookFee=12;

class uberPrice{

    constructor(rideDistance,rideTime){
        this.rideDistance=rideDistance
        this.rideTime=rideTime
    }

    getTotalFare(){
        return (baseFare + ((costPerMile*this.rideDistance)+(costPerMin*this.rideTime)*speedBoost)+bookFee);
    }
}

let price= new uberPrice(15,20);

console.log(price.getTotalFare());
