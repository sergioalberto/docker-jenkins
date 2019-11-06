*** Settings ***
Documentation    Suite description
Library  SeleniumLibrary
Library  StringFormat

Variables   ../locators/locators.yaml

*** Keywords ***
navigate to Cart tab
    Go To   http://34.205.174.166/cart/

verify there are items on the Cart
    Element Should Not Be Visible   ${cart_page.cart_empty}

verify Cart is empty
    Wait Until Element Is Visible    ${cart_page.cart_empty}
    Element Should Be Visible   ${cart_page.cart_empty}

apply a coupon
    [Arguments]  ${coupon_name}
    Input Text   ${cart_page.coupon_code}   ${coupon_name}
    Press Keys   ${cart_page.coupon_code}   ENTER

verify error message
    [Arguments]  ${message}
    Wait Until Element Is Visible    ${cart_page.notice_error}
    Element Should Contain    ${cart_page.notice_error}   ${message}

delete some item from the Cart
    Click Element   ${cart_page.remove_item}
