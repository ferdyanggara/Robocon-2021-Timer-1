const initialState = {
    numberOfArrows: 0,
    arrows: {
        RLeft: [],
        RRight: [],
        RTop: [],
        RBottom: [],
        RCenter: [],
        BLeft: [],
        BRight: [],
        BTop: [],
        BBottom: [],
        BCenter: [],
    },
    alert: [],
}

const arrowTemplate = (arrow, currentTime) => {
    return ({
        arrow: arrow,
        time: currentTime
    })
}

const arrowReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ARROW": {
            //there should be a better way
            //a 2d array allow the data to be more dynamic, ask him
            console.log("Arrow addition called")
            const { arrow, barrel, time } = action.payload;
            const newArrow = arrowTemplate(arrow + 1, time);
            let newObject = {};
            let newArray = [];
            switch (barrel) {
                case "RLeft":
                    newArray = [...state.arrows.RLeft, newArrow];
                    newObject = { ...state.arrows, RLeft: newArray }
                    break;
                case "RRight":
                    newArray = [...state.arrows.RRight, newArrow];
                    newObject = { ...state.arrows, RRight: newArray }
                    break;
                case "RTop":
                    newArray = [...state.arrows.RTop, newArrow];
                    newObject = { ...state.arrows, RTop: newArray }
                    break;
                case "RBottom":
                    newArray = [...state.arrows.RBottom, newArrow];
                    newObject = { ...state.arrows, RBottom: newArray }
                    break;
                case "RCenter":
                    newArray = [...state.arrows.RCenter, newArrow];
                    newObject = { ...state.arrows, RCenter: newArray }
                    break;
                case "BLeft":
                    newArray = [...state.arrows.BLeft, newArrow];
                    newObject = { ...state.arrows, BLeft: newArray }
                    break;
                case "BRight":
                    newArray = [...state.arrows.BRight, newArrow];
                    newObject = { ...state.arrows, BRight: newArray }
                    break;
                case "BTop":
                    newArray = [...state.arrows.BTop, newArrow];
                    newObject = { ...state.arrows, BTop: newArray }
                    break;
                case "BBottom":
                    newArray = [...state.arrows.BBottom, newArrow];
                    newObject = { ...state.arrows, BBottom: newArray }
                    break;
                case "BCenter":
                    newArray = [...state.arrows.BCenter, newArrow];
                    newObject = { ...state.arrows, BCenter: newArray }
                    break;
                default:
                    break;
            }
            // console.log({
            //     numberOfArrows: state.numberOfArrows + 1,
            //     arrows: newObject
            // });
            return ({
                ...state,
                numberOfArrows: state.numberOfArrows + 1,
                arrows: newObject
            });
        }
        // case "DELETE_ARROW": {
        //     //2d array also can play in this part
        //     const { barrel } = action.payload;
        //     let newObject = {};
        //     let newArray = [];
        //     // console.log(barrel);
        //     switch (barrel) {
        //         case 1:
        //             newArray = state.arrows.RLeft.filter((value, index, array) => index < array.length - 1);
        //             // console.log(newArray);
        //             newObject = { ...state.arrows, RLeft: newArray };
        //             break;
        //         case 2:
        //             newArray = state.arrows.one.filter((value, index, array) => index < array.length - 1);
        //             newObject = { ...state.arrows, two: newArray };
        //             break;
        //         default:
        //             break;
        //     }
        //     // console.log({
        //     //     numberOfArrows: state.numberOfArrows - 1,
        //     //     arrows: newObject
        //     // });
        //     return ({
        //         numberOfArrows: state.numberOfArrows - 1,
        //         arrows: newObject
        //     });
        // }
        default: {

            return state;
        }
    }
}

export default arrowReducer;