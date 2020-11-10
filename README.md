    Feature: myComponent

        Scenario: Simple component

            Given I have a button with an id of myButton
            When I click the button with an id of myButton
            Then a custom event is called
            And the event has a message property of "hello"
        

./node_modules/.bin/lwc-jest -- --runTestsByPath ./force-app/main/default/lwc/myComponent/__tests__/steps/myComponent.steps.js
