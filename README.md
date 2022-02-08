1. install docker
2. create sonarqube. run: docker run -d --name "name project" -p 9000:9000 sonarqube
3. install gulp. run: npm install --global gulp-cli
4. install projects node-gulp-sonarqube. run: npm install
5. ไปที่ web browser run localhost:9000
6. เข้าไปที่ My Account -> Security -> Generate Tokens **เก็บ copy token ไว้ด้วย
7. แก้ไขไฟล์ gulpfile.js
    - token: "", (ใส่ token ที่ได้ copy ไว้ก่อนหน้า)
    - options: {
        "sonar.projectBaseDir": "", ใส่ Root project ที่เราต้องการ scan เช่น C:/my-project
        "sonar.working.directory": "", ใส่ Root project node-gulp-sonarqube แล้ว/ด้วย sonar-scaner เช่น C:/node-gulp-sonarqube/sonar-scaner
      },
8. run: gulp default รอจนกว่าจะเสร็จ

