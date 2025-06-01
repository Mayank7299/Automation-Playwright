pipeline {
  agent any

  environment {
    CI = 'true'
    PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '0'
  }

  tools {
    nodejs 'NodeJS 18'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Playwright Tests') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Publish HTML Report') {
      steps {
        publishHTML(target: [
          reportDir: 'playwright-report',
          reportFiles: 'index.html',
          reportName: 'Playwright Test Report',
          keepAll: true,
          alwaysLinkToLastBuild: true
        ])
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: '**/test-results/**', allowEmptyArchive: true
    }
  }
}
