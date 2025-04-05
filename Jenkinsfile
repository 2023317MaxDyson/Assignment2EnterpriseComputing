pipeline{
    agent any

    stages{
      stage('Build'){
         environment {
         CI = 'false'
        }
            agent{
               docker{
                image 'node:20.11.0-bullseye'
                reuseNode true 
               }
            }
            steps{
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm install
                    npm run build
                '''
            }
      }




    }
}