*** Settings ***
Documentation  A resource file containing the application specific keywords
Library		Selenium2Library

*** Variables ***

*** Test Cases ***
TC_001 Login Logout Functionality
	Open Browser  https://thetestingworld.com/testings  Chrome
	Close Browser

*** Keywords ***
