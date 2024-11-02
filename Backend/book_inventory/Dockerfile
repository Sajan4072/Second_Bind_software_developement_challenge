FROM python:3.12-slim
WORKDIR /app



FROM python:3.12-slim

# Install required system packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc libpq-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY requirements.txt .


RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

# Run the Django development server
CMD ["python", "manage.py", "runserver","--settings" ,"book_inventory.settings.local", "0.0.0.0:8000"]