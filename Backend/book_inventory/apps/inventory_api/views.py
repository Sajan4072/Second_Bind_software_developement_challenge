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
    search_fields = ['title', 'author', 'genre']

    # Custom action for exporting data
    @action(detail=False, methods=['get'])
    def export(self, request, format=None):
        export_format = request.query_params.get('format', 'csv')
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)

        if export_format == 'json':
            response = HttpResponse(json.dumps(serializer.data), content_type="application/json")
            response['Content-Disposition'] = 'attachment; filename="books.json"'
        else:
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition'] = 'attachment; filename="books.csv"'
            writer = csv.writer(response)
            writer.writerow(['Entry ID', 'Title', 'Author', 'Genre', 'Publication Date', 'ISBN'])
            for book in serializer.data:
                writer.writerow([book['entry_id'], book['title'], book['author'], book['genre'], book['publication_date'], book['isbn']])

        return response