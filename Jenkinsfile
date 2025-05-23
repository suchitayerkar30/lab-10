Install dependencies:
npx playwright install --with-deps

Jenkins File:
pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
        sh 'npx playwright install'
      }
    }

    stage('Run Tests') {
      steps {
        // Generate HTML report explicitly
        sh 'npx playwright test --reporter=html'
      }
    }
  }

  post {
    always {
      // Archive test-related artifacts
      archiveArtifacts artifacts: 'playwright-report/**, test-results/**, screenshots/**, videos/**, traces/**', allowEmptyArchive: true

      // Publish HTML test report
      publishHTML (target: [
        allowMissing: true,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright Report'
      ])
    }
  }
}
