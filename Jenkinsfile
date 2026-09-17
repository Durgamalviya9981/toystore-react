pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t toystore-react .'
            }
        }
        stage('Deploy') {
            steps {
                bat 'docker rm -f toystore-container || exit 0'
                bat 'docker run -d --name toystore-container -p 3001:80 toystore-react'
            }
        }
    }
}
