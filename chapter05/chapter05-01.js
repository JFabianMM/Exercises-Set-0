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

// Here the problem is not technical, the main thing is to understand the requirements exactly.
// Well, 
// The operation is as follows:
// There are 3 separate entities: "Client" and "Bank" and "Account".

let accounts=(function () {
    let accounts = {};
    return {  
        newAccount: function(account, password){ 
            if(arguments.length!=2)                 throw new Error('Incorrect number of arguments');      
            const keyword = `${account}`; 
            if (accounts.hasOwnProperty(keyword))   throw new Error('Account number already exits');
            accounts[keyword] = {balance: 0, password: password};
        },
        deposit: function(account, deposit){
        if(deposit < 0)                             throw new Error('Negative deposits are not allowed');  
        if(arguments.length!=2)                     throw new Error('Incorrect number of arguments');
        const keyword = `${account}`;     
        if (!accounts.hasOwnProperty(keyword))      throw new Error('Account does not exist');     
        let balance= accounts[keyword].balance;     // Gets the balance of the account
        balance=balance+deposit;                    // Then, get the new balance 
        accounts[keyword].balance=balance;          // Set the new balance 
        },
        retrival: function(account, retrival, password) {
        const keyword = `${account}`;
        if (!accounts.hasOwnProperty(keyword))      throw new Error('Account does not exist'); 
        if (accounts[keyword].password!=password)   throw new Error('Incorrect password');
        if(arguments.length!=3)                     throw new Error('Incorrect number of arguments');
        if(retrival < 0)                            throw new Error('Negative retrivals are not allowed');              
        let balance= accounts[keyword].balance;     // Gets the balance of the account
        if (balance-retrival<0)                     throw new Error('Insufficient funds');      
        accounts[keyword].balance=balance-retrival; // Assign the new balance to the account
        },
        consult: function(account, password){
        if(arguments.length!=2)                     throw new Error('Incorrect number of arguments');                       
        const keyword = `${account}`; 
        if (accounts[keyword].password!=password)   throw new Error('Incorrect password');
        return accounts[keyword].balance;    
        },
        consultAll: function(){
            return accounts;    
            }
}
})();

accounts.newAccount(1, 1234);
accounts.deposit(1, 100);
accounts.retrival(1, 50, 1234);
console.log(accounts.consult(1, 1234));

// HERE the way the accounts entity works.
// This entity is managed by the bank or clients.
// There are 5 available methods: newAccount, deposit, retrival, consult, consultAll.
// To create a new account the format is: 
//     accounts.newAccount(1, 1234); where the first argument is the account number (1) and
//                             the second argument is the password.
// To make a deposit in a bank account, the format is:   
//     accounts.deposit(1, 100);  where the first argument is the account number (1) and
//                             the second argument is the money ammount (100 dlls) to be deposited.  
// To make a retrieve in a bank account, the format is:
//     accounts.retrival(1, 50, 1234);  where the first argument is the account number (1) and
//                              the second argument is the money ammount (50 dlls) to be retrieved. 
//                              the third argument is the password.
// To make a retrieve in a bank account, the format is:
//      accounts.consult(1, 1234));   where the first argument is the account number (1) and
//                             the second argument is the password.
 
let bank = (function () { 
    let clientsInformation = {};
    return {  
        newAccount: function (account, password) {
            if(arguments.length!=2)                             throw new Error('Incorrect number of arguments');
            accounts.newAccount(account, password); 
            const keyword = `${account}`;       
            clientsInformation[keyword] = {balance: 0};     
        },
        deposit: function (account, deposit) {
            if(deposit < 0)                                     throw new Error('Negative deposits are not allowed');          
            if(arguments.length!=2)                             throw new Error('Incorrect number of arguments');
            accounts.deposit(account, deposit);
            const keyword = `${account}`; 
            clientsInformation[keyword].balance = clientsInformation[keyword].balance + deposit; 
        },
        retrival: function (account, retrival, password) { 
            if(retrival < 0)                                    throw new Error('Negative retrivals are not allowed');             
            if(arguments.length!=3)                             throw new Error('Incorrect number of arguments'); 
            accounts.retrival(account, retrival, password);   
            const keyword = `${account}`; 
            clientsInformation[keyword].balance = clientsInformation[keyword].balance - retrival;
        },
        consult: function (account, password) {
            if(arguments.length!=2)                             throw new Error('Incorrect number of arguments'); 
            accounts.consult(account, password);     
            return accounts.consult(account, password);
        },
        consultAll: function () {     
            return accounts.consultAll();
        }
    }; 
})();

bank.newAccount(2,1234); 
bank.deposit(2, 100);
bank.retrival(2, 50, 1234);
console.log(bank.consult(2, 1234));

// HERE the way the bank entity works. 
// To create a new account, the format is: 
//     bank.newAccount(2,1234);    where the first argument is the account number (2) and
//                             the second argument is the password.
// To make a deposit in a bank account, the format is:   
//     bank.deposit(2,100);     where the first argument is the account number (2) and
//                             the second argument is the money ammount (100 dlls) to be deposited.  
// To make a retrieve in a bank account, the format is:
//    bank.retrival(2, 50, 1234);  where the first argument is the account number (2) and
//                              the second argument is the money ammount (50 dlls) to be retrieved. 
//                              the third argument is the password.
// To make a consult, the format is:  
//   bank.consult(2, 1234)      the first argument is the account number  (2) and 
//                              the second argument is the password.

   //************************************************************************************** */

function Client() {
        let accounts_client = {};
        accounts_client['ownPocket'] = 0;           // The "ownPocket" account born with a balance = 0.
        let openPersonalAccounts = function(account, password){  
            if(arguments.length!=2)                 throw new Error('Incorrect number of arguments');
            const keyword = `${account}`;
            if (accounts_client.hasOwnProperty(keyword))   throw new Error('Account already exists');
            accounts.newAccount(account, password);
            accounts_client[keyword] = {balance: 0, password: password};
            
         };
        let deposit = function(account, deposit){
            if(deposit < 0)                         throw new Error('Negative deposits are not allowed');  
            if(arguments.length!=2)                 throw new Error('Incorrect number of arguments');   
            const keyword = `${account}`; 
            if (account=='ownPocket'){
                let balance = accounts_client[keyword];
                accounts_client[keyword] = balance+deposit;
            }else{
                let pocketBalance= accounts_client['ownPocket'];
                if (pocketBalance<deposit) throw new Error('Insufficient funds in the ownPocket');
                accounts.deposit(account, deposit);     
                accounts_client['ownPocket']=pocketBalance-deposit;         // Set the new balance to the own pocket account
                if (accounts_client.hasOwnProperty(keyword)) {         // The account already exist in the object properties
                    accounts_client[keyword].balance = accounts.consult(keyword, accounts_client[keyword].password);
                }
             }
             return deposit;
         };
         let retrival = function(account, retrival, password) {
            const keyword = `${account}`;
            if (retrival < 0) throw new Error('Negative retrivals are not allowed');              
            if (arguments.length!=2 && arguments.length!=3) throw new Error('Incorrect number of arguments');
            if (!accounts_client.hasOwnProperty(keyword))   throw new Error('Retrival is only allowed for personal accounts');
            if (account=='ownPocket'){
                let balance= accounts_client[keyword].balance;
                if (balance<retrival)                       throw new Error('Insufficient funds in the ownPocket');
                balance=balance-retrival;
                accounts_client[keyword].balance;   
            }else{
                accounts.retrival(account, retrival, password);
                accounts_client[keyword].balance = accounts.consult(keyword, accounts_client[keyword].password);
                accounts_client['ownPocket']=accounts_client['ownPocket']+retrival;  
            }
            return retrival;  
        };
        let consult = function(account, password){
            const keyword = `${account}`;
            if (!accounts_client.hasOwnProperty(keyword))  throw new Error('Consul is only allowed for personal accounts');
            if (account=='ownPocket'){
                if(arguments.length!=1) throw new Error('Incorrect number of arguments');
                let balance = accounts_client['ownPocket'];
                return balance;
            }else{
                if(arguments.length!=2 ) throw new Error('Incorrect number of arguments');
                let balance = accounts.consult(account, password);
                return balance;
            } 
        };
    return { openPersonalAccounts, deposit, retrival, consult };
}

let client1 = new Client();
client1.openPersonalAccounts(10, 1234); 
client1.deposit('ownPocket', 1000);
client1.deposit(10, 100);
console.log(client1.consult('ownPocket'));
console.log(client1.consult(10, 1234));

let client2 = new Client();
client2.openPersonalAccounts(20, 1234); 
client2.deposit('ownPocket', 1000);
client2.deposit(10, 100);
console.log(client2.consult('ownPocket'));
console.log(client2.consult(20, 1234));

console.log(client1.consult(10, 1234));

console.log(bank.consultAll());

// HERE the way the client1 entity works
// When a new client is created, are created with two default accounts called "ownPocket" with balance "0".
// To create a personal account, the format is as follows:
//  client1.openPersonalAccounts(10, 1234);  where the first argument is the account number/name and
//                                         the second argument is the password. 
// To make a deposit in an account, the format is as follows: 
//     client1.deposit('ownPocket', 1000);  where the first argument is the account number/name and
//                                         the second argument is the money ammount (1000 dlls) to be deposited.  
// To make a retrieve, the format is:
//     client1.retrival(10, 50, 1234)  where the first argument is the account number/name and
//                                       the second argument is the money ammount (50 dlls) to be retrieved. 
//                                       the third argument is the password.
// The deposit to any account comes from the 'ownPocket' account.
// The retrival from any account goes to the 'ownPocket' account.
// The retrieve is allowed only for 'personal' accounts.
// To make a consult of the account balance, the format is:
//     client1.consult(10, 1234)  where the arguments are the account number/name and the password.


