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
    isbn = models.CharField(max_length=17, unique=True)  #considering dashes
 
#string representation of the model
    def __str__(self):
        return f"{self.title} by {self.author} isbn {self.isbn} genre {self.genre} published on {self.publication_date}"
    
    
    def clean(self):
        self.validate_isbn(self.isbn)

 #validation to ensure it follows standard format
    def validate_isbn(isbn):
    # Regular expression to match a 10- or 13-digit ISBN with optional dashes
        regex = r"^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\d-]+$"
    
    # Check if the ISBN matches the pattern
        if not re.match(regex, isbn):
            raise ValidationError("ISBN must be either a 10- or 13-digit number, with optional dashes.")

    # Remove dashes for consistency in digit checks
        isbn_digits = isbn.replace("-", "")

    # Check 13-digit ISBN check digit for ISBN-13
        if len(isbn_digits) == 13 and (isbn_digits.startswith("978") or isbn_digits.startswith("979")):
            total = 0
            for i, digit in enumerate(isbn_digits[:-1]):
                multiplier = 1 if i % 2 == 0 else 3
                total += int(digit) * multiplier

            check_digit = (10 - (total % 10)) % 10
            if check_digit != int(isbn_digits[-1]):
                raise ValidationError("Invalid ISBN check digit for ISBN-13.")
        elif len(isbn_digits) == 10:
        # Implement check digit validation for 10-digit ISBN if needed
            pass  # Add 10-digit validation logic if required
    