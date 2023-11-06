from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Todo(models.Model):
    task=models.CharField(max_length=200)
    status=models.CharField(max_length=200,choices=(('completed','completed'),('incomplete','incomplete')))
    def __str__(self):
        return self.task

class Login(models.Model):
    user=models.ForeignKey(User,on_delete=models.SET_NULL,null=True,blank=True)
    name=models.CharField(max_length=50)
    password=models.CharField(max_length=50)
