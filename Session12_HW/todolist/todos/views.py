from django.shortcuts import render, redirect
from .models import Todo, Comment
from datetime import datetime
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth.decorators import login_required

# Create your views here.
def home(request):
    todos = Todo.objects.all().order_by('deadline')
    for todo in todos: #남은 날짜
      diff_date = todo.deadline - datetime.date(datetime.now())
      todo.remain = diff_date.days
    return render(request, 'home.html', { 'todos' : todos })

@login_required(login_url='/registration/login')
def mypage(request):
    myc = Comment.objects.all().filter(author=request.user)
    todos = Todo.objects.all().filter(author=request.user).order_by('deadline')
    for todo in todos: #남은 날짜
      diff_date = todo.deadline - datetime.date(datetime.now())
      todo.remain = diff_date.days
    return render(request, 'mypage.html', { 'todos' : todos, 'myc': myc })

@login_required(login_url='/registration/login')
def new(request):
    if request.method == 'POST':
        new_todo = Todo.objects.create(
            title = request.POST['title'],
            content = request.POST['content'],
            deadline = request.POST['deadline'],
            author = request.user,
        )
        return redirect('detail', new_todo.pk)
    return render(request, 'new.html')

def detail(request, todo_pk):
    todo = Todo.objects.get(pk=todo_pk)

    if request.method=='POST':
        content = request.POST['content']
        Comment.objects.create(
            todo=todo,
            content=content,
            author = request.user,
        )
        return redirect('detail', todo_pk)
    return render(request, 'detail.html', {'todo': todo})

def edit(request, todo_pk):
    todo = Todo.objects.get(pk=todo_pk)
    
    if request.method == 'POST':
        Todo.objects.filter(pk=todo_pk).update(
            title = request.POST['title'],
            content = request.POST['content'],
            deadline = request.POST['deadline'],
        )
        return redirect('detail', todo_pk)

    return render(request, 'edit.html', {'todo': todo})

def delete(request, todo_pk):
    todo = Todo.objects.get(pk=todo_pk)
    todo.delete()

    return redirect('home')

def delete_comment(request, todo_pk, comment_pk):
    comment = Comment.objects.get(pk=comment_pk)
    comment.delete()
    # if (request.GET.get('from') == 'mypage'):
    #     return redirect('mypage')
    return redirect('detail', todo_pk)

def signup(request):
    if (request.method == 'POST'):
        found_user = User.objects.filter(username=request.POST['username'])
        if (len(found_user) > 0):
            error = 'username이 이미 존재합니다'
            return render(request, 'registration/signup.html', {'error' : error})
        new_user = User.objects.create_user(
            username = request.POST['username'],
            password = request.POST['password'],
        )
        auth.login(request, new_user)
        return redirect('home')
    return render(request, 'registration/signup.html')

def login(request):
    if (request.method == 'POST'):
        found_user = auth.authenticate(
            username=request.POST['username'],
            password=request.POST['password'],
        )
        if (found_user is None):
            error = '아이디 또는 비밀번호가 틀렸습니다'
            return render(request, 'registration/login.html', {'error' : error})
        auth.login(request, found_user)
        return redirect('home')
    return render(request, 'registration/login.html')

def logout(request):
    auth.logout(request)
    # return redirect('https://accounts.kakao.com/logout?continue=https://accounts.kakao.com/weblogin/account')
    return redirect('home')