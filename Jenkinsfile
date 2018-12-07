pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'ng build --prod' 
                sh 'cd dist && zip -r dist.zip front-end'
                archiveArtifacts artifacts: '**/dist/*.zip', fingerprint: true 
            }
        }
    }
}
