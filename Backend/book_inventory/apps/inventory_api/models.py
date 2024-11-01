from django.db import models
from django.core.exceptions import ValidationError
import re

# Create your models here.
class Inventory(models.Model):
    entry_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=1000)
    author = models.CharField(max_length=1000)
    genre = models.CharField(max_length=1000)
    publication_date = models.DateField()
    isbn = models.CharField(max_length=13, unique=True)
 
#string representation of the model
    def __str__(self):
        return f"{self.title} by {self.author} isbn {self.isbn} genre {self.genre} published on {self.publication_date}"
        

 #check if the isbn is valid
    def clean(self):
        # ISBN validation to ensure it follows standard format
        if not re.match(r'^\d{13}$', self.isbn):
            raise ValidationError('ISBN must be 13 digits.')