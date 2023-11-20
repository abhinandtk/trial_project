from django.urls import path
from .import views

urlpatterns = [
    path('taskadd',views.taskadd,name='taskadd'),
    path('taskadd_two',views.taskadd_two.as_view(),name='taskadd_two'),
    path('Userlogin',views.Userlogin.as_view(),name='Userlogin'),
    path('UserRegister',views.UserRegister.as_view(),name='UserRegister'),
    path('task_get',views.task_get.as_view(),name='task_get')
]
