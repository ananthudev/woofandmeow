from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('dog-lookup/', views.dog_lookup, name='dog_lookup'),
    path('cat-lookup/', views.cat_lookup, name='cat_lookup'),
]