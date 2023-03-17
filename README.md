1. install docker
2. create sonarqube. run: docker run -d --name "name project" -p 9000:9000 sonarqube
3. install gulp. run: npm install --global gulp-cli
4. install projects node-gulp-sonarqube. run: npm install
5. to web browser run localhost:9000
6. to My Account -> Security -> Generate Tokens, copy token and keep token
7. update gulpfile.js
    - token: "",
    - options: {
        "sonar.projectBaseDir": "", Root project [C:/my-project]
        "sonar.working.directory": "", Root file sonar-scaner [C:/node-gulp-sonarqube/sonar-scaner]
        'sonar.exclusions': 'node_modules/**, coverage/**, public/**, build/**, **/__tests__/**, **/test/**, **.test.js, **.yaml',
        'sonar.issue.ignore.multicriteria': 't1',
        'sonar.issue.ignore.multicriteria.t1.ruleKey': 'typescript:S1871',
        'sonar.issue.ignore.multicriteria.t1.resourceKey': '**/reducers/**',        
      },
8. run: gulp default

Good luck


Recommend M1
    :docker run -d -p 8084:9000 mwizner/sonarqube:8.7.1-community

