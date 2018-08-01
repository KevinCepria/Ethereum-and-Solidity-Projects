const assert = require('assert'), // make assertion about tests
     ganache = require('ganache-cli'),// serve as local ethereum test network
        Web3 = require('web3'), //COnstructor instance of Web3
    provider = ganache.provider(),
        web3 = new Web3(provider),
{interface, bytecode} = require('../compile')

 
