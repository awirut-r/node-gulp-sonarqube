const gulp = require("gulp");
const sonarqubeScanner = require("sonarqube-scanner");

gulp.task("default", (callback) => {
  sonarqubeScanner(
    {
      serverUrl: "http://localhost:9000",
      token: "", // Add token
      options: {
        "sonar.projectBaseDir": "/Users/awirut/Documents/AIS/myais-pwa", // Root path project
        "sonar.working.directory": "c:/node-gulp-sonarqube/sonar-scaner", // Root forder node-gulp-sonarqube
      },
    },
    callback
  );
});
