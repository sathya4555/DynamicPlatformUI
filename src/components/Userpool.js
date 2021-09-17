import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ca-central-1_dcs5wTtEl",
    ClientId: "6ao3t42tqdtgrp56ojvauitm25"
}

export default new CognitoUserPool(poolData);