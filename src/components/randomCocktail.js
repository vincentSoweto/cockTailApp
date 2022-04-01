import React from 'react'
import '../css/RandomCocktail.css'

 class RandomCocktail extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            error: null,
            isLoaded: false,
            items :[ ]
        };
    }



    componentDidMount() {
        fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.drinks
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    



      render() {
        const { error, isLoaded, items } = this.state;
        console.log(items);
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div classNanme="container " >
            
              {items.map(arrItem=>(
              //<li key={arrItem.idDrink}>{arrItem.strDrink}</li>
              
              <center>
                <h1>Cocktails</h1>
                
                    <div>
                    <h2>{arrItem.strDrink}</h2>
                    <span>Alternative Cocktail:{arrItem.strDrinkAlternative==null ? " None" : arrItem.strDrinkAlternative } </span><br/>
                    <span> Category:{arrItem.strCategory==null ? " None" : arrItem.strCategory} </span><br/>
                    <span>Alcoholic:{arrItem.strAlcoholic ? " None" : arrItem.strAlcoholic } </span><br/>
                    <img src={arrItem.strDrinkThumb} alt="Drink THumb" width="30%" height="40%"/>
                   
                    <br/>
                    
                    <h4>Ingredients</h4>
                    <p> {arrItem.strIngredient1==null ? null : arrItem.strIngredient1} </p>
                    <span> {arrItem.strIngredient2==null ? null : arrItem.strIngredient2} </span><br/>
                    <span> {arrItem.strIngredient3==null ? null : arrItem.strIngredient3} </span><br/>
                    <span> {arrItem.strIngredient4==null ? null : arrItem.strIngredient4} </span><br/>
                    <span> {arrItem.strIngredient5==null ? null : arrItem.strIngredient5} </span><br/>
                    <span> {arrItem.strIngredient6==null ? null : arrItem.strIngredient6} </span><br/>
                    <span> {arrItem.strIngredient7==null ? null : arrItem.strIngredient7} </span><br/>
                    <span> {arrItem.strIngredient8==null ? null : arrItem.strIngredient8} </span><br/>
                    <span> {arrItem.strIngredient9==null ? null : arrItem.strIngredient9} </span><br/>
                    <span> {arrItem.strIngredient10==null ? null : arrItem.strIngredient10} </span><br/>
                    <span> {arrItem.strIngredient11==null ? null : arrItem.strIngredient11} </span><br/>
                    <span> {arrItem.strIngredient12==null ? null : arrItem.strIngredient12} </span><br/>
                    <span> {arrItem.strIngredient13==null ? null : arrItem.strIngredient13} </span><br/>
                    <span> {arrItem.strIngredient14==null ? null : arrItem.strIngredient14} </span><br/>
                    <span> {arrItem.strIngredient15==null ? null : arrItem.strIngredient15} </span><br/>


                    <br/>
                    <h4>Measurements</h4>
                    <span> {arrItem.strMeasure1==null ? null : arrItem.strMeasure1} </span><br/>
                    <span> {arrItem.strMeasure2==null ? null : arrItem.strMeasure2} </span><br/>
                    <span> {arrItem.strMeasure3==null ? null : arrItem.strMeasure3} </span><br/>
                    <span> {arrItem.strMeasure4==null ? null : arrItem.strMeasure4} </span><br/>
                    <span> {arrItem.strMeasure5==null ? null : arrItem.strMeasure5} </span><br/>
                    <span> {arrItem.strMeasure6==null ? null : arrItem.strMeasure6} </span><br/>
                    <span> {arrItem.strMeasure7==null ? null : arrItem.strMeasure7} </span><br/>
                    <span> {arrItem.strMeasure8==null ? null : arrItem.strMeasure8} </span><br/>
                    <span> {arrItem.strMeasure9==null ? null : arrItem.strMeasure9} </span><br/>
                    <span> {arrItem.strMeasure10==null ? null : arrItem.strMeasure10} </span><br/>
                    <span> {arrItem.strMeasure11==null ? null : arrItem.strMeasure11} </span><br/>
                    <span> {arrItem.strMeasure12==null ? null : arrItem.strMeasure12} </span><br/>
                    <span> {arrItem.strMeasure13==null ? null : arrItem.strMeasure13} </span><br/>
                    <span> {arrItem.strMeasure14==null ? null : arrItem.strMeasure14} </span><br/>
                    <span> {arrItem.strMeasure15==null ? null : arrItem.strMeasure15} </span><br/>

                    <br/>
                    <h4>Instruction</h4>
                    <span> {arrItem.strInstructions==null ? " None" : arrItem.strInstructions} </span><br/>


                    <ul>
                    </ul>
                    </div>
               
                </center>
              
              ))}
                  
            
                {/* <center>
                <h1>Cocktails</h1>
                
            items.forEach(function(arrItem){
                    <div>
                    <h2>arrItem.strDrink</h2>
                    <span>ALternative Cocktail:{arrItem.strDrinkAlternative==null ? " None" : arrItem.strDrinkAlternative } </span><br/>
                    <span> Category:{arrItem.strCategory==null ? " None" : arrItem.strCategory} </span><br/>
                    <span>Alcoholic:{arrItem.strAlcoholic ? " None" : arrItem.strAlcoholic } </span><br/>
                    <img src={arrItem.strThumb} alt="Drink THumb"/>
                   
                    
                  
                    <br/>
                    
                    <h4>Ingredients</h4>
                    <p> {arrItem.strIngredient1==null ? null : arrItem.strIngredient1} </p>
                    <span> {arrItem.strIngredient2==null ? null : arrItem.strIngredient2} </span><br/>
                    <span> {arrItem.strIngredient3==null ? null : arrItem.strIngredient3} </span><br/>
                    <span> {arrItem.strIngredient4==null ? null : arrItem.strIngredient4} </span><br/>
                    <span> {arrItem.strIngredient5==null ? null : arrItem.strIngredient5} </span><br/>
                    <span> {arrItem.strIngredient6==null ? null : arrItem.strIngredient6} </span><br/>
                    <span> {arrItem.strIngredient7==null ? null : arrItem.strIngredient7} </span><br/>
                    <span> {arrItem.strIngredient8==null ? null : arrItem.strIngredient8} </span><br/>
                    <span> {arrItem.strIngredient9==null ? null : arrItem.strIngredient9} </span><br/>
                    <span> {arrItem.strIngredient10==null ? null : arrItem.strIngredient10} </span><br/>
                    <span> {arrItem.strIngredient11==null ? null : arrItem.strIngredient11} </span><br/>
                    <span> {arrItem.strIngredient12==null ? null : arrItem.strIngredient12} </span><br/>
                    <span> {arrItem.strIngredient13==null ? null : arrItem.strIngredient13} </span><br/>
                    <span> {arrItem.strIngredient14==null ? null : arrItem.strIngredient14} </span><br/>
                    <span> {arrItem.strIngredient15==null ? null : arrItem.strIngredient15} </span><br/>


                    <br/>
                    <h4>Measurements</h4>
                    <span> {arrItem.strMeasure1==null ? null : arrItem.strMeasure1} </span><br/>
                    <span> {arrItem.strMeasure2==null ? null : arrItem.strMeasure2} </span><br/>
                    <span> {arrItem.strMeasure3==null ? null : arrItem.strMeasure3} </span><br/>
                    <span> {arrItem.strMeasure4==null ? null : arrItem.strMeasure4} </span><br/>
                    <span> {arrItem.strMeasure5==null ? null : arrItem.strMeasure5} </span><br/>
                    <span> {arrItem.strMeasure6==null ? null : arrItem.strMeasure6} </span><br/>
                    <span> {arrItem.strMeasure7==null ? null : arrItem.strMeasure7} </span><br/>
                    <span> {arrItem.strMeasure8==null ? null : arrItem.strMeasure8} </span><br/>
                    <span> {arrItem.strMeasure9==null ? null : arrItem.strMeasure9} </span><br/>
                    <span> {arrItem.strMeasure10==null ? null : arrItem.strMeasure10} </span><br/>
                    <span> {arrItem.strMeasure11==null ? null : arrItem.strMeasure11} </span><br/>
                    <span> {arrItem.strMeasure12==null ? null : arrItem.strMeasure12} </span><br/>
                    <span> {arrItem.strMeasure13==null ? null : arrItem.strMeasure13} </span><br/>
                    <span> {arrItem.strMeasure14==null ? null : arrItem.strMeasure14} </span><br/>
                    <span> {arrItem.strMeasure15==null ? null : arrItem.strMeasure15} </span><br/>


                    <br/>
                    <h4>Instruction</h4>
                    <span> {arrItem.strInstructions==null ? " None" : arrItem.strInstructions} </span><br/>


                    <ul>
                    </ul>
                    </div>
                });
                </center> */}
            </div>
                       );
        }

        // 
        // 
        // element => {
        //     element.map(item => (
        //       <li key={element.idDrink}>
        //         {element}
        //       </li>
        //     ))}
        // }
        // 
        // 

      }
}

export default RandomCocktail;