#! groovy

pipeline {

    options {
        ansiColor('xterm')
        timeout(time: 10, unit: 'MINUTES')
    }

    agent {
        label 'docker'
    }

    parameters {
        choice(name: 'JSON_SCRIPT', choices: ['smoke.json','regression.json'], description: 'Define tests to run.')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('API Tests') {
            steps {
                script {
                    sh """
                        pwd
                    """
                    echo 'Testing ...'
                }
            }
        }

    }

    post {
        always {
            echo 'Cleaning ...'
        }
    }
}
