const ADD_ARROW = "ADD_ARROW"
const DELETE_ARROW = "DELETE_ARROW"

const AddingArrowAction = (barrelNo, idNo, currentTime) => {
    return({
        type : ADD_ARROW,
        payload : {
            barrel : barrelNo,
            id : idNo,
            time : currentTime
        }
    })
}

const DeletingArrowAction = (idNo) => {
    //i feel like I could just remove the end on it
    return({
        type: DELETE_ARROW,
        payload : {
            id : idNo,
        }
    })
}

export {AddingArrowAction, DeletingArrowAction}