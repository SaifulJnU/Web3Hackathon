
import web3 from './web3';

const address = '0x74d3b90a07b20220804b99325f83186aFf10A220';
const abi = [
   {
      "inputs":[],
      "stateMutability":"nonpayable",
      "type":"constructor",
      "signature":"constructor"
   },
   {
      "inputs":[
         {
            "internalType":"bool",
            "name":"_status",
            "type":"bool"
         }
      ],
      "name":"completionStatus",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function",
      "signature":"0x67a5a909"
   },
   {
      "inputs":[
         
      ],
      "name":"courseName",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "stateMutability":"view",
      "type":"function",
      "constant":true,
      "signature":"0x9553de4e"
   },
   {
      "inputs":[
         
      ],
      "name":"enrollCourse",
      "outputs":[
         
      ],
      "stateMutability":"payable",
      "type":"function",
      "payable":true,
      "signature":"0x26c943be"
   },
   {
      "inputs":[
         
      ],
      "name":"getRefund",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function",
      "signature":"0xb2d5ae44"
   },
   {
      "inputs":[
         
      ],
      "name":"getStudents",
      "outputs":[
         {
            "internalType":"address payable[]",
            "name":"",
            "type":"address[]"
         }
      ],
      "stateMutability":"view",
      "type":"function",
      "constant":true,
      "signature":"0xf1d064b3"
   },
   {
      "inputs":[
         
      ],
      "name":"index",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function",
      "constant":true,
      "signature":"0x2986c0e5"
   },
   {
      "inputs":[
         
      ],
      "name":"owner",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function",
      "constant":true,
      "signature":"0x8da5cb5b"
   },
   {
      "inputs":[
         
      ],
      "name":"price",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function",
      "constant":true,
      "signature":"0xa035b1fe"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "name":"studentAdd",
      "outputs":[
         {
            "internalType":"address payable",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function",
      "constant":true,
      "signature":"0x3453741a"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "name":"studentStatus",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "stateMutability":"view",
      "type":"function",
      "constant":true,
      "signature":"0x097b009a"
   }
];

export default new web3.eth.Contract(abi, address);
