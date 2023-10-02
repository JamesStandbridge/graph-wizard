FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/*.jar /app-bin/app.jar

ENTRYPOINT ["java", "-jar", "/app-bin/app.jar"]