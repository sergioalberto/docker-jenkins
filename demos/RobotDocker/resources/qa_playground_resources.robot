*** Settings ***
Documentation    Suite description
Library  SeleniumLibrary
Library  StringFormat

Variables   ../locators/locators.yaml

*** Variables ***
&{DESIRED_CAPABILITIES}    name=browserTest   browserName=chrome    version=76    'enableVNC'=true    'enableVideo'=false
&{DESIRED_CAPABILITIES_1}    name=browserTest1   browserName=firefox    version=67    'enableVNC'=true    'enableVideo'=false

*** Keywords ***
navigate to QA Playground
    # Open Browser   http://34.205.174.166/   Chrome
    # Open Browser   http://34.205.174.166/   Chrome   ${None}   remote_url=http://localhost:4444/wd/hub   desired_capabilities=${DESIRED_CAPABILITIES}
    Open Browser   http://34.205.174.166/   Chrome   ${None}   remote_url=http://selenoid:4444/wd/hub   desired_capabilities=${DESIRED_CAPABILITIES}
    Maximize Browser Window
    Set Selenium Speed   0.25

is QA Playground display
    Wait Until Element Is Visible   ${home_page.home}   10

search for Hoodie
    [Documentation]  this is a test
    [Arguments]  ${hoodie_name}
    Input Text   ${home_page.search_field}   ${hoodie_name}
    Press Keys   ${home_page.search_field}   ENTER

is your hoodie displayed?
    [Arguments]  ${hoodie_name}
    ${hoodie} =   format string   ${results_page.item_result}   ${hoodie_name}
    Wait Until Element Is Visible   ${hoodie}   10
