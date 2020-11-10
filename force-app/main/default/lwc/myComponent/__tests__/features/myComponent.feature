Feature: Simple demo of using LWC Jest with Gherkin

    Scenario: should fire an event with a payload

        Given I have a button with an id of myButton
        When I click the button with an id of myButton
        Then a custom event is called
        And the event has a message property of "hello"