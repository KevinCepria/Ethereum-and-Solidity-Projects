const HDWalletProvider = require('truffle-hdwallet-provider'),
                  Web3 = require('web3'),
 {interface, bytecode} = require('./compile') 

const provider = new HDWalletProvider(
    'prison snow blush ability evolve screen report salt elephant artwork diamond say',
    'https://rinkeby.infura.io/v3/f946fc59a7c6401fabc0ebb27a05f13d'
  )
  
const web3 = new Web3(provider)

const deploy = async() =>{
    
    const accounts = await web3.eth.getAccounts();
    
    console.log('Attempting to deploy from account', accounts[0])
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:'0x'+bytecode})
        .send({from: accounts[0]})
    
    console.log(interface)
    console.log('Contract deployed to ',result.options.address)
}

deploy()