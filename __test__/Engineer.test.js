const Engineer = require('../lib/engineer');


describe('Engineer Class', () => {
    describe('Initialization', () => {
      // Positive test
      it("checking for obj values", () => {
        // Arrange
       const name = "Sally";
       const id = 2;
       const email = "sally@gmail.com"
       const github = "sallyGitHub"

  
        // Act
        const obj = new Engineer ("Sally", 2, "sally@gmail.com", "sallyGitHub");
  
        // Assert
        expect(obj.getName()).toEqual(name);
        expect(obj.getId()).toEqual(id);
        expect(obj.getEmail()).toEqual(email);
        expect(obj.getGithub()).toEqual(github);
      });
  
    
    });
  });
  