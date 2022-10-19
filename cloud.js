Moralis.Cloud.define("getTokens", async () => {
    const query = new Moralis.Query("Tokens");
    query.equalTo("token");
    const count = await query.count(); //ADDED THIS LINE
    query.limit(count); //AND ADDED THIS LINE
    const results = await query.find();
    let sum = [];
    for (let i = 0; i < results.length; ++i) { 
      await sum.push({
        "Name": results[i].get("Name"),
        "Symbol": results[i].get("Symbol"),
        "Address": results[i].get("Address"),
        "Logo": results[i].get("Logo"),
        "Type": results[i].get("Type"),
        "LastPrice": results[i].get("LastPrice"),
        "objectId": results[i].get("objectId"),
        "Chain": results[i].get("Chain"),
        "Pool": results[i].get("Pool"),
        "Description": results[i].get("Description"),
        "Website": results[i].get("Website"),
        "ProfilePic": results[i].get("ProfilePic"),
        "Pictures": results[i].get("Pictures"),
        "Video": results[i].get("Video"),
        "Announcements": results[i].get("Announcements"),
        "contractABI": results[i].get("contractABI"),  
        "contractAddress": results[i].get("contractAddress"),  
        "orders": results[i].get("orders")  
      });
    }
    return sum;
  });
  
  
  Moralis.Cloud.define("getIssues", async () => {  
    const query = new Moralis.Query("Admin");  
    query.equalTo("issue");  
    const count = await query.count(); //ADDED THIS LINE  
    query.limit(count); //AND ADDED THIS LINE  
    const results = await query.find();  
    let issues = [];  
    for (let i = 0; i < results.length; ++i) {   
      await issues.push({  
        "Email": results[i].get("Email"),  
        "Reason": results[i].get("Reason"),  
        "Message": results[i].get("Message"),  
        "objectId": results[i].get("objectId"),
      });
    }
    return issues;
  });
  
  
  Moralis.Cloud.define("getOrders", async () => {
    const query = new Moralis.Query("Orders");
    query.equalTo("order");
    const count = await query.count(); //ADDED THIS LINE
    query.limit(count); //AND ADDED THIS LINE
    const results = await query.find();  
    let orders = [];  
    for (let i = 0; i < results.length; ++i) {   
      await orders.push({  
        "exuecutionPrice": results[i].get("exuecutionPrice"),  
        "tokenName": results[i].get("tokenName"),  
        "orderAmount": results[i].get("orderAmount"),  
        "transactionFee": results[i].get("transactionFee"),  
        "address": results[i].get("address"),  
        "orderTotal": results[i].get("orderTotal"),  
        "priced": results[i].get("priced"),  
        "estimatedGas": results[i].get("objectId"),  
        "order": results[i].get("Email"),  
        "ethCost": results[i].get("Reason"),  
      });  
    }
    return issues;
  });