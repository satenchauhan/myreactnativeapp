
const UpdateAction = (name) =>{
    return{
        type: 'CHANGE_NAME',
        payload: name
    }
}


export default UpdateAction;