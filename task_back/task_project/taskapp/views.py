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
    tasks=request.data
    for i in tasks:
        print('same',i.get('task'))
        queryset=self.serializer_class(data={'task':i.get('task'),'status':i.get('status')})
        if queryset.is_valid():
            queryset.save()
        else:
            return Response({'message':'error','errors':queryset.errors})  
    return Response({'message':'success'})
 
class task_get(APIView):
   serializer_class=Taskserializer
   def get(self,request):
      queryset=Todo.objects.all()
      serializer=self.serializer_class(queryset,many=True)
      print(queryset)
      return Response({'message':'success','data':serializer.data})
 
# request.user
# user_id
class Userauthentication(APIView):
   def post(self,request):
    username = request.data.get("username")
    password = request.data.get("password")
    print(username,password)
    user = authenticate(request, username=username, password=password)
    print(user)
    if user is not None:
        login(request, user)
        return Response('Login successfully')
    else:
        return Response('not Login ')
 
class UserRegister(APIView):
   def post(self,request):
      username=request.data.get('username')
      password=request.data.get('password')
      user_name=User.objects.filter(username=username)
      if user_name.exists():
         return Response('username already exits')
      user=User.objects.create(username=username)
      user.set_password(password)
      user.save()
      return Response('user registered successfully')

      

