import ballerina/http;
import ballerina/mime;
import ballerina/io;

# A service representing a network-accessible API
# bound to port `9090`.
service / on new http:Listener(9090) {

    resource function get userAccessToken(string code, string clientId = "fkzIBdn7WeInrcOPgOMZQt6fr2sa", string clinetSecret = "", string redirectURI = "https://www.google.com/", string choreoKey = "", string choreoSecret = "") returns error|json? {

        // initial token call to the Asgardeo token endpoint
        io:println("Initiating the token call to Asgardeo");
        http:Client httpEp = check new (url = "https://api.asgardeo.io/t/bankdemo/oauth2/token");
        http:Request req = new;
        check req.setContentType(mime:APPLICATION_FORM_URLENCODED);
        req.setTextPayload("code=" + code + "&grant_type=authorization_code&client_id=" + clientId + "&client_secret=" + clinetSecret + "&redirect_uri=" + redirectURI);
        io:println("Asgardeo token request sent");

        http:Response response = <http:Response>check httpEp->post("/", req);
        io:println("Asgardeo token response received");

        //receive user access token from Asgardeo
        json tokenResponse = check response.getJsonPayload();

        io:print("response -->",tokenResponse);

        if !(tokenResponse.access_token is error) {
            io:println("Access token received from Asgardeo");
            string accessTokenAS = check tokenResponse.access_token;

            //send the Asgardeo access token to the chroeo token endpoint and do the token exchange grant
            http:Client tokenExchangeEp = check new (url = "https://sts.choreo.dev/oauth2/token", auth = {
                username: choreoKey,
                password: choreoSecret
            });
            http:Request tokenExchangeReq = new;
            check tokenExchangeReq.setContentType(mime:APPLICATION_FORM_URLENCODED);
            tokenExchangeReq.setTextPayload("&grant_type=urn:ietf:params:oauth:grant-type:token-exchange&subject_token=" + accessTokenAS +
                                "&subject_token_type=urn:ietf:params:oauth:token-type:access_token&scope=openid%20accounts%20transactions");

            http:Response tokenExResp = <http:Response>check tokenExchangeEp->post("/", tokenExchangeReq);
            json tokenExResponse = check tokenExResp.getJsonPayload();

            io:println("Response received from Choreo ->" , tokenExResponse);
            return tokenExResponse;
        } else {
            io:println("Error in receiving access token from Asgardeo");
            return tokenResponse;
        }

    }
}
