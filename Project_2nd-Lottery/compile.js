const path = require('path'), // Help build path (directory) from the current file to lottery sol file (cross platforn compatiblity)
        fs = require('fs'), //file system module (for reading contents of a file)
      solc = require('solc') // solidity compiler

const lotteryPath = path.resolve(__dirname, 'contracts', 'lottery.sol') // path of project and read contracts/Lottery.sol
const source = fs.readFileSync(lotteryPath, 'utf8')

module.exports = solc.compile(source,1).contracts[':Lottery'] //compile code of sol file
