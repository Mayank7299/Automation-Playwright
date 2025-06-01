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
    stage('Checkout') {
      steps {
        git url: 'https://github.com/Mayank7299/Automation-Playwright.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci || npm install'
        sh 'npx playwright install'
      }
    }

    stage('Run floweraura.spec.ts on mobile-chrome') {
  steps {
    sh 'xvfb-run -a npx playwright test tests/floweraura.spec.ts --project=mobile-chrome --reporter=html,junit'
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
      // Archive video and test results artifacts for download
      archiveArtifacts artifacts: '**/test-results/**/*.webm, playwright-report/**', allowEmptyArchive: true
    }
  }
}
