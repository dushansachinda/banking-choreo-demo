export const CONFIG = {
    CHOREO_TOKEN_URL: window.env.CHOREO_SERVER_URL + "/oauth2/token",
    CHOREO_APP_CONSUMER_KEY: window.env.CHOREO_APP_CONSUMER_KEY,
    CHOREO_APP_CONSUMER_SECRET: window.env.CHOREO_APP_CONSUMER_SECRET,
    CHOREO_ACCOUNT_SERVICE_CONSUMER_KEY: window.env.CHOREO_ACCOUNT_SERVICE_CONSUMER_KEY,
    CHOREO_ACCOUNT_SERVICE_SECRET: window.env.CHOREO_ACCOUNT_SERVICE_SECRET,
    CHOREO_CONSENT_SERVICE_CONSUMER_KEY: window.env.CHOREO_CONSENT_SERVICE_CONSUMER_KEY,
    CHOREO_CONSENT_SERVICE_SECRET: window.env.CHOREO_CONSENT_SERVICE_SECRET,
    CHOREO_URL_AUTHORIZATION_API: window.env.CHOREO_API_HOST + "/authorizationapi-mjp/1.0.0/authorize",
    CHOREO_URL_USER_ACCESS_TOKEN_API: window.env.CHOREO_API_HOST + "/useraccesstokenapi-cpl/1.0.0/userAccessToken",
    CHOREO_URL_OPEN_BANKING_API: window.env.CHOREO_API_HOST + "/accountsandtransactionapi-ezz/1.0.0/accountAccessConsent",
    ASGARDEO_APP_CONSUMER_KEY: window.env.ASGARDEO_APP_CONSUMER_KEY,
    ASGARDEO_APP_CONSUMER_SECRET: window.env.ASGARDEO_APP_CONSUMER_SECRET,
    ASGARDEO_REDIRECT_URL: window.env.HOST_URL + "/oauth2/callback",
    CHOREO_URL_TRANSACTIONS_API: window.env.CHOREO_API_HOST + "/accountsandtransactionapi-ezz/1.0.0/transactions",
    CHOREO_URL_ACCOUNTS_API: window.env.CHOREO_API_HOST + "/accountsandtransactionapi-ezz/1.0.0/accounts",
    SIGN_IN_REDIRECT_URL: window.env.HOST_URL + "/dashboard",
    SIGN_OUT_REDIRECT_URL: window.env.HOST_URL + "/",
    CLIENTID: "n9LMxsNh1GdFMjzTjiZXVOFlmboa",
    BASE_URL: "https://api.asgardeo.io/t/dushan",//"https://api.asgardeo.io/t/sachinisiriwardene",
    SCOPE: [ "profile" ]
};

