export default (state,action) =>{

    switch (action.type) {
        case "ADD_COMMENT":
            console.log("inside reducer",action.payload)
            let commentToBeAdded = action.payload.comment;

            state = [...state,commentToBeAdded];
            return state;
                
        default:
            return state;
    }

}