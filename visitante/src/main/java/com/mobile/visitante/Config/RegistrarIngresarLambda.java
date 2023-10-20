package com.mobile.visitante.Config;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProviderClientBuilder;
import com.amazonaws.services.cognitoidp.model.*;
import com.mobile.visitante.Model.Visitante;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.*;
import java.util.function.Function;

@Configuration
public class RegistrarIngresarLambda {

    private static final String clientId="7193ut5jlb4d4nol5u0pud3mal";

    private static final String userPollId="us-east-2_SiBGMtTEN";

    BasicAWSCredentials awsCredentials= new BasicAWSCredentials("AKIATSM2FUOC7F5T6GHF","9j0MG62/mVXOe61eNMqrB8KdzJRilny3ZXxobBsk");
    
    AWSCognitoIdentityProvider provider= AWSCognitoIdentityProviderClientBuilder.standard().withRegion(Regions.US_EAST_2).withCredentials(new AWSStaticCredentialsProvider(awsCredentials)).build();

    @Bean
    public Function<Map<String,Visitante>,Map<String,String>> registrar(){
        return (json) ->{

            Visitante visitante=json.get("body");

            Map<String,String> mensaje= new HashMap<>();

            if(emailExistencia(visitante.getEmail())){
                mensaje.put("Error","El correo ya esta en uso");
                return mensaje;
            }else{
                try{
                    if(!visitante.getDni().trim().isBlank() && !visitante.getNombres().trim().isBlank() && !visitante.getApePaterno().trim().isBlank() && !visitante.getApeMaterno().trim().isBlank() && !visitante.getEmail().trim().isBlank() && !visitante.getPassword().trim().isBlank() && !visitante.getCelular().trim().isBlank() && !visitante.getOcupacion().trim().isBlank()){
                        List<AttributeType> userAttributes = new ArrayList<>();
                        userAttributes.add(new AttributeType().withName("custom:dni").withValue(visitante.getDni()));
                        userAttributes.add(new AttributeType().withName("custom:nombres").withValue(visitante.getNombres()));
                        userAttributes.add(new AttributeType().withName("custom:apePaterno").withValue(visitante.getApePaterno()));
                        userAttributes.add(new AttributeType().withName("custom:apeMaterno").withValue(visitante.getApeMaterno()));
                        userAttributes.add(new AttributeType().withName("custom:celular").withValue(visitante.getCelular()));
                        userAttributes.add(new AttributeType().withName("custom:ocupacion").withValue(visitante.getOcupacion()));
                        try{
                            SignUpRequest signUpRequest = new SignUpRequest()
                                    .withClientId(clientId)
                                    .withUsername(visitante.getEmail())
                                    .withPassword(visitante.getPassword())
                                    .withUserAttributes(userAttributes);
                            provider.signUp(signUpRequest);
                            mensaje.put("Mensaje","Registro con exito");
                            return mensaje;
                        }catch (Exception e){
                            mensaje.put("Error","Formato incorrecto");
                            return mensaje;
                        }
                    }else {
                        mensaje.put("Error","No debe dejar los campos vacios");
                        return mensaje;
                    }
                }catch (Exception e){
                    mensaje.put("Error","Los campos no deben ser nulos");
                    return mensaje;
                }
            }
        };
    }
    public boolean emailExistencia(String email) {
        AdminGetUserRequest adminGetUserRequest = new AdminGetUserRequest()
                .withUserPoolId(userPollId)
                .withUsername(email);
        try {
            provider.adminGetUser(adminGetUserRequest);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Bean
    public Function<Map<String,Visitante>,Map<String ,String>> buscar() {
        return (json)->{

            Visitante visitante=json.get("body");

            Map<String,String> visitanteResult= new HashMap<>();

            try{
                if(!visitante.getEmail().trim().isBlank()){
                    try {
                        AdminGetUserRequest adminGetUserRequest = new AdminGetUserRequest()
                                .withUserPoolId(userPollId)
                                .withUsername(visitante.getEmail());

                        AdminGetUserResult adminGetUserResult =  provider.adminGetUser(adminGetUserRequest);
                        for(AttributeType v:adminGetUserResult.getUserAttributes() ){
                            if(!v.getName().equals("sub") && !v.getName().equals("email_verified")){
                                if(v.getName().equals("email")){
                                    visitanteResult.put(v.getName(),v.getValue());
                                }else {
                                    visitanteResult.put(v.getName().substring(7),v.getValue());
                                }
                            }
                        }
                        return visitanteResult;
                    }catch (Exception e){
                        visitanteResult.put("Error","El usuario no existe");
                        return visitanteResult;
                    }
                }else {
                    visitanteResult.put("Error","Email vacio");
                    return visitanteResult;
                }
            }catch (Exception e){
                visitanteResult.put("Erro","Email nulo");
                return visitanteResult;
            }
        };
    }

    @Bean
    public Function<Map<String,Visitante>,Map<String,String>> ingresar(){
        return (json)-> {
            Visitante visitante = json.get("body");
            Map<String, String> login = new HashMap<>();
            try {
                if (!visitante.getEmail().trim().isBlank() && !visitante.getPassword().trim().isBlank()) {
                    Map<String, String> params = new HashMap<>();
                    params.put("USERNAME", visitante.getEmail());
                    params.put("PASSWORD", visitante.getPassword());

                    try {
                        InitiateAuthRequest authRequest = new InitiateAuthRequest()
                                .withAuthFlow("USER_PASSWORD_AUTH")
                                .withClientId(clientId)
                                .withAuthParameters(params);

                        InitiateAuthResult result = provider.initiateAuth(authRequest);

                        login.put("IdToken", result.getAuthenticationResult().getIdToken());
                        return login;

                    } catch (Exception e) {
                        login.put("Error", "Correo o contraseña incorrecta");
                        return login;
                    }
                } else {
                    login.put("Error", "Los campos no deben estar vacios");
                    return login;
                }
            } catch (Exception e) {
                login.put("Error", "Los campos no deben ser nulos");
                return login;
            }
        };
    }
}
