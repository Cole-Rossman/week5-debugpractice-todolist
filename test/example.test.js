import { displayTodo } from '../render-utils.js';

const test = QUnit.test;

test('displayTodo should render a div with a p element with todo and complete class', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="todo"><p class="complete">Have fun</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayTodo({ todo: 'Have fun', complete: true });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('displayTodo should render a div with a p element with todo and incomplete class', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="todo"><p class="incomplete">Have fun</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = displayTodo({ todo: 'Have fun', complete: false });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
