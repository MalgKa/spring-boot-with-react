package pl.projects.springbootwithreact.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import static org.springframework.http.HttpHeaders.*;
import static org.springframework.http.HttpMethod.*;
import static pl.projects.springbootwithreact.constant.Constant.X_REQUESTED_WITH;


@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter(){ //returns an instance of CorsFilter
        var urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource(); //It creates an instance of UrlBasedCorsConfigurationSource, which allows configuring corsConfiguration for different URL paths
        var corsConfiguration = new CorsConfiguration();//This instance represents the configuration for CORS policies. Various parameters such as allowed HTTP methods, headers, source addresses, etc., can be set on it.
        corsConfiguration.setAllowCredentials(true); // Sets whether requests from the origin server can include authorization headers (e.g., cookies, credentials)
        corsConfiguration.setAllowedOrigins(List.of("http://localhost:3000")); //Specifies which source domains can access the resources.
        corsConfiguration.setAllowedHeaders(List.of(ORIGIN, ACCESS_CONTROL_ALLOW_ORIGIN, CONTENT_TYPE, ACCEPT, AUTHORIZATION, X_REQUESTED_WITH, ACCESS_CONTROL_REQUEST_METHOD, ACCESS_CONTROL_REQUEST_HEADERS, ACCESS_CONTROL_ALLOW_CREDENTIALS));//Specifies allowed headers in HTTP requests.
        corsConfiguration.setExposedHeaders(List.of(ORIGIN, ACCESS_CONTROL_ALLOW_ORIGIN, CONTENT_TYPE, ACCEPT, AUTHORIZATION, X_REQUESTED_WITH, ACCESS_CONTROL_REQUEST_METHOD, ACCESS_CONTROL_REQUEST_HEADERS, ACCESS_CONTROL_ALLOW_CREDENTIALS));//Specifies headers that can be read by the browser in HTTP responses.
        corsConfiguration.setAllowedMethods(List.of(GET.name(), POST.name(), PUT.name(), PATCH.name(), DELETE.name(), OPTIONS.name())); //Specifies the allowed HTTP methods for requests.
        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration); // Registers the CORS configuration for all paths (/**) in the application.
        return new CorsFilter(urlBasedCorsConfigurationSource); //Creates and returns a CorsFilter object, which is a Spring filter responsible for processing requests according to the defined CORS configuration.
    }
}
