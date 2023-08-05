FROM openjdk:17
EXPOSE 9106
ADD target/openai-service.jar openai-service.jar 
ENTRYPOINT [ "java","-jar","/openai-service.jar" ]