
export default class User{

    constructor(){
        if (User.instance) {
          return User.instance;
        }
       
        User.instance = this;
    }

    static getInstance(){
        return new User;
    }
    setData(data){
        this.data = data
    }
    getData(){
        return this.data
    }

    setCookies(cookies){
        this.cookies = cookies;
    }
    getCookies(){
        return this.cookies; 
    }
    setHeaders(headers){
        this.headers = headers;
    }
    getHeaders(){
        return this.headers;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    getRegister(){
        return this.register;
    }
    setRegister(register){
        this.register = register;
    }
    getCourse(){
        return this.course;
    }
    setCourse(course){
        this.course = course
    }
    setCR(CR){
        this.CR= CR;
    }
    getCR(){
        return this.CR;
    }
    setSemester(semester){
        this.semester =semester
    }
    getSemester(){
        return this.semester;
    }
}