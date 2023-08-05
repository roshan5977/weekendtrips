FROM openjdk:11
EXPOSE 9103
ADD target/traveller-service.jar traveller-service.jar 
ENTRYPOINT [ "java","-jar","/traveller-service.jar" ]