import { createContext, useState } from "react";

const favoritesContext = createContext();

function favoriteProvider({children}) {
    const [favorites, setFavorites] = useState([]);

    const addFavoriteProduct = id => {
        setFavorites((oldFavorites) => 
        oldFavorites.includes(id) ? oldFavorites : [...oldFavorites, id]
    )};

    const removeFavoriteProduct = id => {
        setFavorites((oldFavorites) => oldFavorites.includes(id) ? oldFavorites.filter((favoriteId) => favoriteId !== id) : oldFavorites)

// const removeFavoriteProduct = (id) => {
//   setFavorites((oldFavorites) =>
//     oldFavorites.filter((favoriteId) => favoriteId !== id) N.B.: se l’id non esiste nell’array, filter restituisce comunque l’array invariato, quindi non serve ternario.
//   )
    };

    const isFavoriteProduct = id => oldFavorites.includes(id);

    return (
        <FavoritesContext.Provider
        value={{ favorites, addFavoriteProduct, removeFavoriteProduct }}
        >
            {children}
        </FavoritesContext.Provider>
    )

}

export { FavoritesContext, FavoritesProvider };