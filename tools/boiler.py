import requests
from boilerpy3 import extractors

def run(url: str, thread: dict):
    "Downloads page with the given url and returns text cleaned by boilerpy3."

    return extractors.ArticleExtractor().get_content_from_url(url)
