from django.urls import path
from .import views

urlpatterns = [
    path('taskadd',views.taskadd,name='taskadd'),
    path('taskadd_two',views.taskadd_two.as_view(),name='taskadd_two'),
    path('Userauthentication',views.Userauthentication.as_view(),name='Userauthentication')
]
