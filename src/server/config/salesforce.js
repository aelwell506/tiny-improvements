const nforce = require('nforce');

const salesForceConnection = nforce.createConnection({
    clientId: process.env.SF_CLIENT_ID,
    clientSecret: process.env.SF_CLIENT_SECRET,
    redirectUri: 'https://login.salesforce.com/services/oauth2/success',
    mode: 'single',
    autoRefresh: true
})

const salesForceLoginInfo = {
    username: process.env.SF_USERNAME,
    password: process.env.SF_PASSWORD
}

const salesForceQueryFunction = (conn, loginInfo) => async (query) => {
    // Determine if the application is connected to the
    // salesForce server, if not, login and wait for
    // the connection to succeed
    if (!conn.oauth) {
        await conn.authenticate(loginInfo);
    }

    // Once the connection has succeeded, run the query and
    // return the results
    return conn.query({ query });
}

const createKudos = (conn, loginInfo) => async (insertObj) => {
    // Determine if the application is connected to the
    // salesForce server, if not, login and wait for
    // the connection to succeed
    if (!conn.oauth) {
        await conn.authenticate(loginInfo);
    }

    const newKudos = nforce.createSObject('Kudos__c');
    newKudos.set('Comment__c', insertObj.Comment__c);
    newKudos.set('Name', insertObj.Name);
    newKudos.set('Receiver__c', insertObj.Receiver__c);
    newKudos.set('Sender__c', insertObj.Sender__c);

    return conn.insert({ sobject: newKudos });
}

module.exports = {
    query: salesForceQueryFunction(salesForceConnection, salesForceLoginInfo),
    createKudos: createKudos(salesForceConnection, salesForceLoginInfo)
};