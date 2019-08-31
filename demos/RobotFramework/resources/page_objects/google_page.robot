*** Settings ***
Library         String
Variables       locators/google_locators.py

*** Keywords ***

I Search on Google
    [Arguments]  ${value}
    Wait Until Page Contains  Google
    Wait Until Element Is Visible   ${locators_google_page.search_field}
    Input Text                      ${locators_google_page.search_field}      ${value}
    Press Key                       ${locators_google_page.search_field}       \\13

I see Google results
    [Arguments]  ${value}
    Wait Until Page Contains  ${value}
