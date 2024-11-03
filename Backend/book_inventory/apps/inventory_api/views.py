from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, filters
from .models import Inventory
from .serializers import InventorySerializer
from rest_framework.response import Response
from rest_framework.decorators import action
import csv, json
from django.http import HttpResponse

class InventoryViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

    # Define filtering for title, author, genre
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'author', 'genre', 'publication_date', 'isbn']

    