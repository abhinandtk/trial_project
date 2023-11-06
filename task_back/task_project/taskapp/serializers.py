from rest_framework import serializers
from .models import Todo

class Taskserializer(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields='__all__'
    def __str__(self):
        return self.task