*** Settings ***
Documentation  Suite description
Library  SeleniumLibrary

Resource  ../resources/qa_playground_resources.robot

Suite Setup   navigate to QA Playground
Suite Teardown   Close Browser

*** Variables ***
${HOODIE}   Hoodie with Zipper

*** Test Cases ***
First Test Case
    [Tags]   test
    is QA Playground display

Search For Hoodie Test
    [Tags]  test    regression  smoke   adhoc
    search for Hoodie   hoodie
    is your hoodie displayed?   ${HOODIE}
