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
        // Use xvfb-run for headed mode on Linux CI
        sh 'xvfb-run -a npx playwright test --project=mobile-chrome'
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
      archiveArtifacts artifacts: '**/test-results/**/*.webm', allowEmptyArchive: true
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
    }
  }
}
