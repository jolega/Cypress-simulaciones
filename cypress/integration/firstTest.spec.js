/// <reference types="cypress"/>  

 describe("Our fist suite", () => {

    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()


        //by tage name  
        //por nombre de etiqueta
        cy.get('input')

        //by Id 
        // por id
        cy.get('#inputEmail1')

        //by class name 
        // por nombre de clase
        cy.get('.input-full-width')

        // by attriburte name 
        // por nombre de atributo
        cy.get('[placeholder]')

        //by atribute name and value
        // por nombre de atributo y valor
        cy.get('[placeholder="Email"]')

         //by class value 
        // por valor de clase
        cy.get(['class="input-full-width size-medium shape-rectangle"'])

        //by Tag name and attribute with value
        // por esiquete y valor de atributo
        cy.get('input[placeholder="Email"]')

        // by two different attributes
        // por dos diferentes atributos
        cy.get('[placeholder="Email"][type="email"]')
        
        //by tag name, atribute with values, id and class name
        //por nombre de etiqueta, atributo con valores, id y nombre de clase
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')




    })

    it('second test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="singInButton"]') // etiqueta definida por el usuario
        cy.contains('Sign in')   // busca el primer valor con este texto
        cy.contains('[status="warning"]','Sign in') // busca el boton

        cy.get('#inputEmail3')
            .parents("form")
            .find("button")
            .should('contain','Sign in')
            .parents("form")
            .find("nb-checkbox")
            .click()

        cy.contains('nb-card','Horizontal form')
            .find('[type="email"]')

    })

    it.only('the and wrap methods', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

       /* cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
        cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain','Password')
        cy.contains('nb-card','Basic form').find('[for="exampleInputEmail1"]').should('contain','Email address')
        cy.contains('nb-card','Basic form').find('[for="exampleInputPassword1"]').should('contain','Password')
        */

        cy.contains('nb-card', 'Using the Grid').then( firstForm => { 
            const emaillabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find ('[for="inputPassword2"]').text()
            expect(emaillabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then( secondForm => { 
                const emaillabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
                expect(emaillabelSecond).to.equal('Email address')
                const passwordLabelFSecond = secondForm.find ('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFSecond).to.equal('Password')
    
                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain','Password')
    
            })


        })
    })

    it.only('invoke command',() => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2
        cy.get('[for="exampleInputEmail1"]').then( label =>{
            expect(label.text()).to.equal('Email address')
        })

         //3
         cy.get('[for="exampleInputEmail1"]').invoke('text').then( text=>{
            expect(text).to.equal('Email address')
        })   

        cy.contains('nb-card','Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            //.should('contain','checked')
            .then(classValue => {
                  expect(classValue).to.contain('checked')
            })


            
    })
 })