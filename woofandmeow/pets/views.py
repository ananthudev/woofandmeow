from django.shortcuts import render

def index(request):
    return render(request, 'base.html')

def dog_lookup(request):
    return render(request, 'partialviews/dog.html')

def cat_lookup(request):
    return render(request, 'partialviews/cat.html')

