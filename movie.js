class Movie {
    
    constructor( title ,  studio , rating){
        this.title = title;
        this.studio= studio;
        this.rating = rating;
    };
    
    setTitle(title){
        this.title=title;
    }
    
    getTitle(){
        return this.title;
    }
    
     setStudio(studio){
        this.studio=studio;
    }
    
    getStudio(){
        return this.studio;
    }
    
     setRating(rating){
        this.rating=rating;
    }
    
    getRating(){
        return this.rating;
    }
    
    getDetails(){
        return `Movie Name:${this.getTitle()}\nProduction:${this.getStudio()}\nRating:${this.getRating()}`
    }
    
    
}

let obj1 = new Movie("Heist","Marvel","R");
console.log(obj1.getDetails())
