# Use a specific version of Python as the base image
FROM python:3.11.1-slim

# Copy only the necessary files needed for installation
COPY requirements.txt /app/

# Set the working directory within the container
WORKDIR /app

# Update the pip version
RUN pip install --upgrade pip

# Install the Python packages listed in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /app

# Expose port 8080 for the Flask application
EXPOSE 8080

# Define the command to start your Flask application
CMD ["gunicorn", "app:app"]
