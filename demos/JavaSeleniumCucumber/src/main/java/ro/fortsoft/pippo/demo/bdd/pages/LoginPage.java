package ro.fortsoft.pippo.demo.bdd.pages;

import net.serenitybdd.core.annotations.findby.By;
import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.DefaultUrl;
import org.openqa.selenium.WebElement;
import ro.fortsoft.pippo.demo.bdd.config.Locators;

/**
 * @author Sergio GQ
 */
@DefaultUrl("http://localhost/login")
public class LoginPage extends PageObject {

    public void enterUsernameAndPassword(String username, String password) {
        WebElement txtUsername = find(By.name(Locators.getValue("login.txtUsername.name")));
        WebElement txtPassword = find(By.name(Locators.getValue("login.txtPassword.name")));

        typeInto(txtUsername, username);
        typeInto(txtPassword, password);
    }

    public void clickOnSubmit() {
        WebElement btnSubmit = find(By.name(Locators.getValue("login.btnSubmit.name")));
        clickOn(btnSubmit);
    }

}
