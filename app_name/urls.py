from django.urls import path
from . import views

urlpatterns = [
    path('app_name/', views.home),  # App-level home view
]
