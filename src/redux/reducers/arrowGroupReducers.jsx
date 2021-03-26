const initialState = {
    numberOfArrows:0,
    arrows : {
        one : [],
        two : [],
    }
}

const arrowTemplate = (arrow ,currentTime) => {
    return ({
        arrow : arrow,
        time : currentTime
    })
}

const arrowReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_ARROW":{
            //there should be a better way
            //a 2d array allow the data to be more dynamic, ask him
            console.log("Arrow addition called")
            const {arrow, barrel, time} = action.payload;
            const newArrow = arrowTemplate(arrow, time);
            let newObject = {};
            let newArray = [];
            switch(barrel){
                case 1:
                    newArray = [...state.arrows.one, newArrow];
                    newObject = {...state.arrows, one : newArray}
                    break;
                case 2:
                    newArray = [...state.arrows.two, newArrow];
                    newObject = {...state.arrows, two : newArray}
                    break;
                default:
                    break;
            }
            console.log({
                numberOfArrows: state.numberOfArrows + 1,
                arrows : newObject
            });
            return ({
                numberOfArrows: state.numberOfArrows + 1,
                arrows : newObject
            });
        }
        case "DELETE_ARROW":{
            //2d array also can play in this part
            const {barrel} = action.payload;
            let newObject = {};
            let newArray = [];
            console.log(barrel);
            switch(barrel){
                case 1:
                    newArray = state.arrows.one.filter((value, index, array) => index < array.length - 1);
                    console.log(newArray);
                    newObject = {...state.arrows, one : newArray};
                    break;
                case 2:
                    newArray = state.arrows.one.filter((value, index, array) => index < array.length - 1);
                    newObject = {...state.arrows, two : newArray};
                    break;
                default:
                    break;
            }
            console.log({
                numberOfArrows: state.numberOfArrows - 1,
                arrows : newObject
            });
            return ({
                numberOfArrows: state.numberOfArrows - 1,
                arrows : newObject
            });
        }   
        default : {
            
            return state;
        }
    }
}

export default arrowReducer;