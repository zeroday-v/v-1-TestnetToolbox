export const bridgeAbi = [
    {
      "inputs": [],
      "name": "B_DENIED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_DENIED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_ERC20_CANNOT_RECEIVE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_EV_DO_NOT_BURN",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_EV_NOT_AUTHORIZED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_EV_PARAM",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_FAILED_TRANSFER",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_FORBIDDEN",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_FORBIDDEN",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_GAS_LIMIT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_GAS_LIMIT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_INCORRECT_VALUE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_INCORRECT_VALUE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_INIT_PARAM_ERROR",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_HASH_NULL",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_HASH_NULL",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_NON_RETRIABLE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_NON_RETRIABLE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_NOT_FAILED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_NOT_FAILED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_RECALLED_ALREADY",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_MSG_RECALLED_ALREADY",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_NULL_APP_ADDR",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_SIGNAL_NOT_RECEIVED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_SIGNAL_NOT_RECEIVED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_STATUS_MISMATCH",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_STATUS_MISMATCH",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_USER_IS_NULL",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_USER_IS_NULL",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_CHAIN_ID",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_CHAIN_ID",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_CHAIN_ID",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_CHAIN_ID",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_TO_ADDRESS",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_WRONG_TO_ADDRESS",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "B_ZERO_SIGNAL",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RESOLVER_DENIED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RESOLVER_INVALID_ADDR",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        }
      ],
      "name": "RESOLVER_ZERO_ADDR",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "addressManager",
          "type": "address"
        }
      ],
      "name": "AddressManagerChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "DestChainEnabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "MessageRecalled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "MessageRecalled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "indexed": false,
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        }
      ],
      "name": "MessageSent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "indexed": false,
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        }
      ],
      "name": "MessageSent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "enum LibBridgeStatus.MessageStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "transactor",
          "type": "address"
        }
      ],
      "name": "MessageStatusChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "enum LibBridgeStatus.MessageStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "transactor",
          "type": "address"
        }
      ],
      "name": "MessageStatusChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "SignalSent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "addressManager",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "context",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "msgHash",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            }
          ],
          "internalType": "struct IBridge.Context",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "getMessageStatus",
      "outputs": [
        {
          "internalType": "enum LibBridgeStatus.MessageStatus",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "getMessageStatusSlot",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        }
      ],
      "name": "hashMessage",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addressManager",
          "type": "address"
        }
      ],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_chainId",
          "type": "uint256"
        }
      ],
      "name": "isDestChainEnabled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "destChainId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "isMessageFailed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "isMessageRecalled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "srcChainId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "isMessageReceived",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "isMessageSent",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "processMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "recallMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "allowZeroAddress",
          "type": "bool"
        }
      ],
      "name": "resolve",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "addr",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "allowZeroAddress",
          "type": "bool"
        }
      ],
      "name": "resolve",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "addr",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        },
        {
          "internalType": "bool",
          "name": "isLastAttempt",
          "type": "bool"
        }
      ],
      "name": "retryMessage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "srcChainId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "destChainId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "refundTo",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "gasLimit",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "memo",
              "type": "string"
            }
          ],
          "internalType": "struct IBridge.Message",
          "name": "message",
          "type": "tuple"
        }
      ],
      "name": "sendMessage",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newAddressManager",
          "type": "address"
        }
      ],
      "name": "setAddressManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
]
export const fabric = [
  {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [],
    "name": "createContracts",
    "inputs": [
      {
        "type": "uint256",
        "name": "numberOfContracts",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address payable"
      }
    ],
    "name": "owner",
    "inputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "name": "userToContracts",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "withdrawFromContract",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      }
    ]
  }
]