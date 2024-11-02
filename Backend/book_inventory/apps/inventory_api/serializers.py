from rest_framework import serializers
from .models import Inventory

#writing the serializer class to convert the model to json
class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = ['entry_id', 'title', 'author', 'genre', 'publication_date', 'isbn']