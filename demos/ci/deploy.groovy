node('docker') {
    stage ('Checkout'){
        checkout scm
    }
    stage('Build') {
        sh """
            mvn --version
        """
    }
    stage('Deploy') {
        sh """
            ls
        """
    }
    stage('Test') {
        sh """
            pwd
        """
        echo 'Testing ...'
    }
}
