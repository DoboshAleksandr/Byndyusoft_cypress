describe("Log in", function() {
  it ("Sing it", function() {
      cy.visit("https://www.google.ru/")
      cy.viewport(1920, 1080)
      cy.get('textarea[name="q"]').type("Byndyusoft")  // Используем более надёжный селектор
      cy.get('input[name="btnK"]').first().click();

      cy.get('h3.LC20lb.MBeuO.DKV0Md').contains('Byndyusoft') // Ищем заголовок с текстом "Byndyusoft"
        .parent('a') // Переходим к родительскому элементу <a>
        .invoke('removeAttr', 'target') // Убираем атрибут target="_blank"
        .click(); // Кликаем по ссылке


      // Используем cy.origin для выполнения команд на новом домене
      cy.origin('https://byndyusoft.com', () => {
        cy.url().should('eq', 'https://byndyusoft.com/');             // Проверка, что мы на сайте https://byndyusoft.com          
        cy.get('.knowMore__container > .btn').click();

        cy.get('a.popup-callback__contacts-tg')
        .should('have.attr', 'href', 'http://t.me/alexanderbyndyu'); // Проверка, что ссылка на телеграмм равна значению "http://t.me/alexanderbyndyu"
  
      });
  })
})