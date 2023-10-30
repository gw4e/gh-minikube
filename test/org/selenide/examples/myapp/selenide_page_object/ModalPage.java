package org.selenide.examples.myapp.selenide_page_object;

import com.codeborne.selenide.Condition;
import static com.codeborne.selenide.Selenide.$;

import org.selenide.examples.myapp.selenide_page_object.TestBasePage;
import com.codeborne.selenide.SelenideElement;
import static com.codeborne.selenide.Selenide.$x;

public class ModalPage extends TestBasePage {
    public SelenideElement getSubmit() {
        return $x("//button[contains(., 'Submit')]");
    }

    public boolean isReady() {
        try {
            $("h5.modal-title").shouldBe(Condition.visible);
            SelenideElement inputField = $("#first"); // Use the appropriate CSS selector
            inputField.setValue("value");
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean feed() {
        try {
            SelenideElement fname = $("#first"); // Use the appropriate CSS selector
            fname.setValue("first name");
            SelenideElement lname = $("#last"); // Use the appropriate CSS selector
            lname.setValue("last name");
            SelenideElement email = $("#email"); // Use the appropriate CSS selector
            email.setValue("thetestemailvalue@gmail.com");
            SelenideElement phone = $("#phone"); // Use the appropriate CSS selector
            phone.setValue("0623662244");
            SelenideElement location = $("#location"); // Use the appropriate CSS selector
            location.setValue("thelocation");
            SelenideElement hobby = $("#hobby"); // Use the appropriate CSS selector
            hobby.setValue("hobby");

            SelenideElement button = this.getSubmit();
            button.click();

            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
