const ADD_ARROW = "ADD_ARROW"
const DELETE_ARROW = "DELETE_ARROW"
//dont forget to edit it out
const AddingArrowAction = (barrelNo, arrow, currentTime, arrowType) => {
    return({
        type : ADD_ARROW,
        payload : {
            barrel : barrelNo,
            arrow : arrow,
            time : currentTime,
            type : arrowType
        }
    })
}

const DeletingArrowAction = (idNo, barrelType) => {
    //i feel like I could just remove the end on it
    return({
        type: DELETE_ARROW,
        payload : {
            global : idNo,
            barrel : barrelType
        }
    })
}

export {AddingArrowAction, DeletingArrowAction}