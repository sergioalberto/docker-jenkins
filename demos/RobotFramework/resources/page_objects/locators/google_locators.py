from robot.utils import DotDict

locators_google_page = DotDict(
    {
        "search_field": "css:#searchform input[spellcheck='false']",
        "menu_item": "//*[@class = 'nav-menu']//a[text()='{}']",
        "cart_content": "css:.cart-contents",
    }
)
