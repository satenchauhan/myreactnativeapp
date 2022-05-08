
const myState = {
    name:'Saten',
    city: 'Florence',
    country: 'Italy',
    favourites:['Rolex ', 'BMW ', 'Firenze ', 'JungleBook '],
}


const reducer = (state=myState, action) =>{
    if(action.type === 'CHANGE_NAME'){
        return {
            ...state,
            name: action.payload
        }
    }
    return state;
}

export default reducer;