export const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_fName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_lName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_country",
        type: "string",
      },
      {
        internalType: "string",
        name: "_bio",
        type: "string",
      },
    ],
    name: "addProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllProfiles",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "fName",
            type: "string",
          },
          {
            internalType: "string",
            name: "lName",
            type: "string",
          },
          {
            internalType: "string",
            name: "country",
            type: "string",
          },
          {
            internalType: "string",
            name: "bio",
            type: "string",
          },
        ],
        internalType: "struct Freelance.Profile[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "profiles",
    outputs: [
      {
        internalType: "string",
        name: "fName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lName",
        type: "string",
      },
      {
        internalType: "string",
        name: "country",
        type: "string",
      },
      {
        internalType: "string",
        name: "bio",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const DF_CONTRACT_ADDRESS = "0x3CfaF4ab683E11B1fC4e348838E480c9159aFD4D";
