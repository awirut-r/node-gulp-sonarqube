const gulp = require("gulp");
const sonarqubeScanner = require("sonarqube-scanner");

gulp.task("default", (callback) => {
  sonarqubeScanner(
    {
      serverUrl: "http://localhost:9000",
      token: "", // token
      options: {
        "sonar.projectBaseDir": "", // Root project Ex=C:/my-project
        "sonar.working.directory": "", // Root node-gulp-sonarqube "/sonar-scaner" Ex=C:/node-gulp-sonarqube/sonar-scaner
        "sonar.issue.ignore.multicriteria": "t1",
        "sonar.issue.ignore.multicriteria.t1.ruleKey":"typescript:S1871",
        "sonar.issue.ignore.multicriteria.t1.resourceKey":"**/reducers/**",
      },
    },
    callback
  );
});
