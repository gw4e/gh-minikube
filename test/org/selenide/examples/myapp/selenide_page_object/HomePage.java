package org.selenide.examples.myapp.selenide_page_object;

import com.codeborne.selenide.SelenideElement;
import static com.codeborne.selenide.Selenide.$x;
import static com.codeborne.selenide.Selenide.$$;
import org.selenide.examples.myapp.selenide_page_object.TestBasePage;
import  org.selenide.examples.myapp.selenide_page_object.ModalPage;


public class HomePage extends TestBasePage {
    public SelenideElement getAddItem() {
        return $x("//button[contains(., 'Add Item')]");
    }

    public ModalPage addItem() {
        SelenideElement button = getAddItem();
        button.click();

        return new ModalPage();
    }

    public SelenideElement getRowElement(int rowIndex) {
        return $$(".table.table-hover tbody tr").get(rowIndex);
    }

    public SelenideElement getLastNameFromThirdRow() {
        SelenideElement thirdRow = getRowElement(2);
        return thirdRow.$("td", 1);
    }


}
