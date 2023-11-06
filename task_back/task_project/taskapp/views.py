from .models import Todo
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .serializers import Taskserializer
from rest_framework.views import APIView
from .models import Todo,User
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages


# Create your views here.
@api_view(['POST'])
def taskadd(request):
    task=request.data.get('task')
    status=request.data.get('status')
    queryset=Todo.objects.create(task=task,status=status)
    return Response({'message':'success'})


class taskadd_two(APIView):
 serializer_class=Taskserializer
 def post(self,request):
    task=request.data.get('task')
    status=request.data.get('status')
    queryset=self.serializer_class(data={'task':task,'status':status})
    if queryset.is_valid():
        queryset.save()
        return Response({'message':'success','data':queryset.data})
    return Response({'message':'error','errors':queryset.errors})
 
# request.user
# user_id
class Userauthentication(APIView):
   def post(self,request):
    username = request.data.get("username")
    password = request.data.get("password")
    print(username,password)
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response('Login successfully')
 
        # Redirect to a success page.
        ...
    else:
        # Return an 'invalid login' error message.
        ...
        return Response('not Login ')
 
  

      

