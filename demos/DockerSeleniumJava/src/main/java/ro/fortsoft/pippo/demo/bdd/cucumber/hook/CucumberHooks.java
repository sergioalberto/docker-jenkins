package ro.fortsoft.pippo.demo.bdd.cucumber.hook;

import cucumber.api.java.Before;
import net.thucydides.core.annotations.ManagedPages;
import net.thucydides.core.pages.Pages;

/**
 * @author sbalamaci
 */
public class CucumberHooks {

    @ManagedPages
    private Pages pages;
    
    @Before
    public void openBrowser() {
//        Serenity.useFirefoxProfile(customFirefoxProfile());
/*
        pages.getConfiguration().getEnvironmentVariables()
                .setProperty(ThucydidesSystemProperty.WEBDRIVER_BASE_URL.getPropertyName(),
                        "http://tomcat:8080/pippo/");
*/
        pages.getDriver().manage().deleteAllCookies();
        pages.getDriver().manage().window().maximize();
    }



}
