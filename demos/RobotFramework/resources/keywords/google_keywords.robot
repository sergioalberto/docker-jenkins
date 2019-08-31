*** Settings ***
Resource  ../page_objects/google_page.robot

*** Variables ***

${home_page_url}=   http://google.com

*** Keywords ***

I go to Google page
    GoTo    ${home_page_url}

I see the Google page
    ${title}=       Get Title
    Should Be Equal    Google    ${title}

I search '${value}' on Google
    google_page.I Search on Google  ${value}

I see '${value}' on results
    google_page.I see Google results  ${value}
