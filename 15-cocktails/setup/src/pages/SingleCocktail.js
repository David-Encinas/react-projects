
import React, { useState, useContext, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(false);

  useEffect(()=> {
    setLoading(true);
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink:name,
            strDrinkThumb:image,
            strAlcoholic:info,
            strCategory: category,
            strGlass:glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16
          ]
          const newCocktail = {
            name, image, info, category, glass, instructions, ingredients
          }
          setCocktail(newCocktail);
        } else {
          setCocktail(null)
        }
        setLoading(false);
        
      } catch (error) {
        console.log(error);
        setLoading(false);
      }      
    }
    getCocktail()
  }, [id])

  if (loading) { return <Loading />};
  if (!cocktail) { return <h2 className='section-title'>no cocktail to display</h2> }
  const {name, image, info, category, glass, instructions, ingredients} = cocktail;
  return (
    <section className="section cocktail-section">
      <Link to='/' className='btn btn-primary'>back home</Link>
        <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p><span className="drink-data">name: </span>{name}</p>
          <p><span className="drink-data">category: </span>{category}</p>
          <p><span className="drink-data">info: </span>{info}</p>
          <p><span className="drink-data">glass: </span>{glass}</p>
          <p><span className="drink-data">instructions: </span>{instructions}</p>          
          <p><span className="drink-data">ingredients: </span></p>{ingredients.map((item, index) => {
            return item ? <span key={index}>{item}</span> : '';
          })}
        </div>        
      </div>
    </section>
  )
}

export default SingleCocktail
