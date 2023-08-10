pipeline {
    agent any 
    
    stages{
        stage("Clone the Code"){
            steps {
                echo "Cloning the code"
                git url:"https://github.com/DurgaBhanu/Bookstore", branch: "main"
            }
        }
        stage("Build"){
            steps {
                echo "Building the image"
                sh "docker build -t book-store ."
            }
        }
        
        stage("Deploy"){
            steps {
                echo "Deploying the container"
                sh "docker-compose down && docker-compose up -d"
                
            }
        }
    }
}
