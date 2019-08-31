*** Settings ***

Library  Selenium2Library  timeout=10   implicit_wait=5
Library  XvfbRobot


*** Variables ***

${BROWSER}                  Chrome
${WINDOW_SIZE_WIDTH}        1850
${WINDOW_SIZE_HEIGHT}       1000
${TMP_PATH}  /tmp


*** Keywords ***

Open Browser to Home Page
    [Documentation]     Retrieves and set Google Chrome options for running in
    ...                 our automation environment.
    Start Virtual Display      ${WINDOW_SIZE_WIDTH}   ${WINDOW_SIZE_HEIGHT}
    ${options}  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
    Call Method  ${options}  add_argument  --no-sandbox
    ${prefs}    Create Dictionary    download.default_directory=${TMP_PATH}
    Call Method    ${options}    add_experimental_option    prefs    ${prefs}
    Create Webdriver    ${BROWSER}    chrome_options=${options}
