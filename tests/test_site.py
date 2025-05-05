import requests
from bs4 import BeautifulSoup

def test_homepage_loads():
    url = "https://neo163elf.github.io/silent-hill-2/"
    response = requests.get(url)
    assert response.status_code == 200, "Сайт не загрузился"

def test_main_title_exists():
    url = "https://neo163elf.github.io/silent-hill-2/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    assert soup.find('h1'), "Заголовок h1 не найден"