from django.urls import path
from . import views
from .views import custom_login, custom_logout

urlpatterns = [
    path('', views.index, name='index'),
    path('dog-lookup/', views.dog_lookup, name='dog_lookup'),
    path('cat-lookup/', views.cat_lookup, name='cat_lookup'),
    
    #login and logout path
    
    path('login/', custom_login, name='login'),
    path('logout/', custom_logout, name='logout'),
]