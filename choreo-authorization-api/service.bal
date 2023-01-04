import ballerina/http;
import ballerina/regex;
import ballerina/io;
# A service representing a network-accessible API
# bound to port `9090`.
service / on new http:Listener(9090) {

    resource function get authorize(string client_id = "o75TcVwRBTaCSg6HcnSA2egw7Y0a", string redirect_uri = "https://www.google.com/", string scope = "accounts", string consentID = "343eea20-3f9d-4c12-8777-fe446c554210") returns string {
        if consentID is "" {
            io:println("ConsentID is not sent in request");
            return "https://api.asgardeo.io/t/bankdemo/authenticationendpoint/oauth2_error.do?oauthErrorCode=invalid_request&oauthErrorMsg=Empty+ConsentID";
        }
        if client_id is "" {
            io:println("ClientID is not sent in request");
            return "https://api.asgardeo.io/t/bankdemo/authenticationendpoint/oauth2_error.do?oauthErrorCode=invalid_request&oauthErrorMsg=Invalid+authorization+request";
        }
        if scope is "" {
            io:println("Scopes is not sent in request");
            return "https://api.asgardeo.io/t/bankdemo/authenticationendpoint/oauth2_error.do?oauthErrorCode=invalid_request&oauthErrorMsg=Scopes+not+found";
        }
        if !consentID.equalsIgnoreCaseAscii("343eea20-3f9d-4c12-8777-fe446c554210") {
            io:println("Invalid ConsentID");
            return "https://api.asgardeo.io/t/bankdemo/authenticationendpoint/oauth2_error.do?oauthErrorCode=invalid_request&oauthErrorMsg=ConsentID+Not+Valid";
        }
        string[] scopeList = regex:split(scope, " ");
        foreach var item in scopeList {
            if (!(item is "accounts" || item is "transactions" || item is "openid")) {
                io:println("Invalid scope "+ item);
                return "https://api.asgardeo.io/t/bankdemo/authenticationendpoint/oauth2_error.do?oauthErrorCode=invalid_request&oauthErrorMsg=Invalid+scopes";
            }
        }
        io:println("Redirecting to the authorization endpoint");
        return "https://api.asgardeo.io/t/bankdemo/oauth2/authorize?scope=" + scope + "&response_type=code&redirect_uri=" + redirect_uri + "&client_id=" + client_id;
    }
}
