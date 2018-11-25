import BigNumber from 'bignumber.js'

const getMaxValue = (size) => {
    return new BigNumber(2).pow(size)
}

export {getMaxValue}