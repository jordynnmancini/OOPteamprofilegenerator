const Manager = require('../lib/manager');


describe('Manager Class', () => {
    describe('Initialization', () => {
      // Positive test
      it("checking for obj values", () => {
        // Arrange
       const name = "Greg";
       const id = 4;
       const email = "greg@gmail.com"
       const officeNumber = 6145552121

  
        // Act
        const obj = new Manager ("Greg", 4, "greg@gmail.com", 6145552121);
  
        // Assert
        expect(obj.getName()).toEqual(name);
        expect(obj.getId()).toEqual(id);
        expect(obj.getEmail()).toEqual(email);
        expect(obj.getofficeNumber()).toEqual(officeNumber);
      });
  
    
    });
  });
  