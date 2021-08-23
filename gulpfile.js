const gulp = require("gulp");
const sonarqubeScanner = require("sonarqube-scanner");

gulp.task("default", (callback) => {
  sonarqubeScanner(
    {
      serverUrl: "http://localhost:9000",
      token: "", // ใส่ token
      options: {
        "sonar.projectBaseDir": "", // ใส่ Root project ที่เราต้องการ scan เช่น C:/my-project
        "sonar.working.directory": "", // ใส่ Root project node-gulp-sonarqube แล้ว/ด้วย sonar-scaner เช่น C:/node-gulp-sonarqube/sonar-scaner
        "sonar.issue.ignore.multicriteria": "t1",
        "sonar.issue.ignore.multicriteria.t1.ruleKey":"typescript:S1871",
        "sonar.issue.ignore.multicriteria.t1.resourceKey":"**/reducers/**",
      },
    },
    callback
  );
});
