const Intern = require('../lib/intern');


describe('Intern Class', () => {
    describe('Initialization', () => {
      // Positive test
      it("checking for obj values", () => {
        // Arrange
       const name = "Jane";
       const id = 3;
       const email = "jane@gmail.com"
       const school = "OSU"

  
        // Act
        const obj = new Intern ("Jane", 3, "jane@gmail.com", "OSU");
  
        // Assert
        expect(obj.getName()).toEqual(name);
        expect(obj.getId()).toEqual(id);
        expect(obj.getEmail()).toEqual(email);
        expect(obj.getSchool()).toEqual(school);
      });
  
    
    });
  });
  