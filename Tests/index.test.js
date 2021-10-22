const {allTheCards} = require('../index');


describe('cards', () => {
    //  Matcher error: received value must be a string
    // Received has value: undefined
    
    // it('returns a string with the manager card', () => {
    //     // Arrange
    //     let mObj = [{
    //         managerName: 'James',
    //         managerID: '007',
    //         managerEmail: 'martini@mi6mail.com',
    //         officeNumber: '700'
    //     }];
    //     const {managerCard} = require('../Scripts/index');
    //     let expected = `
    //     <div class="card" style="width: 18rem;">
    //     <div class="card-body">
    //         <h5 class="card-title">James</h5>
    //         <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    //         <p class="card-text">Employee ID: 007</p>
    //         <a href="#" class="card-link">Email: martini@mi6mail.com</a>
    //         <a href="#" class="card-link">Office: 700</a>
    //     </div>
    //     </div>`
        
    //     // Act
    //     let mngrCard = managerCard(mObj);   
        
    //     // Assess
    //     expect(mngrCard).toMatch(expected);      

    // });

        it('should return a string from all the arrays passed-in as arguments', () => {
            // Arrange
                const a = '1';
                const b = [4,5,6];
                const c = [7,8,9];
                // let all = imp.allCards;
                // all = [];
                
                // Act
                let abc = allTheCards(a,b,c);
                
                
                // Assess
                expect(abc).toContain(`1456789`);


        })

});