class SelectablePage {

  visit() {
    cy.visit('https://demoqa.com/selectable')
  }

  clickGrid() {
    cy.contains('Grid').click()
  }

  item(name) {
    return cy.contains('#gridContainer .list-group-item', name)
  }

  selectItems(items) {
    items.forEach(item => {
      this.item(item).click()
    })
  }

  verifySelected(items) {
    items.forEach(item => {
      this.item(item).should('have.class', 'active')
    })
  }

  verifyNotSelected(items) {
    items.forEach(item => {
      this.item(item).should('not.have.class', 'active')
    })
  }
}

export default new SelectablePage()