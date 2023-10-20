package com.recorrido.login.Config;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProviderClientBuilder;
import com.amazonaws.services.cognitoidp.model.AdminInitiateAuthRequest;
import com.amazonaws.services.cognitoidp.model.AdminInitiateAuthResult;
import com.amazonaws.services.cognitoidp.model.AuthFlowType;

import com.recorrido.login.Model.Administrador;

@Configuration
public class LoginLambda {
    private static final String clientId="3g90ohjcqid3pu3s1jbp0t9but";

    private static final String userPollId="us-east-2_18SewHJRV";

    @Bean
    public Function<Map<String,Administrador>,Map<String,String>> ingresar(){
        return(json) ->{
            
            Administrador administrador= json.get("body");

            Map<String,String> login= new HashMap<>();
            if(administrador.getUsername()!=null && administrador.getPassword()!=null){
                if(!administrador.getUsername().isBlank() && !administrador.getPassword().isBlank()){
                    try {
                        BasicAWSCredentials awsCredentials= new BasicAWSCredentials("AKIATSM2FUOC7F5T6GHF","9j0MG62/mVXOe61eNMqrB8KdzJRilny3ZXxobBsk");

                        AWSCognitoIdentityProvider provider=AWSCognitoIdentityProviderClientBuilder.standard().withRegion(Regions.US_EAST_2).withCredentials(new AWSStaticCredentialsProvider(awsCredentials)).build();

                        Map<String,String> params= new HashMap<>();
                        params.put("USERNAME",administrador.getUsername());
                        params.put("PASSWORD",administrador.getPassword());

                        AdminInitiateAuthRequest admin=new AdminInitiateAuthRequest().withClientId(clientId).withUserPoolId(userPollId).withAuthFlow(AuthFlowType.ADMIN_NO_SRP_AUTH).withAuthParameters(params);

                        AdminInitiateAuthResult result = provider.adminInitiateAuth(admin);

                    
                        if(result.getChallengeName()==null){
                            login.put("IdToken", result.getAuthenticationResult().getIdToken());
                            return login;
                        }else{
                            if(result.getChallengeName().equals("NEW_PASSWORD_REQUIRED")){
                                login.put("Message", "Debe cambiar su contraseña");
                                return login;
                            }else{
                                login.put("Message", "Necesita un paso mas para ingresar");
                                return login;
                            }
                        }
                    }catch (Exception e) {
                        login.put("Error", "Usuario o contraseña incorrecta");
                        return login;
                    }
                }else{
                    login.put("Error", "No debe dejar los campos vacios");
                    return login;
                }
            }else{
                login.put("Error", "No debe dejar los campos nulos");
                return login;
            }
        };
    }   
}
