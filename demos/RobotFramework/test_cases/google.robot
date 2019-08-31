*** Settings ***

Resource  ../resources/setup/browser.robot
Resource  ../resources/keywords/google_keywords.robot
Test Setup          Open Browser to Home Page
Test Teardown       Close Browser
Force Tags  e2e


*** Test Cases ***

Open Google
    Given I go to Google page
    Then I see the Google page

Looking for Robot on Google
    Given I go to Google page
    Then I see the Google page
    When I search 'Robot' on Google
    Then I see 'Robot - Wikipedia' on results
