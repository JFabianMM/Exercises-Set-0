// **************************** //
// Exercise Chapter 05 - Exercise 01 
// **************************** //

// 1. Implement the following:
//     a. A bank that holds client’s information:
//         i. account number;
//         ii. balance
//     b. A set of clients where each can:
//         i. hold money of their own;
//         ii. deposit money into the bank (to any account);
//         iii. retrieve money from the bank (from personal account only);
//         iv. view current balance in bank (from personal account only)
//     c. A client cannot deposit more money than what it has;
//     d. A client cannot retrieve more money that what is in its account;
//     e. All financial information must be private.

const prompt = require("prompt-sync")();

var bank = (function () { 
    let accounts_clients = {};
    return {  
        deposit: function (account, deposit) {
            if(deposit < 0) throw new Error('Negative deposits are not allowed');          
            if(arguments.length!=2) throw new Error('Incorrect number of arguments');        
            const keyword = `${account}`; 
            if (accounts_clients.hasOwnProperty(keyword)) {     // The account already exist in the object properties
                let balance= accounts_clients[keyword];         // Gets the balance of the account
                balance=balance+deposit;                        // Then, get the new balance 
                accounts_clients[keyword]=balance;  
            }else{                                              // The account is new (Then is created)
                accounts_clients[keyword] = deposit;            // Store the new account and balance
            }
            return deposit;     
        },
        retrival: function (account, retrival) { 
            const keyword = `${account}`; 
            if(retrival < 0) throw new Error('Negative retrivals are not allowed');             
            if(arguments.length!=2) throw new Error('Incorrect number of arguments');       // This error code means to many arguments     
            if (!accounts_clients.hasOwnProperty(keyword)) throw new Error("The account doesn't exist");  
            let balance= accounts_clients[keyword];         // Gets the balance of the account
            if (balance-retrival<0) throw new Error('Insufficient funds');  
            balance=balance-retrival;                // If the funds are ok then get the new balance
            accounts_clients[keyword]=balance;              // Assign the new balance to the account
            return retrival;    
        },
        consult: function (account) {
            const keyword = `${account}`; 
            if(arguments.length!=1) throw new Error('Incorrect number of arguments');     
            if(!accounts_clients.hasOwnProperty(keyword)) throw new Error('The account doesnt exist');  
            return accounts_clients[keyword];
        }
    }; 
})();

var bank1 = bank;
console.log(bank1.deposit(120,500)); 
console.log(bank1.retrival(120,199));
console.log(bank1.retrival(120,19));
console.log(bank1.consult(120));

// HERE the way the bank1 entity works. 
// To make a deposit in a bank account, the format is:   
//     bank.deposit(120,100);  where the first argument is the account number (120) and
//                             the second argument is the money ammount (100 dlls) to be deposited.  
// To make a retrieve in a bank account, the format is:
//     bank.retrive(120, 200);  where the first argument is the account number (120) and
//                              the second argument is the money ammount (200 dlls) to be retrieved. 
//                              Note: The negative values are not allowed.
// If the bank account do not exist, with a deposit is created.
// To make aconsult we utilize the following method:
//     bank.consult(120);       ehere the argument is the bank account

   //************************************************************************************** */

   function BankClient() {
    const password = prompt.hide("Set the password to this client: ");
    let accounts_client = {};
    accounts_client['ownPocket'] = 0;               // The "ownPocket" account born with a balance = 0.
    accounts_client['personal'] = 0;                // The "personal" account born with a balance = 0.
    let deposit = function(account, deposit){
            if(deposit < 0) throw new Error('Negative deposits are not allowed');  
            if(arguments.length!=2) throw new Error('Incorrect number of arguments');      
            const keyword = `${account}`; 
            if (account=='ownPocket'){
                accounts_client[keyword] = deposit;
            }
            if (account!='ownPocket'){
                let balance= accounts_client['ownPocket'];
                if (balance-deposit<0) throw new Error('Insufficient funds in the ownPocket account');     
                accounts_client['ownPocket']=balance-deposit;         // Set the new balance to the own pocket account
                if (accounts_client.hasOwnProperty(keyword)) {  // The account already exist in the object properties
                    let balance2= accounts_client[keyword];      // Gets the balance of the account
                    balance2=balance2+deposit;                 // Then, get the new balance 
                    accounts_client[keyword]=balance2;         // Set the new balance 
                }else{                                            // The account is new (Then is created)
                    accounts_client[keyword] = deposit;                  // Store the new account and balance
                }
             }
             return deposit;
         };
         let retrival = function(account, retrival) {
            const keyword = `${account}`;
            if(retrival < 0) throw new Error('Negative retrivals are not allowed');              
            if(arguments.length!=2) throw new Error('Incorrect number of arguments');       
            if(account!='personal')throw new Error('Retrival is only allowed fo personal account');
            let keyPassword = prompt.hide('password: ');
            if (keyPassword == password){                
                let balance= accounts_client[keyword];         // Gets the balance of the account
                if (balance-retrival<0) throw new Error('Insufficient funds');      
                accounts_client[keyword]=balance-retrival;              // Assign the new balance to the account
                accounts_client['ownPocket']=accounts_client['ownPocket']+retrival;   // Add the retrival to the ownPocket account
                return retrival;
            } else{throw new Error('Incorrect password');}   
        };
        let consult = function(account){
            const keyword = `${account}`; 
            if(arguments.length!=1) throw new Error('Incorrect number of arguments');       
            if(account!='personal' && account!='ownPocket') throw new Error('Consult only allowed for personal and ownPocket accouunt');                
            return accounts_client[keyword];    
        };
    return { deposit, retrival, consult };
}
  
let bankClient1 = new BankClient();
bankClient1.deposit('ownPocket', 1000);
console.log(bankClient1.consult('ownPocket'));
bankClient1.deposit('personal', 600);
console.log(bankClient1.consult('ownPocket'));
console.log(bankClient1.consult('personal'));
bankClient1.retrival('personal', 10);
console.log(bankClient1.consult('personal'));
console.log(bankClient1.consult('ownPocket'));    
bankClient1.deposit(45, 100);
console.log(bankClient1.consult('ownPocket'));


// HERE the way the client1 entity works
// When a new client is created, are created with two default accounts called "ownPocket" and
// a "personal" with balance "0".
// To make a deposit in a client account, the format is as follows: 
//     client1.deposit('ownPocket', 1000);  where the first argument is the account number/name and
//                                         the second argument is the money ammount (1000 dlls) to be deposited.  
// To make a retrieve, the format is:
//     client.retrive('personal', 200);  where the first argument is the account number/name and
//                                       the second argument is the money ammount (200 dlls) to be retrieved. 
//                                       Note: Only positive values for retrive
// The deposit to any account comes from the 'ownPocket' account.
// The retrieve of a 'personal' account is deposited to the 'ownPocket' account.
// The retrieve is allowed only for the 'personal' account and the retrived ammound is added to the 'ownPocket' account.
// To make a consult of the account balance, the format is:
//     client1.consult('personal');  where the argument is only the account number/name.






