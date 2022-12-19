import {findRating, check} from "./findRating"
const arrayInput = ["collide","crash","scratch","smash", "bump"];
const testCases = [

    {
        scenario: "when test string is: My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes. - return: ",
        input: "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes.",
        expected: 3
    },
    {
        scenario: "when test string is:  I had a bumpy ride to the airport and crashed out on the neighbours couch. - return: ",
        input: " I had a bumpy ride to the airport and crashed out on the neighbours couch",
        expected: 2
    },
    {
        scenario: "when test string is: i collided with a pole - return: ",
        input: "i collided with a pole", 
        expected: 1
    },
 
]
describe("Claim Rating Tests", () => {
    testCases.map(ts => {
        it(ts.scenario, () => {
            // Act
            const actual = findRating(ts.input)
            // Assert
            expect(actual).toBe(ts.expected)
        })  
    })
})

describe("check test", () => {
    it("when crash return true", ()=>{
        //arrange
        const input = "crash";
        const expected = true;
        //act
       const actual = check(input)
       //assert
       expect(actual).toBe(expected);
    } )
})