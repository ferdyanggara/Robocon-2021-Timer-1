const initialState = {
    numberOfArrows: 0,
    redArrows:{
        arrow: 0,
        RLeft: [],
        RRight: [],
        RTop: [],
        RBottom: [],
        RCenter: []
    },
    blueArrows : {
        arrow : 0,
        BLeft: [],
        BRight: [],
        BTop: [],
        BBottom: [],
        BCenter: []
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
            const { arrow, barrel, time, type } = action.payload;
            //fix this too
            const newArrow = arrowTemplate(type === "RED"? state.redArrows.arrow + 1: state.blueArrows.arrow + 1, time);
            let newObject = {};
            let newArray = []; //redundant
            console.log("READING TYPE ", type)
            if(type == "RED"){
                switch (barrel) {
                    case "RLeft":
                        newArray = [...state.redArrows.RLeft, newArrow];
                        newObject = { ...state.redArrows, RLeft: newArray , arrow : state.redArrows.arrow + 1};
                        break;
                    case "RRight":
                        newArray = [...state.redArrows.RRight, newArrow];
                        newObject = { ...state.redArrows, RRight: newArray,  arrow : state.redArrows.arrow + 1 };
                        break;
                    case "RTop":
                        newArray = [...state.redArrows.RTop, newArrow];
                        newObject = { ...state.redArrows, RTop: newArray, arrow : state.redArrows.arrow + 1 };
                        break;
                    case "RBottom":
                        newArray = [...state.redArrows.RBottom, newArrow];
                        newObject = { ...state.redArrows, RBottom: newArray,  arrow : state.redArrows.arrow + 1 };
                        break;
                    case "RCenter":
                        newArray = [...state.redArrows.RCenter, newArrow];
                        newObject = { ...state.redArrows, RCenter: newArray, arrow : state.redArrows.arrow + 1 };
                        break;
                    default:
                        break;
                }
                return ({
                    ...state,
                    numberOfArrows: state.numberOfArrows + 1,
                    redArrows: newObject,
                })
            }
            else{
                switch (barrel) {
                    case "BLeft":
                        newArray = [...state.blueArrows.BLeft, newArrow];
                        newObject = { ...state.blueArrows, BLeft: newArray, arrow : state.blueArrows.arrow + 1  };
                        break;
                    case "BRight":
                        newArray = [...state.blueArrows.BRight, newArrow];
                        newObject = { ...state.blueArrows, BRight: newArray, arrow : state.blueArrows.arrow + 1  };
                        break;
                    case "BTop":
                        newArray = [...state.blueArrows.BTop, newArrow];
                        newObject = { ...state.blueArrows, BTop: newArray, arrow : state.blueArrows.arrow + 1  };
                        break;
                    case "BBottom":
                        newArray = [...state.blueArrows.BBottom, newArrow];
                        newObject = { ...state.blueArrows, BBottom: newArray, arrow : state.blueArrows.arrow + 1  };
                        break;
                    case "BCenter":
                        newArray = [...state.blueArrows.BCenter, newArrow];
                        newObject = { ...state.blueArrows, BCenter: newArray, arrow : state.blueArrows.arrow + 1  };
                        break;
                    default:
                        break;
                }
                return ({
                    ...state,
                    numberOfArrows: state.numberOfArrows + 1,
                    blueArrows: newObject,
                })
            }
            // return ({
            //     ...state,
            //     numberOfArrows: state.numberOfArrows + 1,
            //     arrows: newObject
            // });
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

