from selenium import webdriver


def example():

    driver = webdriver.Chrome()
    driver.get("http://34.205.174.166/")

    assert driver.find_element_by_id("masthead").is_displayed()
    driver.quit()


example()
