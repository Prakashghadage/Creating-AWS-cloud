# Creating-AWS-cloud


- Steps for containaized application
- 1 Create Node JS application
- 2 Add Dockerfile to node js application.
- 3 Define automation script for creating custom container image
- 4 Push Node JS application to Github repo at git site.
- 5 Create Virtual machine in On-premise or Hosted environment.
- 6 Clone NodeJS app repo to Linux VM.
- 7 Install Docker container execution engine.
- 8 Start docker engine.
- 9 build Docker container image using Docker build command.
- 11 Ensure Container image is created in Linux machine.
- 12 start container instance using docker run command.
- 13  Check website inside container instance by invoking externally.
- 14 Enure firewall for LInux VM is set to accept HTTP trafic from anywhere. 15.User browser to access web site from local machine.
- 16 List down all container instance running
- 17 List down all container images created in Linux VN
- 18 Kill unnesasary container instances running
- 19  Remove container images from LInux VN
- 20 STop Docker running.
- 21 STop or terminate Linux VM running

- #
- #
- #
- #
- #



- sudo yum update
- sudo yum install git
- sudo yum install docker
- git clone ref
- sudo systemctl start docker
- sudo systemctl enable docker
- sudo systemctl status docker
- sudo docker images
- ls
- cd filename
- sudo docker build -t rdockerfilr name .
- sudo docker ps
- sudo docker run -d -p 8000:3000 dockerfile folder
- sudo docker ps
- 
