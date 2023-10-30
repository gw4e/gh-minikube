package org.selenide.examples.myapp.selenide_page_object;

import org.junit.Test;

import static com.codeborne.selenide.CollectionCondition.sizeGreaterThan;
import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.open;
import  org.selenide.examples.myapp.selenide_page_object.HomePage;
import com.codeborne.selenide.Selenide;
import static com.codeborne.selenide.Condition.text;
import com.codeborne.selenide.SelenideElement;

public class AppTest {
  @Test
  public void userCanAdd() {
    open("http://mytestapp.com/");
    ModalPage mpage = new HomePage().addItem();
    mpage.isReady();
    mpage.feed();

    SelenideElement lastNameElt = new HomePage().getLastNameFromThirdRow();
    lastNameElt.shouldHave(text("last name"));
  }
}