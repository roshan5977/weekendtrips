FROM openjdk:11
EXPOSE 9104
ADD target/report-service.jar report-service.jar 
ENTRYPOINT [ "java","-jar","/report-service.jar" ]