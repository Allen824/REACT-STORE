export const countState = [
    {
        name: "Orange",
        OriginalCount: 5,
        count: 5,
        price: 3
    },
    {
        name: "Apple",
        OriginalCount: 7,
        count: 7,
        price: 2
    },
    {
        name: "Pear",
        OriginalCount: 5,
        count: 5,
        price: 4
    },
    {
        name: "Watermelon",
        OriginalCount: 5,
        count: 5,
        price: 10
    },
    {
        name: "Peach",
        OriginalCount: 9,
        count: 9,
        price: 3
    },
    {
        name: "Banana",
        OriginalCount: 10,
        count: 10,
        price: 7
    }
]

export const initialBalance = 30

export const myMoney = 30

export const countReducer = (state = countState, action) => {
    switch (action.type) {
        case "DECREASE": {
            return state.map((value, i) => {
                if(action.payload === i) {
                    if(action.money - value.price >= 0) {
                        const newValue = value.count - 1;
                        const myObject = Object.assign({}, state[i], {count: newValue})
                        return myObject;
                    }
                    else {
                        return value
                    }
                }
                return value
            });
        }
        case "INCREASE": {
            return state.map((value, i) => {
                if(action.payload === i) {
                    const newValue = value.count + 1
                    const myObject = Object.assign({}, state[i], {count: newValue})
                    return myObject
                }
                return value
            });
        }
        default:
            return state;   
    }
}

export const moneyReducer = (state = myMoney, action) => {
    switch (action.type) {
        case "TAKE": {
            const newValue = state - action.payload;
            if(newValue >= 0) {
                return newValue; 
            }
            else {
                return state
            }
        }
        case "GIVE": {
            return state + action.payload
        }
        default: {
            return state;
        }
    }
}

export const initialReducer = (state = initialBalance) => {
    return state
}

