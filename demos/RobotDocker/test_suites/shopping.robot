*** Settings ***
Documentation  Suite description
Library  SeleniumLibrary

Resource  ../resources/shopping_resource.robot
Resource  ../resources/qa_playground_resources.robot
Resource  ../resources/cart_resource.robot

Suite Setup   navigate to QA Playground
Suite Teardown   Close Browser

*** Variables ***
${COUPON}   Auto2019
${ERROR_MESSAGE}   Coupon "auto2019" does not exist!

*** Test Cases ***
Remove an item from cart
    [Tags]   test
    navigate to Shop tab
    add some item to the cart
    navigate to Cart tab
    verify there are items on the Cart
    apply a coupon    ${COUPON}
    verify error message    ${ERROR_MESSAGE}
    delete some item from the Cart
    verify Cart is empty
