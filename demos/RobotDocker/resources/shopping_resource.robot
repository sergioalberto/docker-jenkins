*** Settings ***
Documentation    Suite description
Library  SeleniumLibrary
Library  StringFormat

Variables   ../locators/locators.yaml

*** Keywords ***
navigate to Shop tab
    Go To   http://34.205.174.166/shop/

add some item to the cart
    Click Element   ${shop_page.add_cart_button}
