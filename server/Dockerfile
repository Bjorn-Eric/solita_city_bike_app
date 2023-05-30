# Use a base image with Java and Maven installed
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml file to the container
COPY pom.xml .

# Install project dependencies
RUN mvn dependency:go-offline -B

# Copy the project files to the container
COPY src ./src

# Build the server application
RUN mvn package -DskipTests

# Use a base image with Java installed
FROM openjdk:17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the server JAR file from the build stage to the container
COPY --from=build /app/target/server.jar ./server.jar

# Expose the default port for the server
EXPOSE 8080

# Start the server application
CMD ["java", "-jar", "server.jar"]

