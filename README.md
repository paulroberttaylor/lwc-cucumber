    Feature: Simple demo of using LWC Jest with Gherkin

        Scenario: Check a button fires an event with a payload

            Given I have a button with an id of myButton
            When I click the button with an id of myButton
            Then a custom event is called
            And the event has a message property of "hello"
        

1) npm i

2) sfdx force:lightning:lwc:test:setup

3) ./node_modules/.bin/lwc-jest -- --runTestsByPath ./force-app/main/default/lwc/myComponent/\_\_tests\_\_/steps/myComponent.steps.js
