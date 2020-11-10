Feature: Simple demo of using LWC Jest with Gerkhin

    Scenario: Check a button fires an event with a payload

        Given I have a button with an id of myButton
        When I click the button with an id of myButton
        Then a custom event is called
        And the event has a message property of "hello"