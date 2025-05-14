describe("Real-time Comments", () => {
    it("should display comments in real-time", () => {
      cy.login("user1@test.com", "password123");
      cy.visit("/task/1");
      cy.get("[data-cy='comment-input']").type("Hello from User 1{enter}");
  
      cy.login("user2@test.com", "password123");
      cy.visit("/task/1");
      cy.contains("Hello from User 1").should("be.visible");
    });
  });