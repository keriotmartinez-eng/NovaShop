import pytest
from selenium import webdriver

@pytest.fixture
def driver():
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    
    driver = webdriver.Remote(
        command_executor='http://selenium-chrome:4444/wd/hub',
        options=options
    )
    yield driver
    driver.quit()

def test_frontend_home(driver):
    driver.get("http://frontend:5173/")
    assert driver.title != "" or "Vite" in driver.page_source
