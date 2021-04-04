const Employee = require('../lib/employee');


describe('Employee Class', () => {
    describe('Initialization', () => {
      // Positive test
      it("checking for obj values", () => {
        // Arrange
       const name = "Joe";
       const id = 1;
       const email = "joe@gmail.com"

  
        // Act
        const obj = new Employee("Joe", 1, "joe@gmail.com");
  
        // Assert
        expect(obj.getName()).toEqual(name);
        expect(obj.getId()).toEqual(id);
        expect(obj.getEmail()).toEqual(email);
      });
  
    
    });
  });
  