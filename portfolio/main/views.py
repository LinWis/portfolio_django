from django.http import HttpResponse
from django.shortcuts import render


def index(req):
    return render(req, 'main/main.html')


def test(req):
    return HttpResponse("<p>Hello world!</p>")
