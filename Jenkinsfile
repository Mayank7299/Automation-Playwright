pipeline {
  agent any

  environment {
    CI = 'true'
    PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '0'
  }

  tools {
    nodejs 'NodeJS 16' // Ensure NodeJS is set up in Jenkins
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://your.git.repo/your-playwright-project.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
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
