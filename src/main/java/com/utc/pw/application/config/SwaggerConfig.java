package com.utc.pw.application.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.Parameter;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 *  Swagger is a specification for documenting REST API.
 *  
 *  http://localhost:8080/invoice/swagger-ui.html
 *  
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {
  @Bean
  public Docket api() {
    //Adding Header
    ParameterBuilder aParameterBuilder = new ParameterBuilder();
    aParameterBuilder.name("Authorization") // name of header
        .modelRef(new ModelRef("string")).parameterType("header") // type - header
        .defaultValue("Bearer REPLACE_WITH_REAL_TOKEN").required(true) // for compulsory
        .build();
    List<Parameter> aParameters = new ArrayList<>();
    aParameters.add(aParameterBuilder.build()); // add parameter
    return new Docket(DocumentationType.SWAGGER_2).groupName("General API").select().apis(RequestHandlerSelectors.basePackage("com.utc.pw.controller")).build().pathMapping("").globalOperationParameters(aParameters);
  }

  @Bean
  public Docket apiSignin() {
    return new Docket(DocumentationType.SWAGGER_2).groupName("Security").select().apis(RequestHandlerSelectors.basePackage("com.utc.pw.security")).build();
  }
}