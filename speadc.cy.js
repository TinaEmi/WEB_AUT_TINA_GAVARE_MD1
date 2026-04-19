import page from '../pages/selectablePage'

describe('Selectable Grid Test', () => {

  it('Select items', () => {

    const selected = ['Two', 'Four', 'Six', 'Eight']
    const notSelected = ['One', 'Three', 'Five', 'Seven', 'Nine']

    page.visit()
    page.clickGrid()

    page.selectItems(selected)

    page.verifySelected(selected)
    page.verifyNotSelected(notSelected)

  })

})