const gulp = require("gulp");
const sonarqubeScanner = require("sonarqube-scanner");

gulp.task("sonarscan", (callback) => {
  sonarqubeScanner(
    {
      serverUrl: "http://localhost:9000",
      token: "", // Add token
      options: {
        "sonar.projectBaseDir": "", // Root path project
        "sonar.working.directory": "", // Root folder node-gulp-sonarqube/new folder sonar-scaner
      },
    },
    callback
  );
});
