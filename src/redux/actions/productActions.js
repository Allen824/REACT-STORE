export const decCount = (id, money) => {
    return {
        type: "DECREASE",
        payload: id,
        money: money
    }

};

export const incCount = (id) => {
    return {
        type: "INCREASE",
        payload: id,
    }
}

export const moneyDec = (price) => {
    return {
        type: "TAKE",
        payload: price
    }
}

export const moneyInc = (price) => {
    return {
        type: "GIVE",
        payload: price
    }
}

