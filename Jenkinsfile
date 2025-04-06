pipeline{
    agent any

    environment{
      NETLIFY_SITE_ID = '8078d931-ad93-4fd4-9e2e-b0c1ab737569'
      NETLIFY_AUTH_TOKEN = credentials('myTokenA2Enterprise')
    }

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
      stage('Test'){
        agent{
            docker{
                image 'node:20.11.0-bullseye'
                reuseNode true
            }
        }
        steps{
            sh '''
                test -f build/index.html
                npm test
            '''

        }
      }
      stage('Deploy'){
         agent{
            docker{
               image 'node:20.11.0-bullseye'
               reuseNode true
            }
         }
         steps{
            sh '''
               npm install netlify-cli
               node_modules/.bin/netlify --version
               echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
               node_modules/.bin/netlify deploy --prod --dir=build

            '''
         }
      }
    }
}