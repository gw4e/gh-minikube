package org.selenide.examples.myapp.selenide_page_object;

import com.codeborne.selenide.Selenide;

public class TestBasePage {
    public void open() {
        Selenide.open("http://localhost:3000");
    }
}
